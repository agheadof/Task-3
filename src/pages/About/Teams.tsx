import Card from "../../components/Card"
import MyButton from "../../components/MyButton"
import { teamData } from "./AboutData"
import mailButton from "../../assets/img/team-photos/mailButton.png"


const Teams = () => {
    return (
        <div className="flex flex-col items-center gap-5 mt-52 ">
            <MyButton>Our Teachers With Experties</MyButton>
            <p className="font-Raleway text-5xl font-bold text-center mx-4">Our Team Members</p>
            <p className="text-lg text-center mx-4 max-w-[62%]">At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.</p>
            <div className="grid grid-cols-1 mytablet:grid-cols-2 gap-12 my-[100px] mx-auto w-[83.125%]">
                {teamData.map((item, index) => {
                    return (
                        <Card key={index} className="p-12 flex flex-col gap-8">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4 ">
                                    <img className="size-60 mytablet:size-20 2xl:size-[100px]" src={item.photo} />
                                    <p className="font-Raleway font-extrabold text-xl mytablet:text-2xl 2xl:text-3xl">{item.name}</p>
                                </div>
                                <button className="hover:cursor-pointer flex-none">
                                    <img src={mailButton} className="size-14 mytablet:size-12 " />
                                </button>
                            </div>
                            <div className="flex flex-col items-start gap-8 bg-[#FFF5F0] p-8 border-2 border-mygray rounded-xl ">
                                <p className="font-semibold text-xl mytablet:text-2xl">{item.title}</p>
                                <p className="text-[16px] mytablet:text-xl">{item.text}</p>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Teams