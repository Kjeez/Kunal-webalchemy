'use client';

import React, { useEffect, useState } from 'react';

/**
 * Paper-styled port of the legacy ServiceFormPopup — same 3-step flow
 * (details → optional brief → Calendly), same field labels, validation
 * messages, /api/estimate payload, and /thank-you redirect. Holds only
 * form chrome, no page copy.
 */

const SERVICES = [
  'Website Development',
  'Digital Marketing',
  'Website Maintenance',
  'PR & Media',
  'Mobile Apps',
  'Branding & Design',
];

export interface EstimateDialogProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  subServiceName?: string;
}

const EstimateDialog: React.FC<EstimateDialogProps> = ({
  isOpen,
  onClose,
  serviceName,
  subServiceName = '',
}) => {
  const [step, setStep] = useState(1);
  const [selectedServiceState, setSelectedServiceState] = useState(serviceName || '');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

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

  const handleSubmit = async (withSubject = true) => {
    setSubmitting(true);
    try {
      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: withSubject ? formData.subject : '',
          service: serviceName || selectedServiceState,
          subService: subServiceName,
        }),
      });
      const data = await response.json();
      if (data.success) {
        window.location.href = '/thank-you';
      } else {
        alert(data.message || 'Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleClose = () => {
    setStep(1);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="ndlg" role="dialog" aria-modal="true" aria-label={step === 3 ? 'Schedule a Call' : "Let's Get Started"}>
      <div className="ndlg-back" onClick={handleClose} />
      <div className={`ndlg-panel${step === 3 ? ' wide' : ''}`}>
        <button className="ndlg-x" onClick={handleClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>

        <h3>
          {step === 1 ? "Let's Get Started" : step === 2 ? 'One More Thing' : 'Schedule a Call'}
        </h3>
        <p className="sub">
          {step === 1
            ? "Fill in your details and we'll reach out"
            : step === 2
            ? 'Tell us about your project (optional)'
            : 'Pick a time that works for you'}
        </p>

        {step !== 3 && (
          <div className="steps" aria-hidden="true">
            <span className={step >= 1 ? 'on' : ''}></span>
            <span className={step >= 2 ? 'on' : ''}></span>
          </div>
        )}

        {step === 1 && (
          <>
            <div style={{ marginBottom: 18 }}>
              {serviceName ? (
                <div className="svc">
                  Selected Service
                  <b>{serviceName}</b>
                  {subServiceName && <span className="form-note">{subServiceName}</span>}
                </div>
              ) : (
                <div className="field">
                  <label htmlFor="est-service">Select a Service</label>
                  <select
                    id="est-service"
                    value={selectedServiceState}
                    onChange={(e) => setSelectedServiceState(e.target.value)}
                  >
                    <option value="">Choose a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className={`field${errors.name ? ' invalid' : ''}`}>
                <label htmlFor="est-name">Your Name</label>
                <input id="est-name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                {errors.name && <span className="ferr">{errors.name}</span>}
              </div>
              <div className={`field${errors.phone ? ' invalid' : ''}`}>
                <label htmlFor="est-phone">Phone Number</label>
                <input id="est-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 78385 83051" />
                {errors.phone && <span className="ferr">{errors.phone}</span>}
              </div>
              <div className={`field${errors.email ? ' invalid' : ''}`}>
                <label htmlFor="est-email">Email Address</label>
                <input id="est-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                {errors.email && <span className="ferr">{errors.email}</span>}
              </div>
              <div className="btnrow" style={{ marginTop: 6 }}>
                <button type="button" className="btn btn-dark" style={{ flex: 1 }} onClick={() => validateStep1() && setStep(2)}>
                  Next
                </button>
                <button type="button" className="btn btn-out" style={{ flex: 1 }} onClick={() => setStep(3)}>
                  Schedule Call
                </button>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="field">
              <label htmlFor="est-subject">Project Subject / Brief</label>
              <textarea
                id="est-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Tell us about your project, requirements, or any questions you have..."
                rows={4}
              />
            </div>
            <div className="btnrow">
              <button
                type="button"
                className="btn btn-dark"
                style={{ flex: 1 }}
                disabled={submitting}
                onClick={() => handleSubmit(formData.subject.trim() !== '')}
              >
                {submitting ? 'Sending...' : formData.subject.trim() ? 'Send' : 'Skip & Send'}
              </button>
              <button type="button" className="btn btn-out" style={{ flex: 1 }} onClick={() => setStep(3)}>
                Schedule Call
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ height: 550, borderRadius: 12, overflow: 'hidden', background: '#fff' }}>
            <iframe
              src="https://calendly.com/yourtrickster-kg/30min"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule Call"
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default EstimateDialog;
