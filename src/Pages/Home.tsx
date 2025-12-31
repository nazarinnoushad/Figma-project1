import SofaBanner from "../Components/Home4"
import WhatWeDo from "../Components/Home5"
import Products from "../Components/Home6"
import HomeHero from "../Components/Home1"
import WhyChoose from "../Components/Home2"
import LargeImageCards from "../Components/Home3"
import Navbar from "../Components/Navbar"
import GallerySection from "../Components/Home7"
import Footer from "../Components/Footer"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeHero/>
        <WhyChoose/>
        <LargeImageCards/>
        <SofaBanner/>
        <WhatWeDo/>
        <Products/>
        <GallerySection/>
        <Footer/>
    </div>
  )
}

export default Home