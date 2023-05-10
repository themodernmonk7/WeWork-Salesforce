import Image from "next/image"
import HeaderImage from "../assets/Header1.jpg"
import WeLogo from "../assets/we.png"
import SalesforceLogo from "../assets/salesforce.png"

const Header = () => {
  return (
    <>
      <section className=" space-y-5 relative ">
        {/* Title and Button */}
        <div className="flex justify-between items-center ">
          <h2 className=" text-secondary-color font-extrabold text-lg md:text-3xl ">
            WeWork + Salesforce
          </h2>
          <button className=" bg-primary-color text-sm md:text-base  text-white px-4 md:px-6 py-2 rounded-md font-medium ">
            Publish/Share
          </button>
        </div>

        {/* Banner */}
        <div className="overflow-hidden rounded-xl relative ">
          <Image
            src={HeaderImage}
            width={500}
            height={500}
            className=" w-full h-28 md:h-52  object-center object-cover bg-center "
            alt="Picture of office"
          />
          <div className=" absolute top-0 right-0 w-3/5 lg:w-1/2 h-full flex justify-end md:justify-center items-center lg:card cardMobile ">
            <span className=" font-extrabold md:text-3xl lg:text-5xl text-left w-1/2 md:w-1/5 ">
              Workspace Proposal
            </span>
          </div>
        </div>
        {/* We + Salesforce logo */}
        <div className="absolute -bottom-5 md:-bottom-10 left-4 md:left-5 rounded-xl bg-white shadow-sm  ">
          <div className=" flex justify-center items-center space-x-2 md:space-x-5 px-3 py-2 md:px-6 md:py-5 ">
            <Image
              src={WeLogo}
              className=" w-10 h-10 md:w-16 md:h-16 object-cover "
              alt="Logo of We company"
            />
            <span className=" text-xl md:text-4xl text-gray-400 font-light ">
              +
            </span>
            <Image
              src={SalesforceLogo}
              className=" w-10 h-10 md:w-16 md:h-16 object-cover "
              alt="Logo of Salesforce company"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
