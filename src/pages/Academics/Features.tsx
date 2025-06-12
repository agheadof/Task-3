import AwardCard from "../../components/AwardCard"
import MyButton from "../../components/MyButton"
import { featuresData } from "./AcademicsData"

const Features = () => {
    return (
        <div className="flex flex-col items-center gap-5 mt-52 ">
            <MyButton>Our Features</MyButton>
            <p className="font-Raleway text-5xl font-bold text-center mx-4">Our Special Features</p>
            <p className="text-lg text-center mx-4 max-w-[62%]">Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
            <div className="grid grid-cols-1 mytablet:grid-cols-3 gap-16 2xl:gap-y-20 m-60">
                {featuresData.map((item, index)=>{
                    return(
                        <AwardCard key={index} icon={item.icon} title={item.title} text={item.text}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Features