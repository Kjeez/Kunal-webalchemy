import React, { useState } from 'react';
import { Mail, Phone, Send, Calendar, MessageSquare, MessageCircle, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-digit characters
    const rawValue = e.target.value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const value = rawValue.slice(0, 10);
    
    setPhone(value);

    // Validation logic
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
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setTimeout(() => setIsSubmitted(false), 5000);
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

  return (
    <section id="contact" className="relative w-full py-24 bg-navy-900 z-10 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Info */}
          <div className="flex flex-col space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Contact Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let's Build Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                  Extraordinary
                </span>
              </h2>
              <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-md">
                Ready to transform your digital presence? We are currently accepting new projects. Tell us about your vision.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-navy-800 border border-white/5 flex items-center justify-center group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <a href="mailto:contact@webalchemy.in" className="text-gray-400 hover:text-cyan-400 transition-colors">contact@webalchemy.in</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-navy-800 border border-white/5 flex items-center justify-center group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-300">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <a href="tel:+917838583051" className="text-gray-400 hover:text-purple-400 transition-colors">+91 78385 83051</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-navy-800 border border-white/5 flex items-center justify-center group-hover:border-green-500/30 group-hover:bg-green-500/10 transition-all duration-300">
                  <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">WhatsApp</h4>
                  <a href="https://wa.me/919625429686" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">+91 96254 29686</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form & Calendar */}
          <div className="relative">
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
                            placeholder="98765 43210"
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
                <div className="w-full bg-white rounded-xl overflow-hidden animate-fade-in h-[700px]">
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

        </div>
      </div>
    </section>
  );
};

export default Contact;