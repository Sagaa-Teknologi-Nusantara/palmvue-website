"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone, Monitor, ArrowRight } from "lucide-react";
import {
  LINEAGE_FLOW,
  TRACKING_FEATURES,
  MOBILE_FEATURES,
  DASHBOARD_FEATURES,
} from "../constants/product";
import { MobileAppVisual, DashboardVisual } from "../components/Visuals";

export function DigitalTracking() {
  return (
    <section
      id="features"
      className="py-24 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Complete Digital Tracking
          </h2>
          <p className="text-lg text-slate-600">
            Every tree, inflorescence, pollen batch, and seed gets a unique
            digital identity. Scan a barcode in the field, and instantly see the
            complete history and lineage.
          </p>
        </div>

        {/* Lineage Flow Visualization */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
            {LINEAGE_FLOW.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="mt-2 text-sm font-medium text-slate-700">
                    {item.label}
                  </span>
                </div>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-slate-300 hidden sm:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {TRACKING_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MobileApp() {
  return (
    <section id="mobile" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-blue-600" />
              </div>
              <div className="text-left space-y-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Mobile App
                </h2>
                <p className="text-sm font-medium text-blue-600/60 uppercase tracking-wider">
                  for Field Workers
                </p>
              </div>
            </div>
            <p className="text-lg text-slate-600 mb-8">
              Your field teams don&apos;t need perfect internet to do their
              jobs. PalmVue&apos;s mobile app works seamlessly offline and syncs
              when connectivity returns.
            </p>

            <div className="space-y-6 mb-8">
              {MOBILE_FEATURES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/demo">
              <Button
                variant="outline"
                className="gap-2 border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                See It In Action
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 lg:mt-0">
            <MobileAppVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WebDashboard() {
  return (
    <section
      id="dashboard"
      className="py-24 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 mt-12 lg:mt-0">
            <DashboardVisual />
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Monitor className="w-7 h-7 text-purple-600" />
              </div>
              <div className="text-left space-y-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Web Dashboard
                </h2>
                <p className="text-sm font-medium text-purple-600/60 uppercase tracking-wider">
                  for Managers
                </p>
              </div>
            </div>
            <p className="text-lg text-slate-600 mb-8">
              A powerful command center for plantation managers and
              administrators. Full control over entities, workflows, approvals,
              and users.
            </p>

            <div className="space-y-6 mb-8">
              {DASHBOARD_FEATURES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/demo">
              <Button
                variant="outline"
                className="gap-2 border-purple-200 text-purple-600 hover:bg-purple-50"
              >
                See It In Action
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
