import React from 'react'
import Header from "./component/header"
import Link from 'next/link'
import Image from 'next/image'
import Footer from "./component/footer"

async function getData(api) {
  let x = await fetch(api, {
    next: {
      revalidate: 3600
    }
  })

  if (x.ok) {
    return await x.json()
  }

  throw new Error("Failed to fetch recipes")
}

export default async function page() {
  let temp = await getData('https://dummyjson.com/recipes')
  return (
    <>
      <Header />

      <section className="relative w-full min-h-87.5 overflow-hidden bg-[#F5EFE5]">

        <Image src="/hero-pasta.png" alt="Fresh pasta" fill priority className="object-cover" />

        <div className="relative z-10 max-w-7xl mx-auto min-h-87.5 px-6 flex items-center">

          <div className="w-full max-w-107.5 py-10">

            <p className="text-[10px] md:text-xs tracking-[2.5px] font-semibold text-[#526D5E] mb-4">
              FRESH RECIPES <span className="mx-2">•</span>
              REAL INGREDIENTS <span className="mx-2">•</span>
              BETTER MEALS
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-[58px] leading-[1.05] font-bold text-[#193F34]">
              Good food.
              <br />
              Great stories.
            </h1>

            <p className="mt-4 text-sm md:text-base leading-6 text-[#777E75]">
              Discover recipes worth sharing,
              <br />
              one delicious moment at a time.
            </p>

            <Link
              href="/recipes"
              className="group mt-5 inline-flex items-center gap-3 rounded-full bg-[#21483B] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D18B35] hover:shadow-lg">
              Explore Recipes
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>
        </div>

        <div className="absolute z-20 bottom-8 right-[8%] hidden sm:flex items-center gap-3 rounded-full bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">

          <span className="text-2xl text-[#397B5A]">★</span>

          <div>
            <p className="text-sm font-bold text-[#25483B]">
              50
            </p>
            <p className="text-[10px] text-[#858B82]">
              recipes to explore
            </p>
          </div>

        </div>

      </section>


      <section className="bg-[#FAF8F2] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#193F34]">
              Explore our favorites
            </h2>

            <Link href="/recipes" className="text-sm font-medium text-[#526D5E] hover:text-[#D18B35] transition-colors">
              View all recipes →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {temp.recipes.map((val, i) => {
              const url = val.id + '-' + val.name
              if (i < 6) {
                return (
                  <div key={val.id} className="cursor-pointer overflow-hidden rounded-xl bg-white border border-[#EAE5DC] shadow-sm hover:shadow-lg transition-all duration-300 ">

                    <Link href={url}>
                      <div className="relative w-full h-44 overflow-hidden">
                        <Image src={val.image} alt={val.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 hover:scale-105" />
                      </div>


                      <div className="p-4">
                        <h3 className="font-serif text-lg font-semibold text-[#25483B] truncate">
                          {val.name}
                        </h3>

                        <div className="flex items-center gap-2 mt-1 text-xs text-[#78847D]">
                          <span>{val.cuisine}</span>
                          <span>•</span>
                          <span>{val.mealType?.[0]}</span>
                        </div>

                        <div className="flex items-center gap-6 mt-3 text-xs text-[#697A73]">

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

                      </div>

                    </Link>

                  </div>
                )
              }
            })}

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
