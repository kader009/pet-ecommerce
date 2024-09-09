import FeaturedPets from "../pages/FeaturePets";
import HeroSection from "../pages/HeroSection";
import StoreInfo from "../pages/StoreInfo";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <StoreInfo/>
      <FeaturedPets/>
    </div>
  );
};

export default Home;