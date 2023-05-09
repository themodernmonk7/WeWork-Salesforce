import React from "react"

const Sidebar = () => {
  return (
    <>
      <aside className=" bg-white w-56 px-5 py-4 rounded-xl shadow-sm  ">
        <p className=" text-text-color-200 font-medium text-[18px] mb-4 ">
          Overview
        </p>
        {[
          "Welcome",
          "Product Capabilities",
          "Customer Success Stories",
          "File Sharing",
          "Our Deck",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className=" border-t text-sm py-3 text-text-color-100 capitalize "
            >
              {item}{" "}
            </p>
          )
        })}
      </aside>
    </>
  )
}

export default Sidebar
