import React from "react"

const Btn = () => {
  return (
    <>
      <section className="mt-16 border-b ">
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
        <div className=" mt-5 flex justify-between ">
          <div className=" space-x-2 ">
            {["Basic info", "Files", "Mutual Action Plan", "Contact"].map(
              (btn, index) => {
                return (
                  <button
                    key={index}
                    className=" border border-gray-400/60 px-3 py-2 text-text-color-200 font-medium leading-5 first:text-primary-color rounded-t-md capitalize "
                  >
                    {btn}
                  </button>
                )
              }
            )}
          </div>
          <button className=" border border-gray-400/60 px-3 py-2 text-text-color-200 font-medium leading-5 first:text-primary-color rounded-t-md capitalize ">
            Internal actions
          </button>
        </div>
      </section>
    </>
  )
}

export default Btn
