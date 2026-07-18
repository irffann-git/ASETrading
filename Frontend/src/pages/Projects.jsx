
import CTASection from "../components/Home/CTAhome";
import FeaturedProjects from "../components/Projects/FeaturedProjects";
import IndustriesWeServe from "../components/Projects/IndustriesWeServe";
import MoreProjects from "../components/Projects/MoreProjects";
import ProjectsHero from "../components/Projects/ProjectsHero";



function Projects() {
  return (
    <div>

      <ProjectsHero/>
      <FeaturedProjects/>
      <MoreProjects/>
      <IndustriesWeServe/>
      <CTASection/>
       
    </div>
  );
}
export default Projects;