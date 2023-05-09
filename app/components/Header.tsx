import React from "react"

const Header = () => {
  return (
    <>
      <section className=" flex justify-between ">
        <h2 className=" text-secondary-color font-extrabold text-3xl ">
          WoWork + Salesforce
        </h2>
        <button className=" bg-primary-color text-white px-5 rounded-md font-bold ">
          Publish/Share
        </button>
      </section>
    </>
  )
}

export default Header
