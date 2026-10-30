import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import Image from 'next/image'
import Link from 'next/link'


async function getData(api) {
    let x = await fetch(api, {
        next: {
            revalidate: 3600
        }
    });

    if (x.ok) {
        return await x.json()
    }

    throw new Error("Failed to fetch")
}


export default async function Recipe() {
    let temp = await getData('https://dummyjson.com/recipes')
    return (
        <main>
            <Header />

            <section className="relative w-full min-h-87.5 overflow-hidden bg-[#F5EFE5]">

                <div className="absolute w-full  h-87.5  overflow-hidden">
                    <Image src="/hero2-pasta.png" alt="pasta" fill priority className="object-cover" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto min-h-87.5 px-10 flex items-center">

                    <div className="w-full max-w-107.5 py-10">

                        <p className="text-[10px] md:text-xs tracking-[2.5px] font-semibold text-[#526D5E] mb-4">
                            ALL RECIPES
                        </p>

                        <h1 className="font-serif text-4xl  leading-[1.05] font-bold text-[#193F34]">
                            Discover Delicious
                            <br />
                            Recipes for Every Mood
                        </h1>

                        <p className="mt-4 text-sm md:text-base leading-6 text-[#777E75]">
                            From quick weeknight meals to special occasion dishes, find the perfect for every moment.
                        </p>
                    </div>
                </div>
            </section>


            <section className="bg-[#FAF8F2] py-12 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#193F34]">Choose your favorites</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                        {temp.recipes.map((val) => {
                            const url = val.id + '-' + val.name
                            return (
                                <div key={val.id} className="group cursor-pointer overflow-hidden rounded-xl bg-[#FFFEFA] border border-[#EAE5DC] shadow-sm hover:shadow-lg transition-all duration-300">

                                    <Link href={url}>
                                        <div className="relative w-full h-48 overflow-hidden">
                                            <Image src={val.image} alt={val.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105"/>

                                            <span className="absolute top-3 left-3 rounded-full bg-[#6F9B7D] px-3 py-1 text-[11px] font-medium text-white">
                                                {val.cuisine}
                                            </span>

                                        </div>

                                        <div className="p-4">

                                            <h3 className="font-serif text-lg font-semibold text-[#193F34] truncate">
                                                {val.name}
                                            </h3>

                                            <div className="flex items-center gap-2 mt-1 text-xs text-[#78847D]">
                                                <span>{val.cuisine}</span>
                                                <span>•</span>
                                                <span>{val.mealType}</span>
                                            </div>

                                            <div className="flex items-center gap-5 mt-3 text-xs text-[#697A73]">

                                                <span className="flex items-center gap-1">
                                                    <span className="text-[#E99A28] text-base">★</span>
                                                    <span className="font-medium text-[#354A40]">
                                                        {val.rating}
                                                    </span>
                                                    <span>({val.reviewCount})</span>
                                                </span>

                                                <span className="flex items-center gap-1">
                                                    <span className="text-sm">◷</span>
                                                    {val.cookTimeMinutes} mins
                                                </span>

                                            </div>

                                            <p className="mt-3 text-xs leading-5 text-[#82908A] line-clamp-2">
                                                {val.ingredients?.slice(0, 3).join(", ")}
                                            </p>

                                            <Link href={`/recipes/${val.id}`} className="inline-flex items-center gap-2 mt-4 text-xs font-medium text-[#25483B] hover:text-[#D18B35] transition-colors"> View Recipe <span>→</span>
                                            </Link>
                                        </div>
                                    </Link>

                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}