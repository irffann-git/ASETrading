import ASEHero from "./components/Hero";
import HomeAbout from "./components/homeAbout";
import HomePartners from "./components/homePartners";
import HomeProjects from "./components/homeProjects";
import HomeServices from "./components/homeServices";
import HomeSolutions from "./components/homeSolution";
import Navbar from "./components/Navbar";
import HomeNetworkLogos from "./components/networkBanner";




function App() {
  return (

    
    <div>
    
        <Navbar/>
        <ASEHero/>
        <HomeAbout/>
        <HomeSolutions/>
        <HomeServices/>
        <HomeNetworkLogos/>
        <HomePartners/>
        <HomeProjects/>


      
        
        
        
      
    </div>
  );
}

export default App;