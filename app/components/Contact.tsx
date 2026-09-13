"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("husnainchnaz@outlook.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+48666022047");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Info Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Start a Conversation
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Let&apos;s build intelligent data solutions together.
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-10">
              Whether you are looking for a Senior BI Analyst, Applied AI Consultant, or a data engineering partner for EMEA operations, I&apos;m ready to connect.
            </p>

            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-between group hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block font-medium">Direct Email</span>
                    <a href="mailto:husnainchnaz@outlook.com" className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors">
                      husnainchnaz@outlook.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  {copiedEmail ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-between group hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block font-medium">Phone / WhatsApp</span>
                    <a href="tel:+48666022047" className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors">
                      +48-666022047
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  {copiedPhone ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block font-medium">Location &amp; Work Authorization</span>
                  <p className="text-sm font-semibold text-white">
                    Warsaw, Poland (EU Diploma / Work Auth • Prefers Vienna / EU / US Relocation)
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://github.com/hmustafa9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub Portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/husnain-mustafa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn Profile
              </a>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="p-8 md:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur relative">
            <h3 className="text-2xl font-bold text-white mb-2">Send a Direct Message</h3>
            <p className="text-zinc-400 text-sm mb-8">
              Fill out the form below and it will open your email client with your message pre-filled.
            </p>

            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Message Ready!</h4>
                <p className="text-zinc-400 text-sm">Thank you for reaching out. I look forward to connecting with you.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="s.jenkins@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Discussing a Senior BI Analyst or AI Consultant role..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
