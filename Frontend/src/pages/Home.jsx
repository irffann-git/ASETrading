import Hero from "../components/Home/Hero";
import HomeAbout from "../components/Home/homeAbout";
import HomeSolutions from "../components/Home/homeSolution";
import HomeServices from "../components/Home/homeServices";
import HomeNetworkLogos from "../components/Home/networkBanner";
import HomePartners from "../components/Home/homePartners";
import HomeProjects from "../components/Home/homeProjects";
import CTASection from "../components/Home/CTAhome";    

function Home() {
  return (
    <div>
        <Hero/>
        <HomeAbout/>
        <HomeSolutions/>
        <HomeServices/>
        <HomeNetworkLogos/>
        <HomePartners/>
        <HomeProjects/>
        <CTASection/>
    </div>
  );
}
export default Home;