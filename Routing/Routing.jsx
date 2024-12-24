import About from "@/components/HomePage/About/About"
import Speciality from "@/components/HomePage/About/Speciality"
import Hero from "@/components/HomePage/Hero/Hero"
import HomeCare from "@/components/HomePage/Hero/HomeCare"
import Healthcare from "@/components/HomePage/Section/Healthcare"
import Criticalcare from "@/components/HomePage/Section/Criticalcare"
import Navbar from "@/components/NavbarModel/Navbar"
import Event from "@/components/HomePage/Article/Event"
import Logs from "@/components/HomePage/Article/Logs"
import Inquire from "@/components/HomePage/Article/Inquire"
import Footer from "@/components/FooterModel/Footer"
import Testimonials from "@/components/HomePage/Section/Testimonials"
import Achivement from "@/components/HomePage/Section/Achivement"


const Routing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HomeCare/>
      <About/>
      <Speciality/>
      <Criticalcare/>
      <Achivement/>
      <Healthcare/>
      <Testimonials/>
      <Event/>
      <Logs/>
      <Inquire/>
      <Footer/>

    </div>
  )
}

export default Routing
