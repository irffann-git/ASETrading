import ContactFormAndMap from "../components/Contact/Contactform";
import ContactHero from "../components/Contact/ContactHero";
import ContactInfoBar from "../components/Contact/Contactinfo";
import CTASection from "../components/Home/CTAhome";

function Contact() {
  return (
    <div>
     <ContactHero/>
     <ContactInfoBar/>
     <ContactFormAndMap/>
     <CTASection/>
    </div>
  );
}
export default Contact;