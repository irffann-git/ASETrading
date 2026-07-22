import CTASection from "../components/Home/CTAhome";
import PartnerCategories from "../components/Partners/Partnercategories";
import PartnersHero from "../components/Partners/partnersHero";
import PartnershipProcess from "../components/Partners/Partnershipprocess";
import PartnerSlider from "../components/Partners/PartnerSlider";
import TrustedEcosystem from "../components/Partners/TrustedEcosystem";
import WhyPartnerWithASE from "../components/Partners/Whypartnerwithase";


function Partners() {
  return (
    <div>
        <PartnersHero/>
        <TrustedEcosystem/>
        <PartnerCategories/>
        <PartnerSlider/>
        <WhyPartnerWithASE/>
        <PartnershipProcess/>
        <CTASection/>
       
    </div>
  );
}
export default Partners;