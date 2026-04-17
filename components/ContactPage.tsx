import React, { useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin, Twitter, Instagram, ChevronDown, ChevronUp, MessageSquare, Calendar, MessageCircle, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

const ContactPage: React.FC = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<'message' | 'call'>('message');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('Web Development');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\D/g, '');
        const value = rawValue.slice(0, 10);
        setPhone(value);

        if (value === '') {
            setPhoneError('');
            return;
        }

        if (value.length < 10) {
            setPhoneError(`Enter 10 digits (remaining: ${10 - value.length})`);
        } else {
            setPhoneError('');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError('');

        if (!name || !email) {
            setSubmitError('Please fill in your name and email');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone: phone ? `+91 ${phone}` : '',
                    message: `Service: ${service}\n\n${message}`,
                }),
            });

            const data = await response.json();

            if (data.success) {
                // Redirect to thank you page for Google Ads conversion tracking
                window.location.href = '/thank-you';
            } else {
                setSubmitError(data.message || 'Failed to send. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitError('Failed to send. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const faqData = [
        {
            question: "What industries do you specialize in?",
            answer: "We work across various sectors including SaaS, E-commerce, Healthcare, and FinTech. Our adaptable methodologies allow us to cater to specific industry needs effectively."
        },
        {
            question: "What is your typical project timeline?",
            answer: "Timelines vary by project scope. A standard website redesign often takes 4-8 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our initial consultation."
        },
        {
            question: "Do you offer post-launch support?",
            answer: "Absolutely. We offer various maintenance and support packages to ensure your digital product remains secure, up-to-date, and performing optimally after launch."
        },
        {
            question: "How do you handle pricing?",
            answer: "We operate on both project-based and retainer models, depending on your needs. We believe in transparent pricing and will provide a detailed proposal after understanding your requirements."
        }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-navy-900">

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Let's Build Something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Amazing Together</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                        Have a project in mind? We'd love to hear about it. Send us a message and let's start the conversation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Contact Form Container - Replicating Home Contact Style */}
                    <div className="relative order-2 lg:order-1">
                        {/* Glow behind form */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-3 scale-95 opacity-50 pointer-events-none"></div>

                        <div className="relative bg-navy-800/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl flex flex-col">

                            {/* Tabs */}
                            <div className="flex p-1 bg-navy-900/50 rounded-xl mb-8 border border-white/5 shrink-0">
                                <button
                                    onClick={() => setActiveTab('message')}
                                    className={`flex-1 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${activeTab === 'message' ? 'bg-cyan-500 text-navy-900 shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <MessageSquare size={16} />
                                    Send Message
                                </button>
                                <button
                                    onClick={() => setActiveTab('call')}
                                    className={`flex-1 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${activeTab === 'call' ? 'bg-cyan-500 text-navy-900 shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <Calendar size={16} />
                                    Book Strategy Call
                                </button>
                            </div>

                            {activeTab === 'message' ? (
                                isSubmitted ? (
                                    <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
                                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle className="w-8 h-8 text-emerald-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-gray-400 text-center">Thank you for reaching out. We'll get back to you shortly.</p>
                                    </div>
                                ) : (
                                    <form className="space-y-6 animate-fade-in flex-grow" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="John Doe"
                                                    className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-sm font-medium text-gray-400">Mobile Number</label>
                                                <div className="relative">
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium pointer-events-none select-none">
                                                        +91
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        value={phone}
                                                        onChange={handlePhoneChange}
                                                        placeholder="78385 83051"
                                                        maxLength={10}
                                                        className={`w-full bg-navy-900/50 border rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${phoneError
                                                            ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                                                            : 'border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/50'
                                                            }`}
                                                    />
                                                </div>
                                                {phoneError && (
                                                    <div className="flex items-center gap-1.5 mt-1.5 text-red-400 animate-fade-in">
                                                        <AlertCircle size={14} />
                                                        <span className="text-xs font-medium">{phoneError}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="john@company.com"
                                                className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="service" className="text-sm font-medium text-gray-400">Service Interested In</label>
                                            <select
                                                id="service"
                                                value={service}
                                                onChange={(e) => setService(e.target.value)}
                                                className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none"
                                            >
                                                <option>Web Development</option>
                                                <option>UI/UX Design</option>
                                                <option>SEO & Marketing</option>
                                                <option>Mobile App</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-gray-400">Project Details</label>
                                            <textarea
                                                id="message"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                rows={4}
                                                placeholder="Tell us about your project goals and timeline..."
                                                className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                                            ></textarea>
                                        </div>

                                        {submitError && (
                                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                                                <AlertCircle size={16} />
                                                {submitError}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-navy-900 font-bold text-lg hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group mt-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )
                            ) : (
                                <div className="w-full bg-white rounded-xl overflow-hidden animate-fade-in h-[600px]">
                                    <iframe
                                        src="https://calendly.com/yourtrickster-kg/30min"
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        title="Schedule Call"
                                        className="h-full w-full"
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Contact Info & FAQ - Right Side */}
                    <div className="flex flex-col gap-12 order-1 lg:order-2">

                        {/* Info Cards - Updated: WhatsApp instead of Office */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                            <div className="bg-navy-800/30 border border-white/5 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                                    <Mail className="text-cyan-400" size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">Email Us</h4>
                                <p className="text-gray-400 text-sm mb-1">General Inquiries</p>
                                <a href="mailto:contact@webalchemy.in" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">contact@webalchemy.in</a>
                            </div>

                            <div className="bg-navy-800/30 border border-white/5 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                                    <Phone className="text-purple-400" size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">Call Us</h4>
                                <p className="text-gray-400 text-sm mb-1">Mon-Fri from 9am to 6pm</p>
                                <a href="tel:+917838583051" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">+91 78385 83051</a>
                            </div>

                            <div className="bg-navy-800/30 border border-white/5 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors group md:col-span-2 lg:col-span-1 xl:col-span-2">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                                    <MessageCircle className="text-emerald-400" size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">WhatsApp</h4>
                                <p className="text-gray-400 text-sm mb-1">Chat regarding your project</p>
                                <a href="https://wa.me/917838583051" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors flex items-center gap-2">
                                    +91 78385 83051 <MessageCircle size={14} />
                                </a>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                                {faqData.map((item, index) => (
                                    <div key={index} className="bg-navy-800/30 border border-white/5 rounded-xl overflow-hidden transition-all">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                                        >
                                            <span className="font-medium text-white">{item.question}</span>
                                            {activeAccordion === index ? <ChevronUp size={20} className="text-cyan-400" /> : <ChevronDown size={20} className="text-gray-500" />}
                                        </button>
                                        <div
                                            className={`px-6 text-gray-400 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-40 py-4 border-t border-white/5' : 'max-h-0'}`}
                                        >
                                            {item.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-cyan-500 transition-all"><Github size={20} /></a>
                            <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all"><Linkedin size={20} /></a>
                            <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-blue-400 transition-all"><Twitter size={20} /></a>
                            <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-pink-600 transition-all"><Instagram size={20} /></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
