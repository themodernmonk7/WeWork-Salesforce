import Image from "next/image"
import { Logo, SidebarNavigation } from "../components"
import {
  SearchIcon,
  InboxIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  MenuBar,
} from "../constants/icons"
import User_Avatar from "../assets/user.png"
import { useState } from "react"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <>
      <nav className=" flex items-center justify-between mt-5 mb-10 border-b pb-3 md:pb-5 ">
        <Logo />
        <button onClick={openSidebar} className=" md:hidden ">
          <MenuBar />
        </button>
        <div className=" hidden space-x-5 md:flex justify-center items-center ">
          <button className="">
            <SearchIcon />
          </button>
          <button className="">
            <InboxIcon />
          </button>
          <button className=" relative flex justify-center items-center ">
            <BellIcon />
            <span className=" bg-[#F97777] text-white font-bold absolute -top-2 rounded-full w-5 h-5 text-[9px] -right-1 text-center flex justify-center items-center ">
              25
            </span>
          </button>
          <button className="">
            <QuestionMarkCircleIcon />
          </button>
          <Image
            src={User_Avatar}
            alt=" user "
            className=" w-10 h-10 rounded-full cursor-pointer "
          />
        </div>
      </nav>
      {isSidebarOpen && <SidebarNavigation closeSidebar={closeSidebar} />}
    </>
  )
}

export default Navbar
