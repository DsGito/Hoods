import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const quickLinks = [
    { name: 'דף הבית', href: '/Home' },
    { name: 'אודות', href: '/About' },
    { name: 'צור קשר', href: '/Contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">עקבו אחרינו</h3>
            <p className="text-gray-400 mb-4">
              טי אמ מנדפים פתרונות מתקדמים, משלבים טכנולוגיה חדשנית עם עיצוב איכותי
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/%D7%98%D7%99-%D7%90%D7%9E-%D7%9E%D7%A0%D7%93%D7%A4%D7%99%D7%9D-TM-mindafim-100075547016088" className="hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">יצירת קשר</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 ml-2" />
                <a className="text-gray-400" href="tel:+972549659008">054-9659008</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 ml-2" />
                <a className="text-gray-400" href="mailto:Tm.mindaf@gmail.com">Tm.mindaf@gmail.com</a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 ml-2" />
                <a
                  href="https://waze.com/ul?ll=32.0853,34.7818&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400"
                >
                  תל אביב, ישראל
                </a>

              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            © {new Date().getFullYear()} כל הזכויות שמורות | טי אמ מנדפים - T.M mindafim
          </p>
          <div className="mt-8 text-center text-gray-400">
            <Link to="/Accessibility" className="hover:text-white transition-colors">
              הצהרת נגישות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
