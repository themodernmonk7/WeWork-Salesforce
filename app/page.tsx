"use client"

import { Navbar, Header, Btn } from "./components"

export default function Home() {
  return (
    <>
      <main className="m-10  ">
        <Navbar />
        <Header />
        <section className="mt-16 ">
          <div className=" flex justify-between ">
            <p className=" text-2xl font-bold text-[#233735] ">
              Project Scope Recap
            </p>
            <div className=" space-y-1 ">
              <div className=" flex justify-between space-x-10 ">
                <p className=" text-gray-500  ">Mutual Action Plan</p>
                <p className=" font-extrabold text-primary-color ">3%</p>
              </div>
              <div className=" space-x-1 flex justify-center items-center  ">
                {[...Array(17)].map((_, i) => (
                  <span
                    key={i}
                    className="w-3 h-2 bg-gray-300 first:bg-primary-color first:rounded-l-xl last:rounded-r-xl "
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <Btn />
      </main>
    </>
  )
}
