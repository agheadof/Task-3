import type { FC } from "react"
import Card from "./Card"
import { historyImages } from "../assets/ImgImports"

interface historyCardProps {
    date: string,
    title: string,
    text: string
}

const HistoryCard: FC<historyCardProps> = ({ date, title, text }) => {
    return (
        <div className="flex flex-wrap gap-12 items-center mb-[100px] last-of-type:mb-0">

            <div className="flex items-center shrink-0">
                <img className="z-10" src={historyImages.hSpan} />
                <Card className="flex justify-center items-center gap-5 px-12 py-8 2xl:w-[18.95vw] 2xl:h-[184px] w-3xs h-28 max-mytablet:px-6 max-mytablet:py-5">
                    <img className="max-2xl:size-[60px]" src={historyImages.historyCubes} />
                    <p className="font-Raleway font-bold 2xl:text-[68px] text-[48px]">{date}</p>
                </Card>
            </div>

            <div className="ml-20 2xl:ml-0 flex-1 min-w-[250px]">
                <p className="font-Raleway 2xl:text-3xl text-[28px] font-bold max-mytablet:text-xl 2xl:mb-5">{title}</p>
                <p>{text}</p>
            </div>
        </div>

    )
}

export default HistoryCard