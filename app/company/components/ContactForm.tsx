"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Building2,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API call - replace with actual API integration
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 md:p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.1 }}
          className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-emerald-600" />
        </motion.div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-slate-600 mb-6">
          Thank you for reaching out. We&apos;ll get back to you within 24-48
          hours.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormState({
              name: "",
              email: "",
              company: "",
              subject: "",
              message: "",
            });
          }}
          variant="outline"
          className="border-slate-200"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 md:p-12"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              placeholder="john@company.com"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Company Field */}
        <div>
          <label
            htmlFor="contact-company"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Company
          </label>
          <div className="relative">
            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              id="contact-company"
              name="company"
              value={formState.company}
              onChange={handleChange}
              placeholder="Your Company"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Subject
          </label>
          <select
            id="contact-subject"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none transition-all focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
          >
            <option value="">Select a topic</option>
            <option value="general">General Inquiry</option>
            <option value="demo">Request Demo</option>
            <option value="pricing">Pricing Information</option>
            <option value="partnership">Partnership</option>
            <option value="support">Technical Support</option>
          </select>
        </div>
      </div>

      {/* Message Field */}
      <div className="mb-8">
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Message *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
          <textarea
            id="contact-message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="How can we help you?"
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={
          isSubmitting ||
          !formState.name ||
          !formState.email ||
          !formState.message
        }
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-14 rounded-xl font-medium text-base shadow-lg shadow-emerald-600/25 disabled:opacity-60"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-5 h-5" />
            Send Message
          </span>
        )}
      </Button>
    </form>
  );
}
