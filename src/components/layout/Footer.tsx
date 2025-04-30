import { Phone, Mail, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const quickLinks = [
    { name: 'דף הבית', href: '/Home' },
    { name: 'אודות', href: '/About' },
    { name: 'צור קשר', href: '/Contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">עקבו אחרינו</h3>
            <p className="text-gray-400 mb-4">
              טי אמ מנדפים פתרונות מתקדמים, משלבים טכנולוגיה חדשנית עם עיצוב איכותי
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.facebook.com/p/%D7%98%D7%99-%D7%90%D7%9E-%D7%9E%D7%A0%D7%93%D7%A4%D7%99%D7%9D-TM-mindafim-100075547016088" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22,12.07C22,6.53,17.47,2,12,2S2,6.53,2,12.07C2,17.1,5.66,21.31,10.44,22V15.13H7.9V12.07h2.54V9.79c0-2.5,1.49-3.89,3.78-3.89,1.09,0,2.23.2,2.23.2v2.46H15.2c-1.24,0-1.63.77-1.63,1.56v1.88h2.78l-.45,3.06h-2.33V22C18.34,21.31,22,17.1,22,12.07z" />
                </svg>
              </a>

              <a href="https://wa.me/972549659008?text=היי, אני מעוניין לקבל פרטים נוספים על הפתרונות המקצועיים שלכם" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
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
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">יצירת קשר</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 ml-2" />
                <a className="text-gray-400 hover:text-white" href="tel:+972549659008">054-9659008</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 ml-2" />
                <a className="text-gray-400 hover:text-white" href="mailto:Tm.mindaf@gmail.com">Tm.mindaf@gmail.com</a>
              </div>
              {/* 
              <div className="flex items-center">
                <MapPin className="h-5 w-5 ml-2" />
                <a
                  href="https://waze.com/ul?ll=32.0853,34.7818&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  תל אביב, ישראל
                </a>
              </div>
              */}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="text-sm">
            © {new Date().getFullYear()} כל הזכויות שמורות | טי אמ מנדפים - T.M mindafim
          </p>
          <div className="mt-4">
            <Link to="/Accessibility" className="hover:text-white transition-colors">
              הצהרת נגישות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
