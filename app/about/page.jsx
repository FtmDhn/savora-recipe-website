import React from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "../component/header"

export default function About() {
    return (
        <main className="bg-[#FAF8F2] text-[#25483B]">
            <Header />

            <section className="relative overflow-hidden px-6 py-20 md:py-28">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    <div>
                        <p className="text-xs font-semibold tracking-[4px] text-[#A17B4B] mb-5">OUR STORY</p>

                        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight text-[#193F34]">
                            More Than Just
                            <span className="block text-[#A17B4B] italic">
                                Recipes.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-lg text-sm md:text-base leading-8 text-[#788A82]">
                            At SAVORA, we believe that good food brings people
                            together. Our goal is to make cooking simple,
                            enjoyable, and inspiring for everyone.
                        </p>

                        <Link href="/recipes" className="inline-flex items-center gap-3 mt-8 rounded-full bg-[#25483B] px-7 py-3.5 text-sm text-white hover:bg-[#D18B35] transition-colors">
                            Explore Recipes 
                            <span>→</span>
                        </Link>
                    </div>

                    <div className="relative h-75 md:h-105 rounded-2xl overflow-hidden">
                        <Image src="/hero-pasta.png" alt="pasta" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover"/>
                    </div>
                </div>
            </section>


            <section className="bg-[#F2EEE4] py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">

                    <p className="text-xs tracking-[4px] text-[#A17B4B] mb-4">
                        HOW IT STARTED
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#193F34]">
                        A Little Love for Food
                    </h2>

                    <p className="mt-7 text-sm md:text-base leading-8 text-[#788A82]">
                        SAVORA was created with one simple idea: everyone
                        deserves to enjoy delicious homemade food.
                        We wanted to create a place where people can discover
                        new dishes, learn new cooking techniques, and find
                        inspiration for their everyday meals.
                    </p>

                    <p className="mt-4 text-sm md:text-base leading-8 text-[#788A82]">
                        From quick breakfasts to special dinners, we're here
                        to make every meal a little more special.
                    </p>

                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="text-center mb-12">
                    <p className="text-xs tracking-[4px] text-[#A17B4B] mb-4">
                        WHAT WE BELIEVE
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#193F34]">
                        The Heart of SAVORA
                    </h2>

                    <p className="mt-4 text-sm text-[#788A82]">
                        A few things that make our food philosophy special.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="rounded-2xl border border-[#EAE5DC] bg-white p-8 text-center hover:shadow-lg transition-shadow">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EDF2E9] text-3xl">
                            ♧
                        </div>

                        <h3 className="font-serif text-xl font-bold mt-5 text-[#193F34]">
                            Fresh Ingredients
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#788A82]">
                            Great meals begin with fresh ingredients
                            and simple, natural flavors.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[#EAE5DC] bg-white p-8 text-center hover:shadow-lg transition-shadow">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EDF2E9] text-3xl">
                            ♡
                        </div>

                        <h3 className="font-serif text-xl font-bold mt-5 text-[#193F34]">
                            Made with Love
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#788A82]">
                            Cooking is more than a daily task.
                            It's a way to share happiness.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[#EAE5DC] bg-white p-8 text-center hover:shadow-lg transition-shadow">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EDF2E9] text-3xl">
                            ✦
                        </div>

                        <h3 className="font-serif text-xl font-bold mt-5 text-[#193F34]">
                            Easy & Simple
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#788A82]">
                            Delicious cooking should be accessible
                            and enjoyable for everyone.
                        </p>
                    </div>

                </div>
            </section>

            <section className="px-6 pb-20">
                <div className="max-w-7xl mx-auto rounded-2xl bg-[#193F34] px-6 py-14 md:py-20 text-center">

                    <p className="text-xs tracking-[4px] text-[#D8B987] mb-4">
                        LET'S GET COOKING
                    </p>

                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">
                        Good Food, Good Mood.
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-[#D0DCD4]">
                        Find your next favorite recipe and make
                        something delicious today.
                    </p>

                    <Link href="/recipes" className="inline-flex mt-8 rounded-full bg-[#F5EFE5] px-8 py-3.5 text-sm font-medium text-[#193F34] hover:bg-[#D18B35] hover:text-white transition-colors">
                        Discover Recipes →
                    </Link>

                </div>
            </section>

        </main>
    )
}