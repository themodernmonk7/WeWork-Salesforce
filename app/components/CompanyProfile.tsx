import Image from "next/image"
import React from "react"
import OfficeImage from "../assets/Office.jpg"
import WeWork_Logo from "../assets/WeWork_Logo.png"
import {
  ArrowDown,
  EyeSlash,
  TrashIcons,
  ChatBubble,
  ShareIcon,
  DocumentIcon,
  ArrowDownTray,
  ZoomIn,
  ZoomOut,
  ViewFinder,
  VerticalLine,
} from "../constants/icons"
const CompanyProfile = () => {
  return (
    <>
      <div className=" w-full ">
        <div className=" flex justify-between items-center ">
          <p className=" text-[#233735] font-bold md:text-2xl leading-5 ">
            Company Profile
          </p>
          {/* Buttons */}
          <button className=" block md:hidden ">
            {" "}
            <VerticalLine />{" "}
          </button>
          <div className=" hidden md:flex justify-center items-center space-x-4 border border-gray-400/60 rounded-md px-3 py-2 ">
            <button className="">
              {" "}
              <ArrowDown />{" "}
            </button>
            <span className=" w-[1px] h-5 bg-[#D3D7D7] "></span>
            <button className="">
              {" "}
              <EyeSlash />{" "}
            </button>
            <span className=" w-[1px] h-5 bg-[#D3D7D7] "></span>

            <button className="">
              {" "}
              <TrashIcons />{" "}
            </button>
          </div>
        </div>

        {/* Office */}
        <div className=" overflow-hidden rounded-md mt-5 md:mt-9 h-full md:h-2/3 relative ">
          <Image
            src={OfficeImage}
            className=" object-cover w-full h-full object-bottom "
            alt=" Office of WeWork + Salesforce "
          />
          <div className=" absolute top-5 inset-x-0 flex justify-center items-center ">
            <div className="  bg-white/70 rounded-md flex justify-center items-center space-x-3 md:space-x-5 py-2 px-4 border border-[#D3D7D7] backdrop-blur-sm ">
              <button className=" flex items-end justify-center space-x-2  ">
                {" "}
                <DocumentIcon />{" "}
                <span className=" text-[#233735] text-sm "> 1/15 </span>
              </button>
              <span className=" w-[1px] h-4 bg-[#D3D7D7] "></span>

              <button className="">
                {" "}
                <ArrowDownTray />{" "}
              </button>
              <span className=" w-[1px] h-4 bg-[#D3D7D7] "></span>

              <button className="">
                {" "}
                <ZoomIn />{" "}
              </button>
              <span className=" w-[1px] h-4 bg-[#D3D7D7] "></span>

              <button className="">
                {" "}
                <ZoomOut />{" "}
              </button>
              <span className=" w-[1px] h-4 bg-[#D3D7D7] "></span>

              <button className="">
                {" "}
                <ViewFinder />{" "}
              </button>
            </div>
          </div>

          <div className=" mt-20 absolute inset-0 flex justify-center items-center ">
            <div className=" bg-white/70  space-y-4 px-8 py-5 flex flex-col justify-center items-center ">
              <Image
                src={WeWork_Logo}
                className=" w-44 md:w-64 h-full object-cover "
                alt=" WeWork Logo "
              />
              <p className=" font-bold text-sm md:text-xl ">
                {`For all the ways you work, we're here`}
              </p>
            </div>
          </div>
        </div>
        {/* Share button */}
        <div className=" pb-5 md:pb-0 mt-5 flex justify-start items-center space-x-4 ">
          <button className=" relative ">
            <span className=" absolute text-[9px] -top-2 -right-1 bg-primary-color text-white w-5 h-5 text-center   font-semibold  flex justify-center items-center rounded-full ">
              8
            </span>{" "}
            <ChatBubble />{" "}
          </button>
          <span className=" w-[1px] h-6 bg-[#D3D7D7] "></span>

          <button className="">
            {" "}
            <ShareIcon />{" "}
          </button>
        </div>
      </div>
    </>
  )
}

export default CompanyProfile
