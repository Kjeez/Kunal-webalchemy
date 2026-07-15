'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle, ArrowRight, Phone, Calendar, ChevronDown } from 'lucide-react';

const SERVICES = [
    'Website Development',
    'Digital Marketing',
    'Website Maintenance',
    'PR & Media',
    'Mobile Apps',
    'Branding & Design',
];

interface ServiceFormPopupProps {
    isOpen: boolean;
    onClose: () => void;
    serviceName: string;
    subServiceName: string;
}

const ServiceFormPopup: React.FC<ServiceFormPopupProps> = ({
    isOpen,
    onClose,
    serviceName,
    subServiceName,
}) => {
    const [step, setStep] = useState(1);
    const [selectedServiceState, setSelectedServiceState] = useState(serviceName || '');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateStep1 = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, '')))
            newErrors.phone = 'Enter a valid 10-digit phone number';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = 'Enter a valid email address';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep1()) {
            setStep(2);
        }
    };

    const handleSubmit = async (withSubject: boolean = true) => {
        try {
            const response = await fetch('/api/estimate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    subject: withSubject ? formData.subject : '',
                    service: serviceName || selectedServiceState,
                    subService: subServiceName,
                }),
            });

            const data = await response.json();

            if (data.success) {
                // Redirect to thank you page for Google Ads conversion tracking
                window.location.href = '/thank-you';
            } else {
                alert(data.message || 'Failed to submit. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit. Please try again or contact us directly.');
        }
    };

    const handleScheduleCall = () => {
        // Show Calendly directly without validation
        setStep(3);
    };

    const resetForm = () => {
        setIsSubmitted(false);
        setStep(1);
        setSelectedServiceState(serviceName || '');
        setFormData({ name: '', phone: '', email: '', subject: '' });
        setErrors({});
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleClose = () => {
        setStep(1);
        setErrors({});
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" data-modal="service-form">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm z-[100]"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className={`relative z-[101] w-full ${step === 3 ? 'max-w-2xl' : 'max-w-md'} bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 rounded-3xl shadow-2xl shadow-cyan-900/30 overflow-hidden animate-zoom-in transition-all duration-300`}>
                {/* Header */}
                <div className="relative p-6 pb-4 border-b border-white/5">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                    <h3 className="text-2xl font-bold text-white">
                        {step === 1 ? "Let's Get Started" : step === 2 ? "One More Thing" : "Schedule a Call"}
                    </h3>
                    <p className="text-gray-400 mt-1">
                        {step === 1 ? "Fill in your details and we'll reach out" : step === 2 ? "Tell us about your project (optional)" : "Pick a time that works for you"}
                    </p>

                    {/* Step Indicator - hide on Calendly */}
                    {step !== 3 && (
                        <div className="flex gap-2 mt-4">
                            <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-cyan-500' : 'bg-white/10'}`} />
                            <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-cyan-500' : 'bg-white/10'}`} />
                        </div>
                    )}
                </div>

                {/* Service Info - only show on step 1 and not submitted */}
                {step === 1 && !isSubmitted && (
                    <div className="px-6 py-4 bg-cyan-500/5 border-b border-white/5">
                        {serviceName ? (
                            <>
                                <p className="text-sm text-gray-400">Selected Service</p>
                                <p className="text-lg font-semibold text-cyan-400">{serviceName}</p>
                                {subServiceName && <p className="text-sm text-gray-300">{subServiceName}</p>}
                            </>
                        ) : (
                            <>
                                <label className="block text-sm text-gray-400 mb-2">Select a Service</label>
                                <div className="relative">
                                    <select
                                        value={selectedServiceState}
                                        onChange={(e) => setSelectedServiceState(e.target.value)}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors cursor-pointer"
                                    >
                                        <option value="" className="bg-navy-900">Choose a service...</option>
                                        {SERVICES.map((service) => (
                                            <option key={service} value={service} className="bg-navy-900">
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                </div>
                            </>
                        )}
                    </div>
                )}

                {/* Form Content */}
                {isSubmitted ? (
                    <div className="p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                        <p className="text-gray-400">We'll contact you shortly.</p>
                    </div>
                ) : step === 1 ? (
                    /* Step 1: Contact Info */
                    <div className="p-6 space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className={`w-full px-4 py-3 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'
                                    } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors`}
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+91 78385 83051"
                                className={`w-full px-4 py-3 bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'
                                    } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors`}
                            />
                            {errors.phone && (
                                <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'
                                    } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors`}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                            )}
                        </div>

                        {/* Step 1 Buttons */}
                        <div className="flex gap-3 mt-4">
                            <button
                                type="button"
                                onClick={handleNext}
                                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-navy-900 font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300"
                            >
                                Next
                                <ArrowRight size={18} />
                            </button>
                            <button
                                type="button"
                                onClick={handleScheduleCall}
                                className="flex-1 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                            >
                                <Calendar size={18} />
                                Schedule Call
                            </button>
                        </div>
                    </div>
                ) : step === 2 ? (
                    /* Step 2: Subject */
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Project Subject / Brief
                            </label>
                            <textarea
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Tell us about your project, requirements, or any questions you have..."
                                rows={4}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                            />
                        </div>

                        {/* Step 2 Buttons */}
                        <div className="flex gap-3 mt-4">
                            <button
                                type="button"
                                onClick={() => handleSubmit(formData.subject.trim() !== '')}
                                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-navy-900 font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300"
                            >
                                <Send size={18} />
                                {formData.subject.trim() ? 'Send' : 'Skip & Send'}
                            </button>
                            <button
                                type="button"
                                onClick={handleScheduleCall}
                                className="flex-1 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                            >
                                <Calendar size={18} />
                                Schedule Call
                            </button>
                        </div>
                    </div>
                ) : step === 3 ? (
                    /* Step 3: Calendly */
                    <div className="w-full bg-white rounded-b-3xl overflow-hidden h-[550px]">
                        <iframe
                            src="https://calendly.com/yourtrickster-kg/30min"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Schedule Call"
                            className="h-full w-full"
                        ></iframe>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ServiceFormPopup;

