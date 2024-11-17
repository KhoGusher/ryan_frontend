import ContactForm from "../../../components/Contact/ContactForm";
import MapSection from "../../../components/Contact/Map";
import Gallery from "../../../components/Gallery";
import Testimonials from "../../../components/Testimonials";
import VideoSection from "../../../components/Video";

export default function subsidiariesLayout({
children,    
}){
    return(
        <>
        {children}
        <div className="pl-20 pr-20">
        <VideoSection/>
        <MapSection/>
        <Testimonials/>
        <Gallery/>
        <div className="text-center">
        <h2>
            <span style={{ color: 'steelblue' }}>Contact</span> Us
          </h2>
        <ContactForm/>
        </div>
        </div>
        </>
    );
}