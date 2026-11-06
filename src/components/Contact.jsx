import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Globe,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { CONTACT } from '../data/portfolio';

const ICONS = {
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Globe,
};

// .env file e ei 3 ta value rakho (Vite). Niche setup steps dekho.
const SERVICE_ID = 'service_5x7tfeh';
const TEMPLATE_ID = 'template_c45icti';
const PUBLIC_KEY = 'Dero2lnoAgrM9b0hT';

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const methods = [
    CONTACT.whatsapp,
    CONTACT.email,
    CONTACT.linkedin,
    CONTACT.facebook,
    CONTACT.vorsa,
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Spam bot protection (honeypot): bot ei hidden field fill korbe
    if (form.elements.website?.value) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError(
        'Email service is not configured yet. Please contact me directly.',
      );
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });
      form.reset();
      setSent(true);
      setTimeout(() => setSent(false), 6000);
    } catch (err) {
      console.error('EmailJS full error:', err);
      setError(
        err.text
          ? `EmailJS Error: ${err.text}`
          : 'Message could not be sent. Please open Console (F12) to see details.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left: contact methods */}
        <div className="space-y-8 lg:col-span-5">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Get in Touch
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {CONTACT.label} — I typically respond within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            {methods.map((method) => {
              const Icon = ICONS[method.icon];
              return (
                <a
                  key={method.id}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur shadow-sm hover:shadow-md transition-all group"
                  aria-label={method.label}
                >
                  <div className="h-10 w-10 rounded-xl border border-teal-500/20 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={20} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {method.label}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 truncate max-w-xs">
                      {method.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-7 min-w-0">
          <motion.form
            onSubmit={handleSubmit}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur-sm p-6 md:p-8 shadow-sm"
          >
            {sent && (
              <div
                role="status"
                className="flex items-start gap-3 p-4 mb-6 rounded-xl border border-teal-500/20 bg-teal-50/60 dark:bg-teal-900/10"
              >
                <CheckCircle2
                  className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Message sent!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div
                role="alert"
                className="flex items-start gap-3 p-4 mb-6 rounded-xl border border-red-500/20 bg-red-50/60 dark:bg-red-900/10"
              >
                <AlertCircle
                  className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-sm text-red-700 dark:text-red-300">
                  {error}
                </p>
              </div>
            )}

            {/* Honeypot: real user dekhbe na */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Field
                id="name"
                label="Full Name"
                placeholder="John Doe"
                required
                disabled={submitting}
              />
              <Field
                id="email"
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                required
                disabled={submitting}
              />
            </div>
            <Field
              id="message"
              label="Message"
              as="textarea"
              rows={4}
              placeholder="Tell me about your project..."
              required
              disabled={submitting}
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-5 md:w-auto px-6 py-3 rounded-xl bg-gradient-to-br from-teal-500 to-indigo-600 text-white font-semibold text-sm hover:from-teal-600 hover:to-indigo-700 shadow-lg shadow-teal-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">
              Your message goes straight to my inbox. No email app needed.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = 'text',
  as = 'input',
  placeholder,
  required,
  disabled,
  rows,
}) {
  const Comp = as === 'textarea' ? 'textarea' : 'input';
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
      >
        {label}
      </label>
      <Comp
        id={id}
        name={id}
        rows={rows}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        {...(Comp === 'input' ? { type } : {})}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500"
      />
    </div>
  );
}
