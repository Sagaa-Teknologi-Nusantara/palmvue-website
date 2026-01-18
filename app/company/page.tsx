"use client";

import { motion } from "framer-motion";
import { Leaf, Users, Shield, ExternalLink } from "lucide-react";
import { ContactForm } from "./components/ContactForm";

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description:
      "We build tools that help the palm industry operate responsibly and transparently.",
    color: "emerald",
  },
  {
    icon: Users,
    title: "People Centered",
    description:
      "Technology should serve the people on the ground, not the other way around.",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "Every action recorded, every decision traceable. No shortcuts.",
    color: "purple",
  },
];

export default function CompanyPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6"
          >
            About PalmVue
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Built for the{" "}
            <span className="text-emerald-600">Palm Industry</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            PalmVue was created to solve the unique challenges of palm seed
            operations — because generic software just doesn&apos;t cut it.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-600">
              The principles that guide everything we build.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${
                    value.color === "emerald"
                      ? "bg-emerald-100"
                      : value.color === "blue"
                        ? "bg-blue-100"
                        : "bg-purple-100"
                  }`}
                >
                  <value.icon
                    className={`w-8 h-8 ${
                      value.color === "emerald"
                        ? "text-emerald-600"
                        : value.color === "blue"
                          ? "text-blue-600"
                          : "text-purple-600"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built by Sagaa */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm text-slate-400 uppercase tracking-wider mb-4">
              Built by
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Sagaa Teknologi Nusantara
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              A technology company focused on building innovative solutions for
              agriculture and supply chain transparency.
            </p>
            <a
              href="https://sagaa.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              Visit Sagaa
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-600">
              Have questions? We&apos;d love to hear from you.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
