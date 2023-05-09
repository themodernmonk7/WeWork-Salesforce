import Image from "next/image"
import HeaderImage from "../assets/Header1.jpg"
import WeLogo from "../assets/we.png"
import SalesforceLogo from "../assets/salesforce.png"

const Header = () => {
  return (
    <>
      <section className=" space-y-5 relative ">
        <div className="flex justify-between ">
          <h2 className=" text-secondary-color font-extrabold text-3xl ">
            WeWork + Salesforce
          </h2>
          <button className=" bg-primary-color text-white px-4 py-2 rounded-md font-medium ">
            Publish/Share
          </button>
        </div>
        <div className="  overflow-hidden rounded-xl relative ">
          <Image
            src={HeaderImage}
            width={500}
            height={500}
            className=" w-full h-56  object-center object-cover bg-center "
            alt="Picture of office"
          />
          <div className=" absolute top-0 right-0 bg-white/70 w-5/12 h-full flex justify-center items-center ">
            <span className=" font-extrabold text-5xl text-left w-1/2 ">
              Workspace Proposal
            </span>
          </div>
        </div>
        <div className=" absolute -bottom-10 left-5 rounded-xl bg-white  ">
          <div className=" flex justify-center items-center space-x-5 px-6 py-5 ">
            <Image
              src={WeLogo}
              className=" w-16 h-16 object-cover "
              alt="Logo of We company"
            />
            <span className=" text-4xl text-gray-400 font-light ">+</span>
            <Image
              src={SalesforceLogo}
              className=" w-16 h-16 object-cover "
              alt="Logo of Salesforce company"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
