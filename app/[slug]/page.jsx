import React from 'react'
import Header from '../component/header'
import Footer from "../component/footer"
import Image from "next/image"
import Link from 'next/link'

async function getData(api) {
    let x = await fetch(api, {
        next: {
            revalidate: 3600
        }
    })

    if (x.ok) {
        return await x.json();
    }

    throw new Error("Failed to fetch recipes");
}

export default async function page({ params }) {

    const mySlug = await params;
    const temp = await getData(
        'https://dummyjson.com/recipes/' + parseInt(mySlug.slug)
    );

    return (
        <>
            <Header />

            <main className="bg-[#FAF8F2] text-[#25483B]">

                <div className=" mx-auto px-6 pt-6 mb-7 absolute right-0">
                    <Link href="/recipes" className="inline-flex items-center  rounded-full border border-[#DCE3DA] bg-white px-4 py-2 text-sm font-medium text-[#25483B] shadow-sm transition-all hover:bg-[#193F34] hover:text-white">
                        <span className="text-lg">←</span>
                    </Link>
                </div>

                <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#EAE5DC]">

                    <div className="relative w-full h-87.5 md:h-120">
                        <Image src={temp.image} alt={temp.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />

                        <span className="absolute top-6 left-6 rounded-full bg-[#6F9B7D] px-4 py-2 text-sm text-white">{temp.cuisine}</span>
                    </div>

                    <div className="flex flex-col justify-center px-6 py-10 md:px-12 lg:px-14">
                        <div className="text-xs text-[#87948D] mb-5">Home
                            <span className="mx-2">›</span>
                            All Recipes
                            <span className="mx-2">›</span>
                            {temp.name}
                        </div>

                        <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#193F34] leading-tight">{temp.name}</h1>

                        <div className="flex items-center gap-3 mt-5 text-sm">
                            <span className="text-[#6F8D79]">❧</span>
                            <span>{temp.cuisine}</span>
                            <span>•</span>
                            <span>{temp.mealType?.[0]}</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-7 mt-6 text-sm">
                            <span className="flex items-center gap-2">
                                <span className="text-[#E99A28] text-xl">★</span>
                                {temp.rating} ({temp.reviewCount})
                            </span>

                            <span className="flex items-center gap-2">
                                <span className="text-lg">◷</span>
                                {temp.cookTimeMinutes} mins
                            </span>

                        </div>

                        <p className="mt-7 max-w-md text-sm leading-7 text-[#788A82]">
                            Discover the delicious taste of {temp.name},
                            made with fresh ingredients and simple steps.
                        </p>

                        <button className="mt-6 w-fit rounded-full bg-[#25483B] px-7 py-3 text-sm text-white hover:bg-[#D18B35] transition-colors">
                            Save Recipe
                        </button>

                    </div>
                </section>


                <section className="max-w-7xl mx-auto px-6 py-10">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        <div className="lg:col-span-2">

                            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#193F34] mb-6">
                                Ingredients
                            </h2>

                            <ul className="space-y-4 mb-12">

                                {temp.ingredients.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 text-sm text-[#657B70">
                                        <span className="text-[#6F947B] text-lg">❧</span>
                                        {item}
                                    </li>
                                ))}

                            </ul>

                            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#193F34] mb-7">Instructions</h2>

                            <div className="space-y-6">

                                {temp.instructions.map((step, index) => (
                                    <div key={index} className="flex gap-4">

                                        <div className="flex flex-col items-center">

                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25483B] text-sm font-semibold text-white">
                                                {index + 1}
                                            </span>

                                            {index !== temp.instructions.length - 1 && (
                                                <div className="w-px flex-1 bg-[#DCE4DC] mt-2"></div>
                                            )}

                                        </div>

                                        <div className="pb-3">
                                            <h3 className="font-serif font-semibold text-[#25483B]">
                                                Step {index + 1}
                                            </h3>

                                            <p className="mt-2 text-sm leading-7 text-[#788A82">{step}</p>
                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                        <aside>
                            <div className="rounded-xl bg-[#F3F0E7] p-6">

                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-3xl">♧</span>
                                    <div>
                                        <p className="text-xs text-[#82918A]">Prep Time</p>
                                        <p className="mt-1 font-medium text-[#25483B]">
                                            {temp.prepTimeMinutes} mins
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-3xl">♨</span>
                                    <div>
                                        <p className="text-xs text-[#82918A]">Cook Time</p>
                                        <p className="mt-1 font-medium text-[#25483B]">
                                            {temp.cookTimeMinutes} mins
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-3xl">◷</span>
                                    <div>
                                        <p className="text-xs text-[#82918A]">Total Time</p>
                                        <p className="mt-1 font-medium text-[#25483B]">
                                            {temp.prepTimeMinutes + temp.cookTimeMinutes} mins
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-3xl">♙</span>
                                    <div>
                                        <p className="text-xs text-[#82918A]">Servings</p>
                                        <p className="mt-1 font-medium text-[#25483B]">
                                            {temp.servings} servings
                                        </p>
                                    </div>
                                </div>

                                <div className="border-t border-[#DCDDD3] pt-5">

                                    <h3 className="font-serif font-bold text-[#25483B] mb-4">
                                        Nutrition
                                        <span className="text-xs font-normal text-[#82918A]">
                                            {" "} (per serving)
                                        </span>
                                    </h3>

                                    <div className="space-y-3 text-sm text-[#788A82]">

                                        <div className="flex justify-between">
                                            <span>Calories</span>
                                            <span>{temp.caloriesPerServing} kcal</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span>Difficulty</span>
                                            <span>{temp.difficulty}</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span>Rating</span>
                                            <span>{temp.rating} / 5</span>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </aside>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    )
}