import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, HomeIcon, Info } from 'lucide-react'
import { Button } from '../ui/button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'דף הבית', path: '/Home', icon: <HomeIcon className="w-5 h-5" /> },
    { name: 'אודות', path: '/About', icon: <Info className="w-5 h-5" /> },
    { name: 'צרו קשר', path: '/Contact', icon: <Phone className="w-5 h-5" /> },
    /*   { name: 'מוצרים', path: '/Products', icon: <Package2 className="w-5 h-5" /> }, */
  ]

  return (
    <nav className="bg-[rgba(18,15,30,0.9)] backdrop-blur-md text-white fixed w-full z-50 top-0">
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
            {navItems.map((item) => (
              item.name === 'צרו קשר' ? (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex-shrink-0 flex items-center space-x-2"
                >
                  <Button className="flex items-center text-white bg-transparent hover:bg-[#d6b16c] hover:text-white border border-white hover:border-yellow-500 px-3 py-2 rounded-md text-sm font-medium">
                    {item.icon}
                    <span className="ml-2"></span>{item.name}
                  </Button>
                </Link>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-white hover:text-[#d6b16c] px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  {item.icon}
                  <span className="ml-2"></span>{item.name}
                </Link>
              )
            ))}

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6 text-[#d6b16c]" /> : <Menu className="h-6 w-6 text-[#d6b16c]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) =>
              item.name === 'צרו קשר' ? (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block w-full"
                >
                  <Button className="w-full flex items-center justify-center text-white hover:bg-[#c59e50] px-4 py-2 rounded-md text-base font-medium">
                    {item.icon}
                    <span className="ml-2"></span> {item.name}
                  </Button>
                </Link>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-gray-900 block px-4 py-2 rounded-md text-base font-medium"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))
            }
          </div>
        </div>
      )
      }
    </nav >
  )
}

export default Navbar
