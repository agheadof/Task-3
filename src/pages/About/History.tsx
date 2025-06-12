import { historyImages } from "../../assets/ImgImports"
import Card from "../../components/Card"
import HistoryCard from "../../components/HistoryCard"
import MyButton from "../../components/MyButton"
import { historyData } from "./AboutData"

const History = () => {
    return (
        <div className="flex flex-col items-center gap-5 mt-52 ">
            <MyButton>Our Progressive Journey</MyButton>
            <p className="font-Raleway text-5xl font-bold text-center mx-4">Our History</p>
            <p className="text-lg text-center mx-4 max-w-[62%]">Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment</p>
            <Card className="relative m-24 p-[7.8125%] 2xl:p-[9.3984%] ">
            
                <img src={historyImages.vSpan} className="absolute top-[50%] -translate-y-[50%] w-[12px] h-[calc(100%-312px)] 2xl:h-[calc(100%-484px)]"/>
                {historyData.map((item, index) => {
                    return (
                        <HistoryCard key={index} date={item.year} title={item.title} text={item.text} />
                    )
                })}
            </Card>
        </div>
    )
}

export default History