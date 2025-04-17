import ServicesSection from '../components/sections/ServicesSection';
import CTASection from '../components/sections/CTASection';
import HeroSection from '../components/sections/HeroSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import SummarySection from '../components/sections/SummarySection';
import ProductsSection from '../components/sections/ProductsSection';
import GallerySection from '../components/sections/GallerySection';
import ImonialsSection from '../components/sections/ImonialsSection';

const Home = () => {

  return (
    <div className="rtl">

      {/* Hero Section */}
      <HeroSection />

      {/* About Summary Section */}
      <SummarySection />

      {/* Products Section */}
      <ProductsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Gallery */}
      <GallerySection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* CTA Section */}
      { /*<ImonialsSection /> */}

      {/* CTA Section */}
      {/* <CTASection /> */}

    </div>
  )
}

export default Home
