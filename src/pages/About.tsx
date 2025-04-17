import { Building, Users, Award, Palette } from 'lucide-react'
import { motion } from 'framer-motion';

const About = () => {
  const companyFeatures = [
    {
      icon: Building,
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
      icon: Palette,
      title: 'עיצוב מותאם',
      description: 'פתרונות מעוצבים בהתאמה אישית במיוחד עבורכם המשלבים פונקציונליות ואסתטיקה'
    }

    ,
    {
      icon: Palette,
      title: 'מקצועיות',
      description: 'צוות המומחים שלנו מתעדכן באופן שוטף בכל החידושים והשינויים בתחום'
    }
    ,
    {
      icon: Palette,
      title: 'אמינות',
      description: 'אנו מחויבים לשקיפות מלאה ולסטנדרטים האתיים הגבוהים ביותר'
    }
    ,
    {
      icon: Palette,
      title: 'שירות אישי',
      description: 'כל לקוח מקבל יחס אישי ומותאם לצרכיו הספציפיים'
    }
  ];

  const teamMembers = [
    {
      name: 'ישראל ישראלי',
      role: 'מהנדס ראשי',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      description: 'בעל 15 שנות ניסיון בבהנדסה וייעוץ לעסקים.',
    },
    {
      name: 'שרה כהן',
      role: 'יועצת מכירות',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      description: 'יועצת מכירות עם התמחות בעסקים קטנים ובינוניים.',
    },
    {
      name: 'דוד לוי',
      role: 'מעצב ראשי',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      description: 'מעצב ראשי עם התמחות בהתקנות.',
    },
  ];

  return (
    <div className="rtl">
      <section className="relative bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-100 mb-4" >אודותינו</h1>
            <header className="text-center mb-16">
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                כבר למעלה מעשור שאנחנו משלבים ידע מקצועי, ניסיון שטח וטכנולוגיה מתקדמת
                כדי לייצר מנדפים וקולטי אדים שעושים את העבודה בצורה מושלמת.
              </p>
            </header>
          </motion.h1>
        </div>
      </section>


      {/* סיפור החברה */}
      <section className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"

                  alt="סיפור החברה"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">הסיפור שלנו</h2>
                <div className=" text-gray-600">
                  <p>
                    טי אנד מדפים - המומחים לעיצוב וייצור מטבחים ומנדפים מקצועיים
                    במשך שנים, חברתנו מובילה את תחום עיצוב וייצור המטבחים והמדפים המקצועיים. אנו מתמחים במתן פתרונות מתקדמים למטבחים מסחריים וביתיים, תוך הקפדה על איכות חומרים בלתי מתפשרת ועמידה בתקנים המחמירים ביותר, כולל תקן 1001 חלק 6.
                    הצוות שלנו כולל מהנדסים, טכנאים ואנשי שירות בעלי תשוקה אמיתית לתחום המזון והמטבח, המלווים אתכם לאורך כל שלבי הפרויקט - מהתכנון הראשוני ועד להתקנה ולהענקת שירות מתמשך.
                    בין לקוחותינו נמנים מסעדות, בתי קפה, בתי מלון, מאפיות ומוסדות נוספים. אנו מציעים מגוון רחב של פתרונות, הכוללים מנדפים מתקדמים, מערכות יניקה וסינון, מדפים מותאמים אישית ומערכות צלייה איכותיות.
                    אנו מתחייבים לשירות אמין, אחריות מלאה ועמידה בלוחות זמנים, תוך ליווי מלא בתהליך קבלת האישורים הנדרשים. בטיחות ואיכות העבודה שלנו הם בראש סדר העדיפויות, ואנו כאן כדי להבטיח שקט נפשי ללקוחותינו.
                    טי אנד מדפים - הבחירה הנכונה למטבח מקצועי ובטוח!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* חזון החברה */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-center text-white">החזון שלנו</h2>
              <div className="bg-gray-700 rounded-xl p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-2xl font-light leading-relaxed text-gray-300">
                    "אנו שואפים להוביל את תעשיית המנדפים בישראל תוך הקפדה על איכות בלתי מתפשרת,
                    חדשנות טכנולוגית, ושירות לקוחות מעולה. חזוננו הוא לספק מנדפים שלא רק עומדים בתקנים הנדרשים,
                    אלא גם תורמים לסביבת עבודה בטוחה יותר, נקייה יותר ויעילה יותר."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* מאפייני החברה */}
      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
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

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="text-center mb-5">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">הצוות שלנו</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                מאחורי כל מנדף איכותי עומד צוות מקצועי ומסור של מומחים בתחומם.
              </p>
              <p className="text-xl text-gray-600">
                צוות המומחים שלנו כאן בשבילכם
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-indigo-600 mb-3">{member.role}</div>
                  <p className="text-gray-600">{member.description}</p>
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
        {/*
        <a
          href="/contact"
          className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors group"
        >
          צרו קשר
          <ArrowRight className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
        </a>
        */}
      </div>
    </div>
  )
}

export default About 