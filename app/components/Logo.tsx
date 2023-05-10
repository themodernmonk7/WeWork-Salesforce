import { ChevronRight } from "../constants/icons"

const Logo = () => {
  return (
    <>
      <div className=" flex justify-center items-center cursor-pointer space-x-1 ">
        <div className=" bg-primary-color w-10 h-10 rounded-full border-8 border-secondary-color "></div>
        <ChevronRight />
      </div>
    </>
  )
}

export default Logo
