import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, Fan, HomeIcon, Info, Package2 } from 'lucide-react'
import { Button } from '../ui/button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'דף הבית', path: '/Home', icon: <HomeIcon className="w-5 h-5" /> },
    { name: 'מוצרים', path: '/Products', icon: <Package2 className="w-5 h-5" /> },
    { name: 'אודות', path: '/About', icon: <Info className="w-5 h-5" /> },
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/Home" className="flex-shrink-0 flex items-center space-x-2">

              <img
                src="/icon/aa.png" 
                alt="T.M mindafim"
                className="h-12"
              />

            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4 ml-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center">
              <Link to="/contact" className="flex-shrink-0 flex items-center space-x-2">
                <Button className="flex items-center">
                  <Phone className="ml-2 h-4 w-4" />
                  צרו קשר
                </Button>
              </Link>
            </div>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="flex-shrink-0 flex items-center space-x-2">
              <Button className="w-full mt-4">
                <Phone className="ml-2 h-4 w-4" />
                צרו קשר
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
