
import { useState, type FC } from "react"
import Card from "../../components/Card"
import MyButton from "../../components/MyButton"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6"

interface roomProps {
    img: string[],
    title: string,
    text: string
}

const Rooms: FC<roomProps> = ({ img, title, text }) => {


    const [items, setItems] = useState(img);

    const nextItem = () => {
        setItems((prevItems) => {
            const newItems = [...prevItems];
            const first = newItems.shift()!;
            newItems.push(first);
            return newItems;
        });
    };

    const prevItem = () => {
        setItems((prevItems) => {
            const newItems = [...prevItems];
            const last = newItems.pop()!;
            newItems.unshift(last);
            return newItems;
        });
    };

    return (
        <Card className="flex flex-col mytablet:items-start items-center ">
            <div className="-translate-y-1/2 flex justify-around w-full">
            {items.map((item, index) => {
                    return (
                        <img className={`size-[clamp(270px,83.2402%,358px)] mytablet:size-[21.5538%]  ${ index===0 ? "" : "max-mytablet:hidden" }`} key={index} src={item} />
                    )
                })}
            </div>
            <div className="w-full px-12 -translate-y-2/4 sm:-translate-y-8/12 text-center mytablet:text-start pt-40">
                <div className="flex flex-col-reverse mytablet:flex-row justify-between items-center  pb-8 gap-5">
                    <p className="font-Raleway font-bold text-xl mytablet:text-[34px] 2xl:text-[40px]">{title}</p>
                    <div className="flex gap-4">
                        <MyButton onClick={prevItem}>
                            <FaArrowLeftLong />
                        </MyButton>
                        <MyButton onClick={nextItem}>
                            <FaArrowRightLong />
                        </MyButton>
                    </div>
                </div>
                <p> {text} </p>
            </div>
        </Card>
    )
}

export default Rooms