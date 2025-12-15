import React, { useState, useRef, useEffect } from 'react';
import { content } from '../../config/content';
import { MessageSquare, X, Send } from 'lucide-react';
import { Card } from '../UI/Card';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export const ChatbotShell: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Session management with localStorage
    const getSessionId = () => {
        let sessionId = localStorage.getItem('portfolio_chat_session_id');
        if (!sessionId) {
            sessionId = `portfolio_session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            localStorage.setItem('portfolio_chat_session_id', sessionId);
        }
        return sessionId;
    };

    const { name, welcomeMessage, suggestedPrompts, apiEndpoint } = content.chatbot;

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

            // Debug: Log response details (temporary for debugging)
            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Debug: Log the actual response data (temporary for debugging)
            console.log('Response data:', data);

            // Handle various possible response formats from n8n
            let botReply = '';
            if (typeof data === 'string') {
                // Response is a plain string
                botReply = data;
            } else if (data.reply) {
                // Response has a 'reply' field
                botReply = data.reply;
            } else if (data.message) {
                // Response has a 'message' field
                botReply = data.message;
            } else if (data.response) {
                // Response has a 'response' field
                botReply = data.response;
            } else if (data.output) {
                // Response has an 'output' field
                botReply = data.output;
            } else {
                // Fallback: stringify the whole response
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

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-cyan-300"
                aria-label="Open chatbot"
            >
                <MessageSquare className="w-6 h-6" />
            </button>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-md">
            <Card className="shadow-2xl ring-1 ring-black/5 flex flex-col h-[600px] max-h-[80vh]">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-blue-600 dark:bg-cyan-600 text-white rounded-t-lg">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold">{name}</h3>
                            <p className="text-xs text-white/80">AI Assistant</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Close chatbot"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-800">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] rounded-2xl px-4 py-2 ${message.sender === 'user'
                                    ? 'bg-blue-600 dark:bg-cyan-600 text-white'
                                    : 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-gray-200 dark:border-gray-600'
                                    }`}
                            >
                                <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
                                <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded-2xl px-4 py-3">
                                <div className="flex space-x-2">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        </div>
                    )}

                    {messages.length === 1 && (
                        <div className="space-y-2">
                            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">Try these questions:</p>
                            {suggestedPrompts.map((prompt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSuggestedPrompt(prompt)}
                                    className="w-full text-left px-4 py-2 text-sm bg-white dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 border border-gray-200 dark:border-gray-600 rounded-lg transition-colors text-slate-700 dark:text-slate-200"
                                >
                                    {prompt}
                                </button>
                            ))}
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900">
                    <div className="flex space-x-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message (2-500 chars)..."
                            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                            disabled={isTyping}
                            maxLength={500}
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || isTyping}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500"
                            aria-label="Send message"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};
