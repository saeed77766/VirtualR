import FeatureSection from "./Components/FeatureSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import WorkFlow from "./Components/WorkFlow";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonials />
      </div>
    </>
  );
};

export default App;
