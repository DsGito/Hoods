import { Shield, Settings, Wrench, ThumbsUp, Building, Users, Award, Palette, ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

  // עבור אנימציות ואפקטים אינטראקטיביים
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="rtl">
      <section className="relative overflow-hidden bg-gray-900 text-white py-6">

        {/* רקע מעוצב */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 z-0">
          <div className="absolute inset-0 opacity-20 bg-[url('/pattern.svg')]">
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              אודות <span className="text-blue-300">טי אמ מנדפים</span>
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              אנחנו משלבים ידע מקצועי, ניסיון שטח וטכנולוגיה מתקדמת
              כדי לייצר מנדפים וקולטי אדים שעושים את העבודה בצורה מושלמת.
            </p>

            <div className="flex justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                יצירת קשר
                <ChevronLeft className="h-5 w-5 mr-2" />
              </Link>
            </div>
          </motion.h1>
        </div>
      </section>


      {/* חזון החברה */}
      <section className="py-20 bg-gray-50">
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
      <section className="py-20 bg-gray-50">
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

      {/* קריאה לפעולה */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex items-center">
              <div className="md:w-2/3 p-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  מעוניינים לשמוע עוד?
                </h2>
                <p className="text-blue-100 mb-8 text-lg">
                  הצוות המקצועי שלנו ישמח לייעץ ולהתאים עבורכם את הפתרון המושלם.
                  אנו מציעים ייעוץ מקצועי, התאמה אישית ותמיכה לאורך כל הדרך.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/Contact"
                    className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                  >
                    צור קשר
                  </Link>
                  <Link
                    to="/Products"
                    className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-all"
                  >
                    למוצרים שלנו
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3 flex items-center justify-center p-12">
                <div className="bg-white/10 p-8 rounded-full">
                  <Award className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About 