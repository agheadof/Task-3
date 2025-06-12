import { NavLink } from "react-router-dom"
import { navBarImages } from "../assets/ImgImports"
import { useState } from "react"

interface item {
  to: string
  content: string
}

interface navItems {
  items: item[]
}

const NavBar = ({ items }: navItems) => {

  const [showNav, setShowNav] = useState<boolean>(false)

  return (
    <div className="mx-[50px] font-medium">
      <div className="bg-[#FFDECC] flex justify-center items-center relative border-2 rounded-lg border-mygray mt-[18px] contain-content h-14">
        <img className="absolute left-0 max-mytablet:w-[50px] h-full" src={navBarImages.leftShape} />
        <img className="absolute left-1/4 top-0 w-12 lg:w-[70px] max-mytablet:left-0 max-mytablet:w-8" src={navBarImages.leftBall} />
        <p className="max-mytablet:text-xs text-center z-10">Admission is Open, Grab your seat now</p>
        <img className="translate-y-0.5 z-10" src={navBarImages.rightArrow} />
        <img className="absolute right-0 max-mytablet:w-[50px] h-full" src={navBarImages.rightShape} />
        <img className="absolute right-1/4 bottom-0 w-8 lg:w-10 max-mytablet:right-0" src={navBarImages.rightBall} />
      </div>
      <nav className="bg-white flex contain-content items-center relative h-20 border-mygray border-2 rounded-lg mt-3.5" >
        <div className="mytablet:w-[230px] w-40 p-10 bg-[#FF8D4D] contain-content items-center border-r-2 border-mygray" >
          <img src={navBarImages.logo} alt="logo" className=" px-6 absolute left-0 -translate-y-1/2" />
        </div>
        <ul className="bg-white flex justify-end w-1/2 absolute right-0 top-1/2 -translate-y-1/2 max-mytablet:hidden">
          {items.map((item, index) => {
            return (
              <li
                key={index}
                className="relative transition duration-500 ease-in-out hover:bg-[#FFEFE5] xl:px-[34px] lg:px-3.5 px-[10px] py-7 whitespace-nowrap border-l-2 border-mygray last-of-type:bg-[#FFAE80]"
              >
                <NavLink
                  to={item.to}
                  className={({isActive}) => {
                    return isActive ? "bg-[#FFEFE5] absolute inset-0 z-10" : "absolute inset-0 w-full h-full z-10"
                  }}
                />
                <span className="relative z-20">{item.content}</span>
              </li>


            )
          })}
        </ul>
        <button onClick={() => setShowNav((prev) => !prev)} className="absolute end-0 px-8 py-8 border-l-2 border-mygray bg-[#FFEFE5] mytablet:hidden cursor-pointer">
          <img src={navBarImages.menu} />
        </button>
      </nav>
      <ul
        className={`bg-white col-1 text-center mytablet:hidden transition-all duration-500 ease-in-out overflow-hidden ${showNav ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'
          }`}
      >
        {items.map((item, index) => {
          return (
            <li key={index} className="relative transition duration-500 ease-in-out hover:bg-[#FFEFE5] xl:px-[34px] lg:px-3.5 px-[10px] py-4 whitespace-nowrap rounded-lg  border-t-0 border-2 border-mygray last-of-type:bg-[#FFAE80]">
              <NavLink
                  to={item.to}
                  className={({isActive}) => {
                    return isActive ? "bg-[#FFEFE5] absolute inset-0 z-10" : "absolute inset-0 w-full h-full z-10"
                  }}
                />
                <span className="relative z-20">{item.content}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavBar