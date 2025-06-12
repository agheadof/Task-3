import type { FC, ReactNode } from 'react'

type myHandler = () => void


interface MyButtonProps {
  children: ReactNode,
  onClick?: myHandler,
  className?: string
}
const MyButton : FC< MyButtonProps > = ( {children, onClick, className} ) => {
    return (
        <button onClick={onClick} className={`border-2 border-mygray rounded-lg bg-white py-2.5 px-5 hover:bg-mygray hover:text-white hover:cursor-pointer transition duration-500 ease-in-out ${className}`}>
            {children}
        </button>

    )
}

export default MyButton