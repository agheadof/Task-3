import AwardCard from "../../components/AwardCard"
import Carousel from "../../components/Carousel"
import MyButton from "../../components/MyButton"
import { awardsData } from "./AboutData"

const Awards = () => {
    return (
        <div className="flex flex-col items-center gap-5 mt-52 ">
            <MyButton>Our Achievements</MyButton>
            <p className="font-Raleway text-5xl font-bold text-center mx-4">Our Awards and Recognitions</p>
            <p className="text-lg text-center mx-4 max-w-[62%]">Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students.</p>
            <div className="flex max-mytablet:flex-col justify-around gap-60 m-60">
                <Carousel>
                    {awardsData.map((item , index)=>{
                        return (
                            <AwardCard key={index} icon={item.icon} title={item.title} text={item.text}/>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default Awards