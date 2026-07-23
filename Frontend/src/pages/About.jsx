import AboutMessage from "../components/About/AboutMessage";
import AboutTimeline from "../components/About/AboutTimeline";
import AboutWhyChoose from "../components/About/AboutWhyChoose";
import AboutHeroSection from "../components/About/HeroAbout";
import CTASection from "../components/Home/CTAhome";
import ServicesVisionMission from "../components/Services/ServicesVisionMission";

function About (){
    return (
        <div>
            <AboutHeroSection/>
            <AboutMessage/>
            <AboutTimeline/>
            <ServicesVisionMission/>
            <AboutWhyChoose/>
            <CTASection/>
        </div>
    );
}
export default About;