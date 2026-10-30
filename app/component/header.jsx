"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname()
    return (
        <header className="w-full bg-[#FAF8F2] border-b border-[#E9E5DB]">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center ">

                <Link href="/" className="shrink-0">
                    <Image src="/SAVORA%20Green%20Leaf%20Logo.png" width={155} height={60} alt="logo" className="object-contain" />
                </Link>

                <nav className="absolute left-1/2 -translate-x-1/2">
                    <ul className="flex items-center gap-9 text-[15px] font-medium text-[#25483B]">

                        <li>
                            <Link href="/" className={pathname == "/" ? "linkStyle linkStyle2" : "linkStyle"}>Home</Link>
                        </li>

                        <li>
                            <Link href="/recipes" className={pathname == "/recipes" ? "linkStyle linkStyle2" : "linkStyle"}>All Recipes</Link>
                        </li>

                        <li>
                            <Link href="/about" className={pathname == "/about" ? "linkStyle linkStyle2" : "linkStyle"}>About</Link>
                        </li>

                        <li>
                            <Link href="/contact" className={pathname == "/contact" ? "linkStyle linkStyle2" : "linkStyle"}>Contact</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}