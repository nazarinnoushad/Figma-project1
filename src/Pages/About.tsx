import AboutBanner from "../Components/About1"
import About2 from "../Components/About2"
import About3 from "../Components/About3"
import TeamSection from "../Components/About4"
import Footer from "../Components/Footer"

import Navbar from "../Components/Navbar"

const About = () => {
  return (
    <div>
     <Navbar/>  
     <AboutBanner/>  
     <About2/>
     <About3/>
     <TeamSection/>
     <Footer/>
     
    </div>
  )
}

export default About