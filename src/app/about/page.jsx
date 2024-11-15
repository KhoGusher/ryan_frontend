import AboutUs from "../../../components/About";
import MapSection from "../../../components/Contact/Map";
import CoreValues from "../../../components/Corevalues";
import MissionVision from "../../../components/MissionVision";
import TeamSection from "../../../components/TeamSection";
import Testimonials from "../../../components/Testimonials";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Breadcrumbs */}
          <section
      id="breadcrumbs"
      className="breadcrumbs"
      style={{ backgroundColor: "steelblue" }}
    >
      <div className="container pt-5">
        <div className="d-flex justify-content-between list-unstyled w-100">
          <h2>About</h2>
          <ol>
            <li>
              <Link href="/" className="text-white text-decoration-none">
                Home
              </Link>
            </li>
            <li className="text-white">About</li>
          </ol>
        </div>
      </div>
    </section>
    {/* End of breadcrumbs */}
      <AboutUs/>
      <TeamSection/>
      <MissionVision/>
      <Testimonials/>
      <MapSection/>
    </div>
  );
}
