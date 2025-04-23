import HeroSection from '../components/sections/HeroSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import SummarySection from '../components/sections/SummarySection';
import ProductsSection from '../components/sections/ProductsSection';

const Home = () => {

  return (
    <div className="rtl">

      {/* Hero Section */}
      <HeroSection />

      {/* About Summary Section */}
      <SummarySection />

      {/* Products Section */}
      <ProductsSection />

      {/* Benefits Section */}
      <BenefitsSection />

    </div>
  )
}

export default Home
