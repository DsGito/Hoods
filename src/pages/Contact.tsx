import { Clock, MessageSquare, PhoneCall, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const themeColor = '#d6b16c'; // צבע זהב
  const contactInfo = [
    {
      icon: MessageSquare,
      title: 'תיאום פגישת ייעוץ',
      details: [
        { text: '054-9659008', link: 'tel:+972549659008', icon: PhoneCall },
        { text: 'Tm.mindaf@gmail.com', link: 'mailto:Tm.mindaf@gmail.com', icon: Mail }
      ],
      description: 'הדגמות במקום',
      color: 'bg-blue-50 border-blue-200',
      hoverColor: 'hover:border-blue-300 hover:bg-blue-100'
    },

    /* 
    {
      icon: MapPin,
      title: 'משרד ראשי',
      details: [
        { text: 'רחוב התעשייה 000', link: null, icon: MapPin },
        {
          text: 'אזור התעשייה, תל אביב',
          link: 'https://waze.com/ul?q=רחוב+התעשייה+000+אזור+התעשייה+תל+אביב',
          icon: ExternalLink
        }
      ],
      description: 'אולם תצוגה פתוח לקהל',
      color: 'bg-green-50 border-green-200',
      hoverColor: 'hover:border-green-300 hover:bg-green-100'
    },
    */
    {
      icon: Clock,
      title: 'שעות פעילות',
      details: [{ text: 'ראשון - חמישי: 08:00 - 18:00', link: null, icon: Clock }],
      description: 'סגור בשבת',
      color: 'bg-amber-50 border-amber-200',
      hoverColor: 'hover:border-amber-300 hover:bg-amber-100'
    }
  ];

  // State for animations and interactive elements
  // עבור אנימציות ואפקטים אינטראקטיביים
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animation for section visibility
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }  };

  return (
    <div className="rtl min-h-screen bg-gradient-to-b from-white to-gray-50 w-full overflow-x-hidden">
      {/* Hero Section  bg-gray-900   */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-bold mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              רוצים אוויר נקי במטבח? <span style={{ color: themeColor }}>צרו קשר!</span>
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-12 text-blue-100">
              נשמח לשמוע מכם, לייעץ ולהתאים את הפתרון המושלם עבורכם
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center relative z-20 inline-block">
              <Link
                to="tel:+972549659008"
                className="px-8 py-3 bg-gradient-to-r from-[#d6b16c] to-[#e7c682] text-primary rounded-full font-medium hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center"
                >
                <PhoneCall className="h-5 w-5 ml-2" />
                התקשרו עכשיו
              </Link>

              {/*
              <Link
                to={`https://wa.me/972549659008?text=היי, אני מעוניין לקבל פרטים נוספים על הפתרונות המקצועיים שלכם`}
                className="px-8 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#1DA851] transition-all shadow-lg flex items-center hover:scale-105"
              >
                <svg
                  className="h-5 w-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                שלחו הודעה בוואטסאפ
              </Link>
              */}
            </div>
          </motion.div>
        </div>

        {/* Decorative wave for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 220"
            className="w-full"
            style={{ display: 'block', marginBottom: '-5px' }}
          >
            <path
              fill="#f9fafb"
              stroke="none"
              strokeWidth="0"
              d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,117.3C840,96,960,96,1080,112C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>

      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div initial="hidden" animate={isVisible ? 'visible' : 'hidden'} variants={containerVariants}>
          {/* Contact Information */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 inline-block">פרטי התקשרות</h2>
              <div className="h-1 w-20 bg-[#d6b16c] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${info.color} ${info.hoverColor}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full bg-white shadow-sm mr-4 ${hoveredCard === index ? 'bg-opacity-100' : 'bg-opacity-80'}`}>
                      <info.icon className={`h-6 w-6 ${hoveredCard === index ? 'text-[#d6b16c]' : 'text-gray-700'}`} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">{info.title}</h3>
                  </div>

                  <div className="space-y-3 text-sm sm:text-base">
                    {info.details.map((detail, i) => (
                      <div key={i} className="flex items-center">
                        {detail.icon && <detail.icon className="h-4 w-4 text-gray-500 ml-2" />}
                        {detail.link ? (
                          <Link to={detail.link} className="text-gray-700 hover:text-[#d6b16c] hover:underline transition-colors">
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
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Contact
