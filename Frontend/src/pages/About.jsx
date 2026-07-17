import AboutMessage from "../components/About/AboutMessage";
import AboutTimeline from "../components/About/AboutTimeline";
import AboutValues from "../components/About/AboutValues";
import AboutWhyChoose from "../components/About/AboutWhyChoose";
import AboutHeroSection from "../components/About/HeroAbout";
import CTASection from "../components/Home/CTAhome";

function About (){
    return (
        <div>
            <AboutHeroSection/>
            <AboutValues/>
            <AboutMessage/>
            <AboutTimeline/>
            <AboutWhyChoose/>
            <CTASection/>
        </div>
    );
}
export default About;