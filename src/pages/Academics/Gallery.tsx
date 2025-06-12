import { useState } from "react"
import MyButton from "../../components/MyButton"
import { galleryData } from "./AcademicsData"
import Rooms from "./Rooms"

const Gallery = () => {
    const [filter, setFilter] = useState<string>("all")
    return (
        <div className="flex flex-col items-center gap-5 mt-52 ">
            <MyButton>Our Gallery</MyButton>
            <p className="font-Raleway text-5xl font-bold text-center mx-4">Our Rooms Gallery</p>
            <p className="text-lg text-center mx-4 max-w-[62%]">Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.</p>
            <div className="flex flex-col items-center gap-[295px] m-60 w-[83.125%]">
                <div className="w-full overflow-x-auto ">
                    <div className="flex justify-center flex-nowrap mytablet:gap-4 gap-2.5 min-w-max pl-4">
                        <MyButton
                            onClick={() => setFilter("all")}
                            className={`hover:!bg-[#FFEFE5] hover:!text-[#1e1e1e] ${filter === 'all' ? "!bg-[#FFEFE5]" : ''} font-semibold text-[16px] mytablet:text-xl whitespace-nowrap`}
                        >
                            All
                        </MyButton>
                        {
                            galleryData.map((item, index) => (
                                <MyButton
                                    key={index}
                                    onClick={() => setFilter(item.id)}
                                    className={`hover:!bg-[#FFEFE5] hover:!text-[#1e1e1e] ${filter === item.id ? "!bg-[#FFEFE5]" : ''} font-semibold text-xl whitespace-nowrap`}
                                >
                                    {item.title}
                                </MyButton>
                            ))
                        }
                    </div>
                </div>

                {galleryData.map((item, index) => {
                    return (
                        <>
                            {(filter === item.id ? true : filter === 'all' ? true : false) && < Rooms key={index} img={item.img} title={item.title} text={item.text} />}
                        </>

                    )
                })}
            </div>
        </div>
    )
}

export default Gallery