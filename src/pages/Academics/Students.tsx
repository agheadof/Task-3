import { useEffect, useState } from "react"
import Card from "../../components/Card"
import MyButton from "../../components/MyButton"
import { studentsData } from "./AcademicsData"

const Students = () => {
    const [heights, setHeights] = useState<number[]>([])

    useEffect(() => {
        const updateHeights = () => {
            const newHeights = studentsData.map((_, i) => {
                const el = document.getElementById(`img-${i}`)
                return el ? el.getBoundingClientRect().height + 70 : 100
            })
            setHeights(newHeights)
        }

        updateHeights()
        window.addEventListener("resize", updateHeights)
        return () => window.removeEventListener("resize", updateHeights)
    }, [])

    return (
        <div className="flex flex-col items-center gap-5 mt-52 ">
            <MyButton>Our Features</MyButton>
            <p className="font-Raleway text-5xl font-bold text-center mx-4">Our Special Features</p>
            <p className="text-lg text-center mx-4 max-w-[62%]">
                Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!
            </p>
            <div className="grid grid-cols-1 mytablet:grid-cols-3 gap-16 2xl:gap-y-20 m-60">
                {studentsData.map((item, index) => {
                    const height = heights[index] || 120
                    return (
                        <Card key={index} className="relative flex flex-col items-center gap-12 p-12 text-center">
                            <div
                                className={`absolute top-0 z-0 bg-[#FFEFE5] border-2 border-t-0 border-mygray rounded-b-xl w-[31.3542%]`}
                                style={{ height: `${height}px` }}
                            />
                            <img id={`img-${index}`} src={item.img} className="z-10" />
                            <div className="flex flex-col items-center gap-5">
                                <p className="font-Raleway font-bold text-[28px]">{item.title}</p>
                                <p>{item.text}</p>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Students
