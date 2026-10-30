import React from "react"
import Link from "next/link"
import Header from "../component/header"
import Image from "next/image"

export default function Contact() {
    return (
        <>
            <Header />
            <main className="min-h-[75vh] flex items-center justify-center bg-[#F5F1E8]  py-16">
                <div className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-[#DEDCCF] bg-[#FAF8F2] px-7 py-10 text-center shadow-xl">
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#E9EBDD] blur-2xl opacity-70" />
                    <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[#EFE4D2] blur-2xl opacity-70" />

                    <div className="relative z-10">
                        <div className="relative mx-auto mb-6 h-32 w-32 rounded-full border-[5px] border-[#E5E5D9] bg-[#EAF0E5] shadow-md">

                            <div className="relative h-full w-full overflow-hidden rounded-full">
                                <Image
                                    src="/profile.png"
                                    alt="Fatemeh Dehghani"
                                    fill
                                    priority
                                    sizes="128px"
                                    className="object-cover object-center"
                                />
                            </div>
                            <span className="absolute bottom-1 right-0 z-10 h-6 w-6 rounded-full border-4 border-[#FAF8F2] bg-[#6F9B7D] shadow-sm" />

                        </div>

                        <h1 className="font-serif text-3xl font-bold text-[#193F34]">
                            Fatemeh Dehghani
                        </h1>

                        <div className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-[#E3E2D8] bg-[#F0F0E8] px-5 py-2">

                            <span className="text-xs font-bold tracking-[2px] text-[#526D5E]">
                                FRONT-END DEVELOPER
                            </span>

                            <span className="text-[#A17B4B]">✦</span>

                        </div>

                        <p className="mt-6 text-sm leading-7 text-[#788A82]">
                            Hi! I'm Fatemeh, a Computer Engineering graduate and aspiring
                            Front-End Developer passionate about creating beautiful,
                            responsive, and user-friendly web experiences.
                            I enjoy turning ideas into interactive interfaces, exploring
                            modern web technologies, and continuously improving my skills.
                            SAVORA is my first project built with Next.js and an important
                            milestone in my learning journey. Through this project, I'm
                            exploring Next.js, working with APIs, and improving my
                            understanding of building modern web applications.
                            It brings together my passion for web development, creativity,
                            and love for food.
                        </p>

                        <div className="my-6 h-px w-full bg-[#E5E3DA]" />

                        <div className="flex items-center justify-center gap-3 text-sm text-[#788A82]">
                            <span className="text-lg text-[#A17B4B]">♨</span>
                            <span>Made with love & a pinch of creativity</span>
                        </div>


                        <a href="mailto:ftm.dhgni@gmail.com" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#526D5E] hover:text-[#B17B3E] transition-colors">
                            <span>✉</span>
                            ftm.dhgni@gmail.com
                        </a>


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

                        <p className="mt-7 text-[10px] tracking-[3px] text-[#A2AAA0]">
                            GOOD FOOD · GOOD MOOD
                        </p>

                    </div>
                </div>

            </main>
        </>
    )
}