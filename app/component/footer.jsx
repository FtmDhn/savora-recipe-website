import React from 'react'
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-full bg-[#102F28] text-[#F5F4EC]">
            <div className="max-w-7xl mx-auto px-6 pt-6 pb-5">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
                    <div className="col-span-2 md:col-span-1">

                        <Link href="/" className="inline-flex items-center gap-2">
                            <span className="text-3xl">❧</span>
                            <span className="font-serif text-2xl tracking-[2px]">
                                SAVORA
                            </span>
                        </Link>

                        <p className="text-xs text-[#D0D8D2] mt-2">
                            Real Recipes. Better Living.
                        </p>

                        <div className="mt-7 flex items-center justify-center gap-4">
                            <a href="https://github.com/FtmDhn" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25483B] text-white transition-all hover:-translate-y-1 hover:bg-[#A17B4B]">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.67-3.75-1.31-3.75-1.31-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.25-5.1 5.52.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
                                </svg>
                            </a>

                            <a href="mailto:ftm.dhgni@gmail.com" aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25483B] text-white transition-all hover:-translate-y-1 hover:bg-[#A17B4B]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <path d="m3 7 9 6 9-6" />
                                </svg>
                            </a>

                            <a href="https://ir.linkedin.com/in/fatemeh-dehghani-060973314" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25483B] text-white transition-all hover:-translate-y-1 hover:bg-[#A17B4B]">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.5 18H5.8V9.5h2.7ZM7.15 8.3a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM19 18h-2.7v-4.1c0-.98-.02-2.24-1.37-2.24-1.37 0-1.58 1.07-1.58 2.17V18h-2.7V9.5h2.59v1.16h.04a2.84 2.84 0 0 1 2.56-1.41c2.73 0 3.24 1.8 3.24 4.14Z" />
                                </svg>
                            </a>

                            <a href="https://instagram.com/ftm.dehgni" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25483B] text-white transition-all hover:-translate-y-1 hover:bg-[#A17B4B]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                                    <rect x="3" y="3" width="18" height="18" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                </svg>
                            </a>

                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold mb-3">Quick Links</h3>

                        <ul className="space-y-1.5 text-xs text-[#D0D8D2]">
                            {[
                                ["Home", "/"],
                                ["All Recipes", "/recipes"],
                                ["About", "/about"],
                                ["Contact", "/contact"],
                            ].map(([title, href]) => (
                                <li key={title}>
                                    <Link href={href} className="hover:text-[#D9A75E] transition-colors duration-200">
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-sm font-semibold mb-3">Popular Categories</h3>

                        <ul className="space-y-1.5 text-xs text-[#D0D8D2]">
                            {[
                                "Breakfast",
                                "Lunch",
                                "Dinner",
                                "Desserts",
                                "Healthy",
                            ].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-[#D9A75E] transition-colors duration-200">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold mb-3">Help & Support</h3>

                        <ul className="space-y-1.5 text-xs text-[#D0D8D2]">
                            {[
                                ["FAQ", "/faq"],
                                ["Privacy Policy", "/privacy"],
                                ["Terms of Service", "/terms"],
                                ["Contact Us", "/contact"],
                            ].map(([title, href]) => (
                                <li key={title}>
                                    <Link href={href} className="hover:text-[#D9A75E] transition-colors duration-200">
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden lg:flex items-center justify-center">
                        <p className="font-serif italic text-2xl text-center leading-tight -rotate-6 text-[#E4E7DD]">Good Food,
                            <br />
                            Good Mood
                            <span className="block text-sm mt-2">♡</span>
                        </p>
                    </div>

                </div>

                <div className="border-t border-[#496258] mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#C2CEC7]">
                    <p>© 2025 Savora. All rights reserved.</p>
                    <p>Made with <span className="text-[#5DBB87]">♥</span> for food lovers</p>
                </div>

            </div>
        </footer>
    );
}
