import { useState, Children, type ReactNode, type ReactElement } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import MyButton from "./MyButton";

interface CarouselProps {
  children: ReactNode[];
}

const Carousel = ({ children }: CarouselProps) => {

  const childrenArray = Children.toArray(children) as ReactElement[];

  const [items, setItems] = useState(childrenArray);

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
    <div  >
      <div className="flex gap-10">
        {items.map((child, index) => {
          const isDesktop = ![0, 1, 2].includes(index)
          const isMobile = index===0

          return (
            <div
              key={index}
              className={`${isDesktop ? "max-mytablet:hidden" : isMobile ? " mytablet:hidden " : "hidden " }`}>
              {child}
            </div>
          );
        })}
      </div>
      <div className="flex flex-row-reverse justify-between items-center mt-4 ">
        <div className="flex justify-center items-center gap-4">
        <MyButton onClick={prevItem}>
          <FaArrowLeftLong />
        </MyButton>
        <MyButton onClick={nextItem}>
          <FaArrowRightLong />
        </MyButton>
        </div>
        <p className="max-mytablet:hidden font-Raleway font-bold">{items.length-3} More Awards</p>
        <p className="mytablet:hidden font-Raleway font-bold">{items.length-1} More Awards</p>
      </div>
    </div>
  );
};

export default Carousel;
