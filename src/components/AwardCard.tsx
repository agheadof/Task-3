import type { FC } from "react"
import Card from "./Card"

interface awardCardProps {
    icon: string,
    title: string,
    text: string
}
const AwardCard :FC<awardCardProps> = ({icon, title , text}) => {
    return (
        <Card className="relative flex flex-col flex-1 justify-start w-[26vw] max-mytablet:w-fit min-h-full px-12 py-20 max-mytablet:py-12 gap-5 ">
            <img className="absolute top-0 -translate-y-1/2 max-mytablet:w-14" src={icon} />
            <p className="font-Raleway text-3xl font-bold max-mytablet:text-xl">{title}</p>
            <p>{text}</p>
        </Card>
    )
}

export default AwardCard