import Link from "next/link"
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded bg-gradient-to-br from-palmvue-green to-palmvue-green-dark flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <span className="font-semibold text-lg tracking-tight text-slate-900">
                                PalmVue
                            </span>
                        </Link>
                        <p className="text-sm text-slate-500 mb-6 max-w-xs">
                            Infrastructure for trusted, compliant, and scalable palm seed production.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                                <span className="sr-only">GitHub</span>
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li><Link href="#features" className="text-sm text-slate-600 hover:text-palmvue-green transition-colors">Features</Link></li>
                            <li><Link href="#security" className="text-sm text-slate-600 hover:text-palmvue-green transition-colors">Security</Link></li>
                            <li><Link href="#compliance" className="text-sm text-slate-600 hover:text-palmvue-green transition-colors">Compliance</Link></li>
                            <li><Link href="#pricing" className="text-sm text-slate-600 hover:text-palmvue-green transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="#about" className="text-sm text-slate-600 hover:text-palmvue-green transition-colors">About</Link></li>
                            <li><Link href="#careers" className="text-sm text-slate-600 hover:text-palmvue-green transition-colors">Careers</Link></li>
                            <li><Link href="#blog" className="text-sm text-slate-600 hover:text-palmvue-green transition-colors">Blog</Link></li>
                            <li><Link href="#contact" className="text-sm text-slate-600 hover:text-palmvue-green transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="#privacy" className="text-sm text-slate-600 hover:text-palmvue-green transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#terms" className="text-sm text-slate-600 hover:text-palmvue-green transition-colors">Terms of Service</Link></li>
                            <li><Link href="#cookies" className="text-sm text-slate-600 hover:text-palmvue-green transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} PalmVue. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
