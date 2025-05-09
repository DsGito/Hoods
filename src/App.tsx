import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home'
import Products from './pages/Products';
import About from './pages/About'
import Contact from './pages/Contact'
import Accessibility from './pages/Accessibility'

import RestaurantHoods from './subpages/RestaurantHoods';
import CafeHoods from './subpages/CafeHoods';
import GrillHoods from './subpages/GrillHoods';
import HomeHoods from './subpages/HomeHoods';
import StainlessWorks from './subpages/StainlessWorks';
import SmokeFilters from './subpages/SmokeFilters';
import OutdoorKitchens from './subpages/OutdoorKitchens';
import GrillsCookingSystems from './subpages/GrillsCookingSystems';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background font-sans rtl">
        <Layout>
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Accessibility" element={<Accessibility />} />

              <Route path="/RestaurantHoods" element={<RestaurantHoods />} />
              <Route path="/CafeHoods" element={<CafeHoods />} />
              <Route path="/GrillHoods" element={<GrillHoods />} />
              <Route path="/HomeHoods" element={<HomeHoods />} />
              <Route path="/StainlessWorks" element={<StainlessWorks />} />
              <Route path="/SmokeFilters" element={<SmokeFilters />} />
              <Route path="/OutdoorKitchens" element={<OutdoorKitchens />} />
              <Route path="/GrillsCookingSystems" element={<GrillsCookingSystems />} />


            </Routes>
          </main>
        </Layout >
      </div>
    </Router>
  )
}

export default App
