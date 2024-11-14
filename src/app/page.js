import Testimonials from "../../components/Testimonials"
import AboutPage from "./about/page"

import HeroCarousel from "../../components/HomePage/Hero"
import CoreValues from "../../components/Corevalues"
import MissionVision from "../../components/MissionVision"
import AboutSection from "../../components/HomePage/Aboutpage"
import Subsidiaries from "../../components/Subsidiary"
import ServicesForm from "../../components/Services"
import ImpactSection from "../../components/Impact"
import IconSection from "../../components/HomePage/IconsSection"


function page() {
  return (
    <div>
      <HeroCarousel/>
      <IconSection/>
      <AboutSection/>
      <ServicesForm/>
      <Subsidiaries/>
      <ImpactSection/>
      <Testimonials/>

    </div>
  )
}

export default page
