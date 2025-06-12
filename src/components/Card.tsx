import type { FC, ReactNode } from "react"

interface CardProps {
    className?:string,
    children:ReactNode
}
const Card: FC<CardProps> = ({children , className}) => {
  return (
    <div className={`bg-white hover:shadow-[#FFAE80] hover:translate-1 transition-all ease-in-out duration-300 border-2 rounded-lg border-mygray shadow-myshadow ${className}`}>
        {children}
    </div>
  )
}

export default Card