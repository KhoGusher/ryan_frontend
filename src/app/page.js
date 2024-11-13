
import React from "react"

import Testimonials from "../../components/Testimonials"
import AboutPage from "./about/page"

import HeroCarousel from "../../components/HomePage/Hero"
import CoreValues from "../../components/Corevalues"
import MissionVision from "../../components/MissionVision"
import AboutSection from "../../components/HomePage/Aboutpage"
import Subsidiaries from "../../components/Subsidiary"
import ServicesForm from "../../components/Services"


function page() {
  return (
    <div>
      <HeroCarousel/>
      <AboutSection/>
      <ServicesForm/>
      <Subsidiaries/>
      <Testimonials/>
      {/* <CoreValues/>
      <TeamSection/>
      <Subsidiaries/>
      <Testimonials/>
      <ImpactSection/>
      <AboutSection/>
      <Services/> */}
    </div>
  )
}

export default page
