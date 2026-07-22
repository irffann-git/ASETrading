import ClientsHero from "../components/Clients/clientsHero";
import IndustriesWeServe from "../components/Clients/Industriesweserve";
import TrustedOrganizations from "../components/Clients/Trustedorganizations";
import CTASection from "../components/Home/CTAhome";
import HomeProjects from "../components/Home/homeProjects";


function Clients() {
  return (
    <div>
        <ClientsHero/>
        <TrustedOrganizations/>
        <IndustriesWeServe/>
        <HomeProjects/>
        <CTASection/>
    </div>
  );
}
export default Clients;