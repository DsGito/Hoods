import HeroSection from '../components/sections/HeroSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import SummarySection from '../components/sections/SummarySection';
import ProductsSection from '../components/sections/ProductsSection';
import CtaMoreSection from '../components/sections/CtaMoreSection';

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

      {/* קריאה לפעולה */}
      <CtaMoreSection />

    </div>
  )
}

export default Home
