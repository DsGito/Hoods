import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
 
 /* const services = [
    { name: 'התקנת מנדפים', href: '/services' },
    { name: 'תחזוקת מנדפים', href: '/services' },
    { name: 'ייעוץ מקצועי', href: '/services' },
    { name: 'שירות תיקונים', href: '/services' },
  ];*/

  const quickLinks = [
    { name: 'דף הבית', href: '/' },
    { name: 'אודות', href: '/about' },
    { name: 'מוצרים', href: '/Products' },
    { name: 'צור קשר', href: '/contact' },
    /* { name: 'בלוג', href: '/blog' }, 
    { name: 'המלצות', href: '/testimonials' }, */
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">עקבו אחרינו</h3>
            <p className="text-gray-400 mb-4">
              מגוון פתרונות מתקדמים למטבחי פנים וחוץ, המשלבים טכנולוגיה חדשנית עם עיצוב מוקפד
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
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

          {/* Services */}

          {/* 
          <div>
            <h3 className="text-xl font-bold mb-4">השירותים שלנו</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-gray-400 hover:text-white">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
           */}

           
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
                <span className="text-gray-400">000-000-0000</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 ml-2" />
                <span className="text-gray-400">info@kitchen-hoods.co.il</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 ml-2" />
                <span className="text-gray-400">תל אביב, ישראל</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            © {new Date().getFullYear()} כל הזכויות שמורות | מנדפי מטבח
          </p>
          <div className="mt-8 text-center text-gray-400">
            <Link to="/accessibility" className="hover:text-white transition-colors">
              הצהרת נגישות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
