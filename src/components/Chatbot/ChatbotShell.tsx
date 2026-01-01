import React, { useState, useRef, useEffect } from 'react';
import { content } from '../../config/content';
import { MessageSquare, X, Send, Sparkles, Calendar, FileText, Zap } from 'lucide-react';
import { Card } from '../UI/Card';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

interface Feature {
    icon: React.ReactNode;
    label: string;
    status: 'active' | 'coming-soon';
    action?: () => void;
}

export const ChatbotShell: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
    const [showFeatures, setShowFeatures] = useState(false);

    // Engaging loading messages that rotate
    const loadingMessages = [
        "Thinking...",
        "Processing your question...",
        "Consulting with AI...",
        "Almost there...",
        "Crafting a response...",
    ];

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Session management with localStorage - unique per user/browser with 24-hour expiration
    const getSessionId = () => {
        const SESSION_EXPIRY_HOURS = 24;
        const sessionKey = 'portfolio_chat_session_id';
        const timestampKey = 'portfolio_chat_session_timestamp';

        const storedSessionId = localStorage.getItem(sessionKey);
        const storedTimestamp = localStorage.getItem(timestampKey);

        // Check if session expired (24 hours)
        const now = Date.now();
        const isExpired = storedTimestamp && (now - parseInt(storedTimestamp)) > (SESSION_EXPIRY_HOURS * 60 * 60 * 1000);

        if (!storedSessionId || isExpired) {
            // Create truly unique session ID with multiple entropy sources
            const timestamp = Date.now();
            const random1 = Math.random().toString(36).substring(2, 15);
            const random2 = Math.random().toString(36).substring(2, 15);
            const sessionId = `portfolio_${timestamp}_${random1}_${random2}`;

            localStorage.setItem(sessionKey, sessionId);
            localStorage.setItem(timestampKey, now.toString());

            console.log('New session created:', sessionId);
            return sessionId;
        }

        return storedSessionId;
    };

    const { name, welcomeMessage, suggestedPrompts, apiEndpoint } = content.chatbot;

    // Features with status
    const features: Feature[] = [
        {
            icon: <MessageSquare className="w-4 h-4" />,
            label: 'AI Chat',
            status: 'active',
        },
        {
            icon: <Calendar className="w-4 h-4" />,
            label: 'Book Meeting',
            status: 'active',
            action: () => {
                setIsOpen(false);
                document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
        {
            icon: <FileText className="w-4 h-4" />,
            label: 'Get Quote',
            status: 'coming-soon',
        },
        {
            icon: <Zap className="w-4 h-4" />,
            label: 'Quick Audit',
            status: 'coming-soon',
        },
    ];

    // Rotate loading messages while typing
    useEffect(() => {
        if (isTyping) {
            const interval = setInterval(() => {
                setLoadingMessageIndex((prev) => (prev + 1) % loadingMessages.length);
            }, 2000); // Change message every 2 seconds

            return () => clearInterval(interval);
        } else {
            // Reset to first message when not typing
            setLoadingMessageIndex(0);
        }
    }, [isTyping, loadingMessages.length]);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // Focus input when chatbot opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Send welcome message when first opened
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    id: 'welcome',
                    text: welcomeMessage,
                    sender: 'bot',
                    timestamp: new Date(),
                },
            ]);
        }
    }, [isOpen, messages.length, welcomeMessage]);

    const sendMessage = async (text: string) => {
        const trimmedText = text.trim();

        // Input validation
        if (!trimmedText) return;
        if (trimmedText.length < 2) {
            const validationMessage: Message = {
                id: `validation_${Date.now()}`,
                text: 'Please enter at least 2 characters.',
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, validationMessage]);
            return;
        }
        if (trimmedText.length > 500) {
            const validationMessage: Message = {
                id: `validation_${Date.now()}`,
                text: 'Message is too long. Please keep it under 500 characters.',
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, validationMessage]);
            return;
        }

        const userMessage: Message = {
            id: `user_${Date.now()}`,
            text: trimmedText,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        try {
            const sessionId = getSessionId();

            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    session_id: sessionId,
                    message: trimmedText,
                    source: 'portfolio',
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Handle N8N response format: [{output: "..."}]
            let botReply = '';

            if (typeof data === 'string') {
                botReply = data;
            } else if (Array.isArray(data) && data.length > 0) {
                const firstItem = data[0];
                botReply = firstItem.output || firstItem.reply || firstItem.message || firstItem.response || JSON.stringify(firstItem);
            } else if (data.reply) {
                botReply = data.reply;
            } else if (data.message) {
                botReply = data.message;
            } else if (data.response) {
                botReply = data.response;
            } else if (data.output) {
                botReply = data.output;
            } else {
                botReply = JSON.stringify(data);
            }

            if (!botReply || botReply.trim() === '') {
                botReply = 'No response received from the assistant.';
            }

            const botMessage: Message = {
                id: `bot_${Date.now()}`,
                text: botReply,
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Chatbot error:', error);

            const errorMessage: Message = {
                id: `error_${Date.now()}`,
                text: 'The assistant is temporarily unavailable. Please try again.',
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(inputValue);
    };

    const handleSuggestedPrompt = (prompt: string) => {
        sendMessage(prompt);
    };

    // Floating Action Button (Closed State)
    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-accent hover:bg-brand-accent-dark text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-brand-accent/30 group"
                aria-label="Open chatbot"
            >
                <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
                {/* Pulse animation */}
                <span className="absolute w-full h-full rounded-full bg-brand-accent animate-ping opacity-30"></span>
            </button>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-md">
            <Card className="shadow-2xl ring-1 ring-black/5 flex flex-col h-[700px] max-h-[85vh] overflow-hidden">
                {/* Header - Brand Colors */}
                <div className="flex items-center justify-between p-4 border-b border-brand-primary/10 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold">{name}</h3>
                            <p className="text-xs text-white/80">AI-Powered Assistant</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Features Toggle */}
                        <button
                            onClick={() => setShowFeatures(!showFeatures)}
                            className={`p-2 rounded-lg transition-colors ${showFeatures ? 'bg-white/20' : 'hover:bg-white/10'}`}
                            aria-label="Toggle features"
                        >
                            <Zap className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Close chatbot"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Features Panel (Collapsible) */}
                {showFeatures && (
                    <div className="p-3 bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border">
                        <div className="grid grid-cols-2 gap-2">
                            {features.map((feature, idx) => (
                                <button
                                    key={idx}
                                    onClick={feature.action}
                                    disabled={feature.status === 'coming-soon'}
                                    className={`flex items-center gap-2 p-2.5 rounded-lg text-sm font-medium transition-all ${feature.status === 'active'
                                        ? 'bg-white dark:bg-dark-surface hover:bg-brand-accent/10 text-light-heading dark:text-dark-heading border border-light-border dark:border-dark-border hover:border-brand-accent'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    <span className={feature.status === 'active' ? 'text-brand-accent' : 'text-gray-400'}>
                                        {feature.icon}
                                    </span>
                                    <span className="flex-1 text-left">{feature.label}</span>
                                    {feature.status === 'coming-soon' && (
                                        <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full font-medium">
                                            Soon
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-light-bg dark:bg-dark-bg">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${message.sender === 'user'
                                    ? 'bg-brand-primary text-white'
                                    : 'bg-white dark:bg-dark-surface text-light-heading dark:text-dark-heading border border-light-border dark:border-dark-border shadow-sm'
                                    }`}
                            >
                                {message.sender === 'bot' ? (
                                    <div className="text-sm prose prose-sm dark:prose-invert max-w-none prose-ul:my-2 prose-li:my-0 prose-p:my-1 prose-a:text-brand-accent">
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                            {message.text}
                                        </ReactMarkdown>
                                    </div>
                                ) : (
                                    <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
                                )}
                                <p className={`text-xs mt-1.5 ${message.sender === 'user' ? 'text-white/70' : 'text-light-muted dark:text-dark-muted'}`}>
                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white dark:bg-dark-surface border border-brand-accent/30 rounded-2xl px-5 py-3 shadow-sm">
                                <div className="flex items-center space-x-3">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                    <p className="text-sm text-brand-accent font-medium">
                                        {loadingMessages[loadingMessageIndex]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {messages.length === 1 && (
                        <div className="space-y-2 mt-2">
                            <p className="text-xs text-light-muted dark:text-dark-muted text-center font-medium">Quick questions:</p>
                            <div className="space-y-2">
                                {suggestedPrompts.map((prompt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSuggestedPrompt(prompt)}
                                        className="w-full text-left px-4 py-2.5 text-sm bg-white dark:bg-dark-surface hover:bg-brand-accent/5 border border-light-border dark:border-dark-border hover:border-brand-accent rounded-xl transition-all text-light-body dark:text-dark-body group"
                                    >
                                        <span className="group-hover:text-brand-accent transition-colors">{prompt}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input - Improved */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-light-border dark:border-dark-border bg-white dark:bg-dark-surface">
                    <div className="flex space-x-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ask about our services..."
                            className="flex-1 px-4 py-2.5 border border-light-border dark:border-dark-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent bg-light-bg dark:bg-dark-bg text-light-heading dark:text-dark-heading placeholder:text-light-muted dark:placeholder:text-dark-muted"
                            disabled={isTyping}
                            maxLength={500}
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || isTyping}
                            className="px-4 py-2.5 bg-brand-accent hover:bg-brand-accent-dark text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
                            aria-label="Send message"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="text-[10px] text-light-muted dark:text-dark-muted mt-2 text-center">
                        Powered by AI • {inputValue.length}/500 characters
                    </p>
                </form>
            </Card>
        </div>
    );
};
