import { MapPin, Clock, MessageSquare, PhoneCall, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactInfo = [
    {
      icon: MessageSquare,
      title: 'תיאום פגישת ייעוץ',
      details: [
        { text: '054-9659008', link: 'tel:+972549659008', icon: PhoneCall },
        { text: 'Tm.mindaf@gmail.com', link: 'mailto:Tm.mindaf@gmail.com', icon: Mail }
      ],
      description: 'הדגמות במקום',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: MapPin,
      title: 'משרד ראשי',
      details: [
        { text: 'רחוב התעשייה 000', link: null , icon: MapPin},
        {
          text: 'אזור התעשייה, תל אביב',
          link: 'https://waze.com/ul?q=רחוב+התעשייה+000+אזור+התעשייה+תל+אביב',
          icon: ExternalLink
        }
      ],
      description: 'אולם תצוגה פתוח לקהל',
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: Clock,
      title: 'שעות פעילות',
      details: [{ text: 'ראשון - חמישי: 08:00 - 18:00', link: null, icon: Clock }],
      color: 'bg-amber-50 border-amber-200'
    }
  ];

  // State for hover effects
  // עבור אנימציות ואפקטים אינטראקטיביים
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="rtl">

      {/* Hero Section  bg-gray-900   */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/path-to-abstract-pattern.svg')] bg-repeat opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bold mb-6"
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              רוצים אוויר נקי במטבח? <span className="text-blue-300">צרו קשר!</span>
            </h1>

            <p className="text-xl max-w-2xl mx-auto mb-12 text-blue-100">
              נשמח לשמוע מכם, לייעץ ולהתאים את הפתרון המושלם עבורכם
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="tel:+972549659008"
                className="px-8 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                <PhoneCall className="h-5 w-5 ml-2" />
                התקשרו עכשיו
              </Link>
              <Link
                to="mailto:Tm.mindaf@gmail.com"
                className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-medium hover:bg-white/10 transition-all"
              >
                שלחו מייל
              </Link>
            </div>
          </motion.h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1  gap-8">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Contact Information */}

            <div className="mb-16">

              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                <span className="inline-block border-b-4 border-blue-500 pb-2">פרטי התקשרות</span>
              </h2>


              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${info.color} ${hoveredCard === index ? 'transform -translate-y-2 shadow-md' : ''
                      }`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-white shadow-sm mr-4">
                        <info.icon className="h-6 w-6 text-gray-700" />
                      </div>
                      <h3 className="text-xl font-bold">{info.title}</h3>
                    </div>

                    <div className="space-y-3">
                      {info.details.map((detail, i) => (
                        <div key={i} className="flex items-center">
                          {detail.icon && <detail.icon className="h-4 w-4 text-gray-500 ml-2" />}
                          {detail.link ? (
                            <Link
                              to={detail.link}
                              className="text-gray-700 hover:text-[#d6b16c] hover:underline transition-colors"
                            >
                              {detail.text}
                            </Link>
                          ) : (
                            <span className="text-gray-700">{detail.text}</span>
                          )}
                        </div>
                      ))}
                    </div>

                    {info.description && (
                      <p className="mt-4 text-sm text-gray-500 border-t border-gray-200 pt-3">
                        {info.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>


        {/* Google Map Section */}
        {/*
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <h2 className="text-2xl font-bold p-6 bg-gray-100">המיקום שלנו</h2>
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54051.85107632526!2d34.77302442345724!3d32.0879544016021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca1dd351df3%3A0x6a52a1d4d041358c!2z16rXnCDXkNeo15nXkS3Xmdek15U!5e0!3m2!1siw!2sil!4v1656924726462!5m2!1siw!2sil"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        */}


      </div>
    </div>
  )
}

export default Contact
