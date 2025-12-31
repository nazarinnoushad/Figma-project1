import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Project2 from "../Components/Project2"
import Project3 from "../Components/Project3"
import Project4 from "../Components/Project4"
import ProjectBanner from "../Components/Projects1"


const Projects = () => {
  return (
    <div>
        <Navbar/>
        <ProjectBanner/>
        <Project2/>
        <Project3/>
        <Project4/>
        <Footer/>
    </div>
  )
}

export default Projects