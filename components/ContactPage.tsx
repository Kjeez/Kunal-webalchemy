'use client';

import React, { useEffect, useState } from "react";
import {
  Mail, Phone, Send, MessageSquare, Calendar, MessageCircle,
  AlertCircle, CheckCircle, Loader2, MapPin, Clock
} from "lucide-react";
import { BreadcrumbNav, FaqSection, CtaBanner } from "./seo";

const ContactPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"message" | "call">("message");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Web Development");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    document.title = "Contact WebAlchemy — Get a Free Quote | Delhi NCR";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", "Get in touch with WebAlchemy for web development, design, or marketing. Based in Uttam Nagar, Delhi. Free consultation — reply within 30 minutes.");
    }

    // ContactPage JSON-LD
    const schema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact WebAlchemy",
      description: "Get in touch with WebAlchemy for web development, design, or digital marketing services in Delhi NCR.",
      url: "https://webalchemy.in/contact",
      mainEntity: {
        "@type": "ProfessionalService",
        name: "WebAlchemy",
        telephone: "+91-78385-83051",
        email: "contact@webalchemy.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Uttam Nagar",
          addressLocality: "New Delhi",
          addressRegion: "DL",
          postalCode: "110059",
          addressCountry: "IN",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "19:00",
        },
      },
    };
    let el = document.getElementById("contact-page-schema") as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = "contact-page-schema";
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);

    return () => {
      const s = document.getElementById("contact-page-schema");
      if (s) s.remove();
    };
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const value = rawValue.slice(0, 10);
    setPhone(value);
    if (value === "") { setPhoneError(""); return; }
    if (value.length < 10) { setPhoneError(`Enter 10 digits (remaining: ${10 - value.length})`); }
    else { setPhoneError(""); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    if (!name || !email) { setSubmitError("Please fill in your name and email"); return; }
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email,
          phone: phone ? `+91 ${phone}` : "",
          message: `Service: ${service}\n\n${message}`,
        }),
      });
      const data = await response.json();
      if (data.success) { window.location.href = "/thank-you"; }
      else { setSubmitError(data.message || "Failed to send. Please try again."); }
    } catch (error) {
      console.error("Error:", error);
      setSubmitError("Failed to send. Please try again or contact us directly.");
    } finally { setIsSubmitting(false); }
  };

  const faqItems = [
    {
      question: "How do I get a quote for my project?",
      answer:
        "The quickest way is to WhatsApp us at +91 78385 83051 with a brief description of what you need — business website, e-commerce store, app, or marketing campaign. We will reply within 30 minutes during business hours with initial questions, then schedule a 20-minute discovery call to understand your scope. After that call, you receive a detailed, itemised quote within 2 business days. No cost, no obligation at any stage.",
    },
    {
      question: "Do you sign NDAs before discussing project details?",
      answer:
        "Yes, we are happy to sign a Non-Disclosure Agreement before you share any sensitive information. If you have your own NDA template, send it over and we will review and sign. If you need us to provide one, we have a standard mutual NDA ready to go. We take client confidentiality seriously — your business ideas, data, and strategy are never shared with anyone outside the project team.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We work on a milestone-based payment model. Typical structure: 50% advance to kick off the project, 25% at design approval, and 25% before final delivery and deployment. For ongoing retainers (marketing, maintenance, content), we bill monthly in advance. We accept bank transfers (NEFT/IMPS), UPI, and international wire transfers for overseas clients. GST invoices are provided for all payments.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, we actively work with clients in Canada, Tanzania, the UAE, and the UK. Time zone differences are managed through async communication (WhatsApp, email, Loom videos) and scheduled calls that work for both sides. International payments are accepted via wire transfer or Wise (TransferWise). The process, deliverables, and quality are identical — the only difference is we meet over video instead of in person.",
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-navy-900">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <BreadcrumbNav
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />

        {/* H1 + Intro */}
        <div className="mt-8 mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Get in Touch —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Free Consultation
            </span>
          </h1>
          <div className="space-y-4 text-gray-400 text-base md:text-lg leading-relaxed">
            <p>
              Send us a message, WhatsApp us, or book a strategy call — whichever works best for you. We reply within 30 minutes during business hours (Mon-Sat, 10am-7pm IST). After you reach out, here is what happens: we ask a few clarifying questions about your project, schedule a 20-minute discovery call to understand your goals and budget, then send you a detailed quote within 2 business days. No pressure, no hard sell — just a clear picture of what it takes to build what you need.
            </p>
            <p>
              If you prefer meeting in person, our office is in Uttam Nagar, West Delhi. Walk-ins are welcome — but a quick WhatsApp message beforehand ensures someone is available to sit down with you.
            </p>
          </div>
        </div>

        {/* NAP + Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-navy-800/30 border border-white/5">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Office Address</h3>
            <address className="text-gray-400 text-sm not-italic leading-relaxed">
              <strong className="text-white">WebAlchemy</strong><br />
              Uttam Nagar<br />
              New Delhi 110059<br />
              India
            </address>
          </div>

          <div className="p-6 rounded-2xl bg-navy-800/30 border border-white/5">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="text-emerald-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/917838583051"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium text-sm"
            >
              +91 78385 83051
            </a>
            <p className="text-gray-500 text-xs mt-1">Fastest way to reach us</p>
          </div>

          <div className="p-6 rounded-2xl bg-navy-800/30 border border-white/5">
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-purple-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <a href="mailto:contact@webalchemy.in" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
              contact@webalchemy.in
            </a>
            <p className="text-gray-500 text-xs mt-1">For proposals and documents</p>
          </div>

          <div className="p-6 rounded-2xl bg-navy-800/30 border border-white/5">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="text-orange-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Business Hours</h3>
            <p className="text-gray-400 text-sm">Mon – Sat: 10:00 AM – 7:00 PM</p>
            <p className="text-gray-500 text-xs mt-1">IST (UTC+5:30)</p>
          </div>
        </div>

        {/* Form + Map side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-3 scale-95 opacity-50 pointer-events-none" />
            <div className="relative bg-navy-800/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl flex flex-col">
              {/* Tabs */}
              <div className="flex p-1 bg-navy-900/50 rounded-xl mb-8 border border-white/5 shrink-0">
                <button
                  onClick={() => setActiveTab("message")}
                  className={`flex-1 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${activeTab === "message" ? "bg-cyan-500 text-navy-900 shadow-lg shadow-cyan-500/20" : "text-gray-400 hover:text-white"}`}
                >
                  <MessageSquare size={16} />Send Message
                </button>
                <button
                  onClick={() => setActiveTab("call")}
                  className={`flex-1 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${activeTab === "call" ? "bg-cyan-500 text-navy-900 shadow-lg shadow-cyan-500/20" : "text-gray-400 hover:text-white"}`}
                >
                  <Calendar size={16} />Book Strategy Call
                </button>
              </div>

              {activeTab === "message" ? (
                isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 text-center">Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form className="space-y-6 animate-fade-in flex-grow" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-400">Mobile Number</label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium pointer-events-none select-none">+91</div>
                          <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} placeholder="78385 83051" maxLength={10} className={`w-full bg-navy-900/50 border rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${phoneError ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20" : "border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/50"}`} />
                        </div>
                        {phoneError && (
                          <div className="flex items-center gap-1.5 mt-1.5 text-red-400 animate-fade-in">
                            <AlertCircle size={14} /><span className="text-xs font-medium">{phoneError}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@company.com" className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-gray-400">Service Interested In</label>
                      <select id="service" value={service} onChange={(e) => setService(e.target.value)} className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none">
                        <option>Web Development</option>
                        <option>UI/UX Design</option>
                        <option>SEO &amp; Marketing</option>
                        <option>Mobile App</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-400">Project Details</label>
                      <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} placeholder="Tell us about your project goals and timeline..." className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none" />
                    </div>
                    {submitError && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                        <AlertCircle size={16} />{submitError}
                      </div>
                    )}
                    <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-navy-900 font-bold text-lg hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group mt-auto disabled:opacity-50 disabled:cursor-not-allowed">
                      {isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" />Sending...</>) : (<>Send Message<Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>)}
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
                  />
                </div>
              )}
            </div>
          </div>

          {/* Google Map + FAQ */}
          <div className="flex flex-col gap-12">
            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-white/5 h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7674!2d77.0458!3d28.6283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sUttam+Nagar%2C+New+Delhi%2C+110059!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WebAlchemy Office — Uttam Nagar, New Delhi"
              />
            </div>

            {/* FAQ */}
            <FaqSection
              heading="Questions about working with us"
              subheading="How engagements work, payment terms, and more."
              items={faqItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
