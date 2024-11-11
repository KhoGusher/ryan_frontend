import AboutUs from "../../../components/About";
import MapSection from "../../../components/Contact/Map";
import CoreValues from "../../../components/Corevalues";
import MissionVision from "../../../components/MissionVision";
import TeamSection from "../../../components/TeamSection";
import Testimonials from "../../../components/Testimonials";

export default function AboutPage() {
  return (
    <div>
      <AboutUs/>
      <TeamSection/>
      <MissionVision/>
      <Testimonials/>
      <MapSection/>
    </div>
  );
}
