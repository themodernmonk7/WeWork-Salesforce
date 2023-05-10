const Btn = () => {
  return (
    <>
      <section className="mt-16 border-b ">
        <div className=" flex justify-between ">
          <p className="text-base md:text-2xl font-bold text-[#233735] ">
            Project Scope Recap
          </p>
          <div className=" space-y-1  ">
            <div className=" flex justify-between space-x-10 text-xs md:text-base  ">
              <p className=" text-gray-500 ">Mutual Action Plan</p>
              <p className=" font-extrabold text-primary-color ">3%</p>
            </div>
            <div className=" space-x-1 flex justify-evenly md:justify-center items-center  ">
              {[...Array(17)].map((_, i) => (
                <span
                  key={i}
                  className=" w-[5px] h-[5px] md:w-3 md:h-2 bg-gray-300 first:bg-primary-color first:rounded-l-xl last:rounded-r-xl "
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" mt-5 flex items-center justify-between  ">
          <div className=" space-x-2 flex md:w-0 w-full justify-between ">
            {["Basic info", "Files", "Mutual Action Plan", "Contact"].map(
              (btn, index) => {
                return (
                  <button
                    key={index}
                    className=" first:bg-white border border-gray-400 px-2 md:px-3 py-2 text-text-color-200 font-semibold leading-5 first:text-primary-color rounded-t-md capitalize text-[13px] whitespace-nowrap md:text-base "
                  >
                    {btn}
                  </button>
                )
              }
            )}
          </div>
          <button className=" hidden md:block border border-gray-400/60 px-3 py-2 text-text-color-200 font-semibold leading-5 first:text-primary-color rounded-t-md capitalize ">
            Internal actions
          </button>
        </div>
      </section>
    </>
  )
}

export default Btn
