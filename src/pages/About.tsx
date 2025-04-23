import { Shield, Settings, Wrench, ThumbsUp, Building, Users, Award, Palette } from 'lucide-react'
import { motion } from 'framer-motion';

const About = () => {
  const companyFeatures = [
    {
      icon: Settings,
      title: 'מומחיות מקיפה',
      description: 'התמחות במגוון פתרונות למטבחי פנים וחוץ, מנדפים ומערכות מידוף'
    },
    {
      icon: Users,
      title: 'צוות מקצועי',
      description: 'מהנדסים, מעצבים וטכנאים מומחים המספקים פתרונות מותאמים אישית'
    },
    {
      icon: Award,
      title: 'חדשנות ואיכות',
      description: 'שימוש בטכנולוגיות מתקדמות וחומרים איכותיים העומדים בתקנים המחמירים'
    },
    {
      icon: Wrench,
      title: 'עיצוב מותאם',
      description: 'פתרונות מעוצבים בהתאמה אישית במיוחד עבורכם המשלבים פונקציונליות ואסתטיקה'
    }

    ,
    {
      icon: Building,
      title: 'מקצועיות',
      description: 'צוות המומחים שלנו מתעדכן באופן שוטף בכל החידושים והשינויים בתחום'
    }
    ,
    {
      icon: ThumbsUp,
      title: 'אמינות',
      description: 'אנו מחויבים לשקיפות מלאה ולסטנדרטים האתיים הגבוהים ביותר'
    }
    ,
    {
      icon: Palette,
      title: 'שירות אישי',
      description: 'כל לקוח מקבל יחס אישי ומותאם לצרכיו הספציפיים'
    },
    {
      icon: Shield,
      title: "איכות ללא פשרות",
      description: "חומרי גלם איכותיים העומדים בתקנים",    
    }
  ];

  return (
    <div className="rtl">
      <section className="relative bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-100 mb-4" >אודותינו</h1>
            <header className="text-center">
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                כבר למעלה מעשור שאנחנו משלבים ידע מקצועי, ניסיון שטח וטכנולוגיה מתקדמת
                כדי לייצר מנדפים וקולטי אדים שעושים את העבודה בצורה מושלמת.
              </p>
            </header>
          </motion.h1>
        </div>
      </section>

      {/* חזון החברה */}
      <section className="py-6 bg-white text-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">החזון שלנו</h2>

              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg text-gray-600 mb-6">
                  "אנו שואפים להוביל את תעשיית המנדפים בישראל תוך הקפדה על איכות בלתי מתפשרת,
                  חדשנות טכנולוגית, ושירות לקוחות מעולה. חזוננו הוא לספק מנדפים שלא רק עומדים בתקנים הנדרשים,
                  אלא גם תורמים לסביבת עבודה בטוחה יותר, נקייה יותר ויעילה יותר."
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* מאפייני החברה */}
      {/* Values Section */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">הערכים שלנו</h2>
              <p className="text-xl text-gray-600">
                אנו מחויבים למצוינות ולשירות ברמה הגבוהה ביותר
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div key={index} >
                  <feature.icon className="h-12 w-12 mx-auto text-blue-700  mb-4 " />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* קריאה לפעולה */}
      <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          מעוניינים לשמוע עוד?
        </h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          הצוות המקצועי שלנו ישמח לייעץ ולהתאים עבורכם את הפתרון המושלם.
          אנו מציעים ייעוץ מקצועי, התאמה אישית ותמיכה לאורך כל הדרך.
        </p>
      </div>
    </div>
  )
}

export default About 