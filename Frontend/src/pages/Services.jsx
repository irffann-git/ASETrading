import CTASection from "../components/Home/CTAhome";
import ServicesCapabilities from "../components/Services/ServicesCapabilities";
import ServicesDeliveryProcess from "../components/Services/ServicesDeliveryProcess";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesImpact from "../components/Services/ServicesImpact";
import ServicesIndustries from "../components/Services/ServicesIndustries";
import ServicesVisionMission from "../components/Services/ServicesVisionMission";


function Services() {
  return (
    <div>
        <ServicesHero/>
        <ServicesVisionMission/>
        <ServicesCapabilities/>
        <ServicesDeliveryProcess/>
        <ServicesIndustries/>
        <ServicesImpact/>
        <CTASection/>
       
    </div>
  );
}
export default Services;