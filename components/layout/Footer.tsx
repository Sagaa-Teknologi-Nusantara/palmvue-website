import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/white-icon.png"
                alt="PalmVue"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-semibold text-xl tracking-tight">
                PalmVue
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 max-w-xs">
              Complete visibility and control over your palm seed operations —
              from tree to harvest.
            </p>
            <a
              href="https://sagaa.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Built by Sagaa Teknologi Nusantara
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/product#features"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/product#mobile"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Mobile App
                </Link>
              </li>
              <li>
                <Link
                  href="/product#dashboard"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/product#analytics"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/demo"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Request Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/company#contact"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@sagaa.tech"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  contact@sagaa.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} PalmVue by Sagaa Teknologi
            Nusantara. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">Traceability You Can Trust</p>
        </div>
      </div>
    </footer>
  );
}
