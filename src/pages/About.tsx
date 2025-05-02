import { Shield, Settings, Wrench, ThumbsUp, Building, Users, Award, Palette, PhoneCall } from 'lucide-react'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CtaMoreSection from '../components/sections/CtaMoreSection';

const About = () => {

  // צבע הנושא המרכזי של האתר - שימוש עקבי בצבע זה לאורך כל הדף
  const themeColor = '#d6b16c'; // צבע זהב
  //const themeColorDark = '#b8964a'; // גרסה כהה יותר של צבע הזהב
  //const themeColorLight = '#f0dba8'; // גרסה בהירה יותר של צבע הזהב

  const companyFeatures = [
    { icon: Settings, title: 'מומחיות מקיפה', description: 'התמחות במגוון פתרונות למטבחי פנים וחוץ, מנדפים ומערכות מידוף' },
    { icon: Users, title: 'צוות מקצועי', description: 'מהנדסים, מעצבים וטכנאים מומחים המספקים פתרונות מותאמים אישית' },
    { icon: Award, title: 'חדשנות ואיכות', description: 'שימוש בטכנולוגיות מתקדמות וחומרים איכותיים העומדים בתקנים המחמירים' },
    { icon: Wrench, title: 'עיצוב מותאם', description: 'פתרונות מעוצבים בהתאמה אישית במיוחד עבורכם המשלבים פונקציונליות ואסתטיקה' },
    { icon: Building, title: 'מקצועיות', description: 'צוות המומחים שלנו מתעדכן באופן שוטף בכל החידושים והשינויים בתחום' },
    { icon: ThumbsUp, title: 'אמינות', description: 'אנו מחויבים לשקיפות מלאה ולסטנדרטים האתיים הגבוהים ביותר' },
    { icon: Palette, title: 'שירות אישי', description: 'כל לקוח מקבל יחס אישי ומותאם לצרכיו הספציפיים' },
    { icon: Shield, title: "איכות ללא פשרות", description: "חומרי גלם איכותיים העומדים בתקנים המחמירים ביותר" }
  ];

  // עבור אנימציות ואפקטים אינטראקטיביים
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  // הנפשות לסקשנים השונים
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  return (
    <div className="rtl">

      {/* Hero Section  bg-gray-900  */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* רקע דקורטיבי */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-bold mb-6">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              חברת <span style={{ color: themeColor }}>טי אמ מנדפים</span>
            </h1>

            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-12 text-blue-100">
              אנחנו משלבים ידע מקצועי, ניסיון שטח וטכנולוגיה מתקדמת
              כדי לייצר מנדפים וקולטי אדים שעושים את העבודה בצורה מושלמת.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center relative z-20 inline-block">
              <Link
                to="tel:+972549659008"
                className="px-8 py-3 bg-gradient-to-r from-[#d6b16c] to-[#e7c682] text-primary rounded-full font-medium hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center"
                >
                <PhoneCall className="h-5 w-5 ml-2" />
                התקשרו עכשיו
              </Link>


            </div>
          </motion.div>
        </div>


        {/* 
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              חברת <span style={{ color: themeColor }}>טי אמ מנדפים</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              אנחנו משלבים ידע מקצועי, ניסיון שטח וטכנולוגיה מתקדמת
              כדי לייצר מנדפים וקולטי אדים שעושים את העבודה בצורה מושלמת.
            </p>

            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-20 inline-block"
            >
              <Link
                to="tel:+972549659008"
                className="px-8 py-3 bg-gradient-to-r from-[#d6b16c] to-[#e7c682] text-primary rounded-full font-medium hover:bg-white transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                <PhoneCall className="h-5 w-5 ml-2" />
                התקשרו עכשיו
              </Link>
            </motion.div >
          </motion.div>
        </div>
          */}

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


      {/* חזון החברה */}
      <section className="py-10 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row">
              {/* תמונה מימין */}
              <div className="md:w-1/3 bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center p-8 sm:p-12">
                <div className="text-center">
                  <div className="bg-white inline-flex rounded-full bg-blue-100 p-4 mb-6 backdrop-blur-sm p-4 mb-6">
                    <Award className="h-12 w-12" style={{ color: themeColor }} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">מצוינות</h3>
                  <p className="text-blue-100">המומחיות, הניסיון והמחויבות לאיכות הם אבני היסוד של החברה שלנו</p>
                </div>
              </div>

              {/* תוכן משמאל */}
              <div className="md:w-2/3 p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-r-4 pr-4" style={{ borderColor: themeColor }}>
                  החזון שלנו
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  "אנו שואפים להוביל את תעשיית המנדפים בישראל תוך הקפדה על איכות בלתי מתפשרת,
                  חדשנות טכנולוגית, ושירות לקוחות מעולה. חזוננו הוא לספק מנדפים שלא רק עומדים בתקנים הנדרשים,
                  אלא גם תורמים לסביבת עבודה בטוחה יותר, נקייה יותר ויעילה יותר"
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* מאפייני החברה - מבנה כרטיסים אחיד */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="inline-block border-b-4 pb-2" style={{ borderColor: themeColor }}>הערכים שלנו</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              אנו מחויבים למצוינות ולשירות ברמה הגבוהה ביותר
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {companyFeatures.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} onMouseEnter={() => setHoveredFeature(index)} onMouseLeave={() => setHoveredFeature(null)} className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${hoveredFeature === index ? 'transform -translate-y-2 shadow-xl' : ''}`}>
                <div className="h-2" style={{ backgroundColor: themeColor }}></div>
                <div className="p-8">
                  <div className="inline-flex rounded-full p-3 mb-6 bg-white">
                    <feature.icon className="h-8 w-8" style={{ color: themeColor }} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* סקשן ביניים - ציטוט */}
      <section className="py-16" style={{ backgroundColor: `${themeColor}1A` }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="inline-flex rounded-full bg-white/80 p-2 mb-6">
              <ThumbsUp className="h-8 w-8" style={{ color: themeColor }} />
            </div>
            <blockquote className="text-2xl font-medium text-gray-800 mb-6">
              "אנו מאמינים שטכנולוגיה משתלבת באומנות, וכל מוצר הוא עדות למחויבות שלנו לאיכות"
            </blockquote>
            <p className="text-lg text-gray-600">- צוות טי אמ מנדפים</p>
          </motion.div>
        </div>
      </section>



      {/* קריאה לפעולה */}
      <CtaMoreSection />


    </div>
  )
}

export default About 