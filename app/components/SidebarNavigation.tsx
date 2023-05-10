import { CrossIcon } from "../constants/icons"
import { links } from "../constants/links"
import User_Avatar from "../assets/user.png"
import Image from "next/image"
import Link from "next/link"

type SidebarNavigationProps = {
  closeSidebar: () => void
}

const SidebarNavigation = ({ closeSidebar }: SidebarNavigationProps) => {
  return (
    <>
      <aside className=" px-4 pt-5 fixed z-30 top-0 left-0 right-0 bottom-0 bg-[#F2FBF9]">
        <button className=" block  ml-auto " onClick={closeSidebar}>
          {" "}
          <CrossIcon />{" "}
        </button>

        <div className=" mx-10 mt-12 ">
          {/* user */}
          <div className=" flex justify-start items-center space-x-4 border-b pb-5 ">
            <Image
              src={User_Avatar}
              className=" w-12 h-12 rounded-full"
              alt=" User "
            />
            <div className="">
              <p className=" font-bold text-[#233735] ">Jane Smith</p>
              <p className=" text-xs text-[#7B8786] ">Sales Executive</p>
            </div>
          </div>
          {links.map((link) => {
            const { id, text, icon } = link
            return (
              <Link
                href="#"
                key={id}
                className=" relative flex justify-start items-center py-5 border-b space-x-4 border-[#E9EBEB]"
              >
                <span className="relative">
                  {icon}
                  {text === "Notifications" && (
                    <span className=" bg-[#F97777] text-white font-bold absolute -top-2 rounded-full w-5 h-5 text-[9px] -right-1 text-center flex justify-center items-center ">
                      25
                    </span>
                  )}
                </span>
                <span className=" text-[#233735] ">{text}</span>
              </Link>
            )
          })}
        </div>
      </aside>
    </>
  )
}

export default SidebarNavigation
