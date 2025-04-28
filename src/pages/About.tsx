import { Shield, Settings, Wrench, ThumbsUp, Building, Users, Award, Palette } from 'lucide-react'
import { motion } from 'framer-motion';
import { useState } from 'react';

import CtaMoreSection from '../components/sections/CtaMoreSection';

const About = () => {

  // צבע הנושא המרכזי של האתר - שימוש עקבי בצבע זה לאורך כל הדף
  const themeColor = '#d6b16c'; // צבע זהב
  const themeColorDark = '#b8964a'; // גרסה כהה יותר של צבע הזהב
  //const themeColorLight = '#f0dba8'; // גרסה בהירה יותר של צבע הזהב

  const companyFeatures = [
    {
      icon: Settings,
      title: 'מומחיות מקיפה',
      description: 'התמחות במגוון פתרונות למטבחי פנים וחוץ, מנדפים ומערכות מידוף',
    },
    {
      icon: Users,
      title: 'צוות מקצועי',
      description: 'מהנדסים, מעצבים וטכנאים מומחים המספקים פתרונות מותאמים אישית',
    },
    {
      icon: Award,
      title: 'חדשנות ואיכות',
      description: 'שימוש בטכנולוגיות מתקדמות וחומרים איכותיים העומדים בתקנים המחמירים',
    },
    {
      icon: Wrench,
      title: 'עיצוב מותאם',
      description: 'פתרונות מעוצבים בהתאמה אישית במיוחד עבורכם המשלבים פונקציונליות ואסתטיקה',
    },
    {
      icon: Building,
      title: 'מקצועיות',
      description: 'צוות המומחים שלנו מתעדכן באופן שוטף בכל החידושים והשינויים בתחום',
    },
    {
      icon: ThumbsUp,
      title: 'אמינות',
      description: 'אנו מחויבים לשקיפות מלאה ולסטנדרטים האתיים הגבוהים ביותר',
    },
    {
      icon: Palette,
      title: 'שירות אישי',
      description: 'כל לקוח מקבל יחס אישי ומותאם לצרכיו הספציפיים',
    },
    {
      icon: Shield,
      title: "איכות ללא פשרות",
      description: "חומרי גלם איכותיים העומדים בתקנים המחמירים ביותר",
    }
  ];

  // עבור אנימציות ואפקטים אינטראקטיביים
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  // הנפשות לסקשנים השונים
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="rtl">

      {/* Hero Section  bg-gray-900  
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24 text-white overflow-hidden"> */}
      <section className={`relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-[${themeColorDark}]`}>

        <div className="absolute inset-0 opacity-10">
          {/* רקע דקורטיבי */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              חברת <span style={{ color: themeColor }}>טי אמ מנדפים</span>
            </h1>

            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              אנחנו משלבים ידע מקצועי, ניסיון שטח וטכנולוגיה מתקדמת
              כדי לייצר מנדפים וקולטי אדים שעושים את העבודה בצורה מושלמת.
            </p>

            {/* כפתור קריאה לפעולה בצבע התמה */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-medium text-gray-900 bg-gradient-to-r from-[#d6b16c] to-[#e7c682] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              צרו קשר עכשיו
            </motion.button>
          </motion.div>
        </div>

        {/* אלמנט דקורטיבי בתחתית החלק */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,53.3C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
            ></path>
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
            <div className="md:flex">
              {/* תמונה מימין */}
              <div className="md:w-1/3 bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="bg-white inline-flex rounded-full bg-blue-100 p-4 mb-6 backdrop-blur-sm p-4 mb-6">
                    <Award className={`h-12 w-12 text-[${themeColor}]`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">מצוינות</h3>
                  <p className="text-blue-100">מובילים בתחום פתרונות האוורור למטבחים</p>
                </div>
              </div>

              {/* תוכן משמאל */}
              <div className="md:w-2/3 p-12">
                <h2 className={`text-3xl font-bold text-gray-900 mb-6 border-r-4 border-[${themeColor}] pr-4`}>
                  החזון שלנו
                </h2>
                <div className="prose">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    "אנו שואפים להוביל את תעשיית המנדפים בישראל תוך הקפדה על איכות בלתי מתפשרת,
                    חדשנות טכנולוגית, ושירות לקוחות מעולה. חזוננו הוא לספק מנדפים שלא רק עומדים בתקנים הנדרשים,
                    אלא גם תורמים לסביבת עבודה בטוחה יותר, נקייה יותר ויעילה יותר."
                  </p>
                  <p className="text-lg text-gray-700">
                    המומחיות, הניסיון והמחויבות לאיכות הם אבני היסוד של החברה שלנו.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* מאפייני החברה - מבנה כרטיסים אחיד */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className={`inline-block border-b-4 border-[${themeColor}] pb-2`}>הערכים שלנו</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              אנו מחויבים למצוינות ולשירות ברמה הגבוהה ביותר
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {companyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                  hoveredFeature === index ? 'transform -translate-y-2 shadow-xl' : ''
                }`}
              >
                {/* רצועת צבע בראש הכרטיס */}
                <div className={`h-2 bg-[${themeColor}]`}></div>

                <div className="p-8">
                  <div className={`inline-flex rounded-full p-3 mb-6 bg-white`}>
                    <feature.icon className={`h-8 w-8 text-[${themeColor}]`} />
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
      <section className={`py-16 bg-[${themeColor}]/10`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex rounded-full bg-white/80 p-2 mb-6">
              <ThumbsUp className={`h-8 w-8 text-[${themeColor}]`} />
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