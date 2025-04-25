import { Shield, Settings, Wrench, ThumbsUp, Building, Users, Award, Palette } from 'lucide-react'
import { MapPin, Clock, MessageSquare, PhoneCall, Mail, ExternalLink } from 'lucide-react';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import CtaMoreSection from '../components/sections/CtaMoreSection';

const About = () => {
  const companyFeatures = [
    {
      icon: Settings,
      title: 'מומחיות מקיפה',
      description: 'התמחות במגוון פתרונות למטבחי פנים וחוץ, מנדפים ומערכות מידוף',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'צוות מקצועי',
      description: 'מהנדסים, מעצבים וטכנאים מומחים המספקים פתרונות מותאמים אישית',
      color: 'bg-indigo-500'
    },
    {
      icon: Award,
      title: 'חדשנות ואיכות',
      description: 'שימוש בטכנולוגיות מתקדמות וחומרים איכותיים העומדים בתקנים המחמירים',
      color: 'bg-purple-500'
    },
    {
      icon: Wrench,
      title: 'עיצוב מותאם',
      description: 'פתרונות מעוצבים בהתאמה אישית במיוחד עבורכם המשלבים פונקציונליות ואסתטיקה',
      color: 'bg-teal-500'
    },
    {
      icon: Building,
      title: 'מקצועיות',
      description: 'צוות המומחים שלנו מתעדכן באופן שוטף בכל החידושים והשינויים בתחום',
      color: 'bg-green-500'
    },
    {
      icon: ThumbsUp,
      title: 'אמינות',
      description: 'אנו מחויבים לשקיפות מלאה ולסטנדרטים האתיים הגבוהים ביותר',
      color: 'bg-amber-500'
    },
    {
      icon: Palette,
      title: 'שירות אישי',
      description: 'כל לקוח מקבל יחס אישי ומותאם לצרכיו הספציפיים',
      color: 'bg-red-500'
    },
    {
      icon: Shield,
      title: "איכות ללא פשרות",
      description: "חומרי גלם איכותיים העומדים בתקנים המחמירים ביותר",
      color: 'bg-blue-600'
    }
  ];

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
        { text: 'רחוב התעשייה 000', link: null, icon: MapPin },
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

  // עבור אנימציות ואפקטים אינטראקטיביים
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="rtl">

      {/* Hero Section  bg-gray-900   */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-10 overflow-hidden">
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold mb-6"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              אודות <span className="text-blue-300">טי אמ מנדפים</span>
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6 leading-relaxed">
              אנחנו משלבים ידע מקצועי, ניסיון שטח וטכנולוגיה מתקדמת
              כדי לייצר מנדפים וקולטי אדים שעושים את העבודה בצורה מושלמת.
            </p>
          </motion.h1>
        </div>
      </section>


      {/* חזון החברה */}
      <section className="py-10 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* תמונה מימין */}
                <div className="md:w-1/2 bg-gradient-to-br from-[#0f1c34] to-[#d6b16c] flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="inline-flex rounded-full bg-blue-100 p-4 mb-6">
                      <Award className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">מצוינות</h3>
                    <p className="text-blue-100">מובילים בתחום פתרונות האוורור למטבחים</p>
                  </div>
                </div>

                {/* תוכן משמאל */}
                <div className="md:w-1/2 p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-[#d6b16c] pr-4">
                    החזון שלנו
                  </h2>
                  <div className="prose">
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      "אנו שואפים להוביל את תעשיית המנדפים בישראל תוך הקפדה על איכות בלתי מתפשרת,
                      חדשנות טכנולוגית, ושירות לקוחות מעולה. חזוננו הוא לספק מנדפים שלא רק עומדים בתקנים הנדרשים,
                      אלא גם תורמים לסביבת עבודה בטוחה יותר, נקייה יותר ויעילה יותר."
                    </p>
                    <p className="text-lg text-gray-600">
                      המומחיות, הניסיון והמחויבות לאיכות הם אבני היסוד של החברה שלנו.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>


      {/* מאפייני החברה */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="inline-block border-b-4 border-blue-500 pb-2">הערכים שלנו</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              אנו מחויבים למצוינות ולשירות ברמה הגבוהה ביותר
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyFeatures.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${hoveredFeature === index ? 'transform -translate-y-2 shadow-xl' : ''
                  }`}
              >
                {/* רצועת צבע בראש הכרטיס */}
                <div className={`h-2 ${feature.color}`}></div>

                <div className="p-8">
                  <div className={`inline-flex rounded-full p-3 mb-6 ${feature.color.replace('bg-', 'bg-') + '/10'
                    }`}>
                    <feature.icon className={`h-8 w-8 ${feature.color.replace('bg-', 'text-')}`} />
                  </div>

                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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


      {/* קריאה לפעולה */}
      <CtaMoreSection />

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
                    className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${info.color} ${hoveredFeature === index ? 'transform -translate-y-2 shadow-md' : ''
                      }`}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
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

export default About 