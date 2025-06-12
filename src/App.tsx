import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen pt-1 bg-[#FFF5F0]">
      <NavBar items={[{to:'/home', content:'Home'},{to:'/about', content:'About Us'},{to:'/academics', content:'Academics'},{to:'/admissions', content:'Admissions'},{to:'/studentlife', content:'Student Life'},{to:'/contact', content:'Contact'}]}/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
