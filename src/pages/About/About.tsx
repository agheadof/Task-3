import Awards from "./Awards"
import Mission from "./Mission"
import Welcome from "./Welcome"
import History from "./History"
import Teams from "./Teams"

const About = () => {
  return (
    <div>
      <Welcome/>  
      <Mission/> 
      <Awards/>
      <History/>
      <Teams/>
    </div>
  )
}

export default About