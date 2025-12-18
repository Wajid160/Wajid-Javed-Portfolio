import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ContactFormProps {
    projectTitle: string;
    onClose: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ projectTitle, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: `Hi Wajid,\n\nI came across your ${projectTitle} project and I'm interested in discussing similar automation solutions.\n\nBest regards`,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send email using mailto (browser will open email client)
            const subject = encodeURIComponent(`Interested in ${projectTitle}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            );

            window.location.href = `mailto:wajidjaved160@gmail.com?subject=${subject}&body=${body}`;

            // Show success message
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                onClose();
            }, 3000);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg max-w-md w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                    <X className="w-5 h-5" />
                </button>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Get in Touch
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                {showSuccess && (
                    <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center">
                        <div className="text-center p-6">
                            <div className="text-blue-600 dark:text-cyan-400 text-5xl mb-4">↗️</div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                Opening Email Client...
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400">
                                Please click <strong>Send</strong> in your mail app to complete the request.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
