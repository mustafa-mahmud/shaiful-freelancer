import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Facebook, Globe } from "lucide-react";
import { CONTACT } from "../data/portfolio";

const ICONS = {
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Globe,
};

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const methods = [
    CONTACT.whatsapp,
    CONTACT.email,
    CONTACT.linkedin,
    CONTACT.facebook,
    CONTACT.vorsa,
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const name = form.elements.name.value.trim();
    const from = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${name || "Not provided"}\nEmail: ${from ||
        "Not provided"}\n\nMessage:\n${message}`
    );
    const mailto = `mailto:${CONTACT.email.href.replace("mailto:", "")}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      window.location.href = mailto;
      setSubmitting(false);
      setSent(true);
      setTimeout(() => setSent(false), 5000);
    }, 400);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5 space-y-8">
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
                  <div>
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

        <div className="lg:col-span-7 lg:col-start-2">
          <motion.form
            onSubmit={handleSubmit}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur-sm p-6 md:p-8 shadow-sm"
          >
            {sent ? (
              <div className="flex items-start gap-3 p-4 rounded-xl border border-teal-500/20 bg-teal-50/60 dark:bg-teal-900/10">
                <Mail className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Email client opened
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Your default mail application should open with a draft
                    addressed to {CONTACT.email}. Send it when ready.
                  </p>
                </div>
              </div>
            ) : (
              <>
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
                  className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-br from-teal-500 to-indigo-600 text-white font-semibold text-sm hover:from-teal-600 hover:to-indigo-700 shadow-lg shadow-teal-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-teal-500"
                >
                  {submitting ? "Opening email…" : "Send via Email"}
                </button>
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">
                  No backend — opens your default email client (<code className="text-slate-700 dark:text-slate-400">mailto</code>).
                </p>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, type = "text", as = "input", placeholder, required, disabled, rows }) {
  const Comp = as === "textarea" ? "textarea" : "input";
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
        {label}
      </label>
      <Comp
        id={id}
        name={id}
        type={type}
        as={as}
        rows={rows}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500"
      />
    </div>
  );
}
