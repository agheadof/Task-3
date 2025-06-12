import { welcomeImages } from "../../assets/ImgImports"
import Card from "../../components/Card"
import MyButton from "../../components/MyButton"
import { welcomeData } from "./AboutData"
const Welcome = () => {
  return (
    <Card className="relative flex gap-12 max-mytablet:gap-5 max-mytablet:flex-col justify-around mx-[50px] my-[60px]">
        <img className="absolute top-0 left-0 max-mytablet:size-24" src={welcomeImages.cubes} />
        <div className="flex-1 max-w-3xl ml-32 my-36 max-mytablet:my-12 max-mytablet:flex max-mytablet:flex-col max-mytablet:items-center max-mytablet:flex-none max-mytablet:mx-7 ">
          <MyButton className="mb-3.5" >Overview</MyButton>
          <p className="font-Raleway font-bold text-5xl max-mytablet:text-center max-mytablet:text-3xl ">{welcomeData.title}</p>
        </div>
        <p className="flex-1 max-w-3xl mr-32 my-36 max-mytablet:mb-12 max-mytablet:my-0 max-mytablet:flex-none max-mytablet:mx-7 text-xl">{welcomeData.text}</p>
      </Card>
  )
}

export default Welcome