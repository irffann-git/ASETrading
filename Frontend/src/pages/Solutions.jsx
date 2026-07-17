import CTASection from "../components/Home/CTAhome";
import SolutionsGrid from "../components/Solutions/SolutionsGrid";
import SolutionsHero from "../components/Solutions/SolutionsHero";
import WhyChooseAse from "../components/Solutions/WhyChooseAse";



function Solutions(){
    return (
        <div>
            <SolutionsHero/>
            <SolutionsGrid/>
            <WhyChooseAse/>
            <CTASection/>
            
        </div>
    );
}
export default Solutions;