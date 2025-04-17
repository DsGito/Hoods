import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
import Accessibility from './pages/Accessibility'
import Onboarding from './pages/Onboarding';
import Products from './pages/Products';

import RestaurantHoods from './subpages/RestaurantHoods';
import CafeHoods from './subpages/CafeHoods';
import GrillHoods from './subpages/GrillHoods';
import HomeHoods from './subpages/HomeHoods';
import SmokeFilters from './subpages/SmokeFilters';
import ProfessionalKitchens from './subpages/ProfessionalKitchens';
import StainlessWorks from './subpages/StainlessWorks';

import SrvPlanning from './subpages/SrvPlanning';
import SrvInstallation from './subpages/SrvInstallation';
import SrvMaintenance from './subpages/SrvMaintenance';
import SrvSafety from './subpages/SrvSafety';
import SrvDesign from './subpages/SrvDesign';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background font-sans rtl">
        <Layout>
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/RestaurantHoods" element={<RestaurantHoods />} />
              <Route path="/CafeHoods" element={<CafeHoods />} />
              <Route path="/GrillHoods" element={<GrillHoods />} />
              <Route path="/HomeHoods" element={<HomeHoods />} />
              <Route path="/SmokeFilters" element={<SmokeFilters />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/SrvPlanning" element={<SrvPlanning />} />
              <Route path="/SrvInstallation" element={<SrvInstallation />} />
              <Route path="/SrvMaintenance" element={<SrvMaintenance />} />
              <Route path="/SrvSafety" element={<SrvSafety />} />
              <Route path="/SrvDesign" element={<SrvDesign />} />
              <Route path="/ProfessionalKitchens" element={<ProfessionalKitchens />} />
              <Route path="/StainlessWorks" element={<StainlessWorks />} />
            </Routes>
          </main>
        </Layout >
      </div>
    </Router>
  )
}

export default App
