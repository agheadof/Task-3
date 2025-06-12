import { missionImages } from "../../assets/ImgImports"
import Card from "../../components/Card"
import MyButton from "../../components/MyButton"
import { missionData } from "./AboutData"

const Mission = () => {
    return (
        <div className="flex flex-col items-center gap-5 mt-52 ">
            <MyButton>Mission & Visions</MyButton>
            <p className="font-Raleway text-5xl font-bold text-center mx-4">Our Mission & Visions</p>
            <p className="text-lg text-center mx-4 max-w-[62%]">We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.</p>
            <div className="flex max-mytablet:flex-col justify-around gap-60 m-60">
                <Card className="flex flex-col flex-1 justify-start p-16">
                    <div className="flex flex-row-reverse justify-between items-center mb-14">
                        <img className="max-mytablet:w-12 not-xl:w-20" src={missionImages.mission} />
                        <p className="font-Raleway text-5xl font-bold max-mytablet:text-3xl">{missionData[0].title}</p>
                    </div>
                    <p>{missionData[0].text}</p>
                </Card>
                <Card className="flex flex-col flex-1 justify-start p-16">
                    <div className="flex flex-row-reverse justify-between items-center mb-14">
                        <img className="max-mytablet:w-12 not-xl:w-20" src={missionImages.vision} />
                        <p className="font-Raleway text-5xl font-bold max-mytablet:text-3xl">{missionData[1].title}</p>
                    </div>
                    <p>{missionData[1].text}</p>
                </Card>
            </div>
        </div>
    )
}

export default Mission