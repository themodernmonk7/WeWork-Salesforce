"use client"

import { Navbar, Header, Btn, Sidebar, CompanyProfile } from "./components"

export default function Home() {
  return (
    <>
      <main className=" container mx-auto px-3 xl:px-0  ">
        <Navbar />
        <Header />
        <Btn />
        <section className="flex gap-5 mt-5 md:mt-16 ">
          <Sidebar />
          <CompanyProfile />
        </section>
      </main>
    </>
  )
}
