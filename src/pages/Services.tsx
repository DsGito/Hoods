import { Wrench, Check, ArrowLeft, ShieldCheck } from 'lucide-react'
import { PencilRuler, Settings } from "lucide-react";
import { Button } from '../components/ui/button'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {

  const services = [
    {
      id: "/SrvPlanning",
      title: "תכנון והתאמה אישית",
      description: "צוות המומחים שלנו מלווה אתכם משלב הייעוץ הראשוני ועד לתכנון המדויק של המנדף המתאים ביותר.",
      icon: PencilRuler,
      features: [
        "סקירת המטבח ומדידות מדויקות",
        "ייעוץ לגבי סוג המנדף המתאים ביותר",
        "תכנון מדויק המותאם לצרכים הספציפיים",
        "סימולציות ממוחשבות של זרימת אוויר",
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "/SrvInstallation",
      title: "התקנה מקצועית",
      description: "צוות ההתקנות המיומן שלנו מבצע את ההתקנה ברמה הגבוהה ביותר, תוך הקפדה על כל פרט ופרט.",
      icon: Settings,
      features: [
        "התקנה על ידי צוות מוסמך ומנוסה",
        "שימוש בחומרים ובציוד איכותיים",
        "ביצוע לפי תקנים מחמירים",
        "בדיקת תקינות ויעילות לאחר ההתקנה",
      ],
      image: '/images/gallery1.jpg',
    },
    {
      id: "/SrvMaintenance",
      title: "תחזוקה ושירות",
      description: "אנו מציעים שירותי תחזוקה שוטפים לשמירה על תקינות המנדף לאורך זמן ולהבטחת ביצועים מיטביים. שירותי תחזוקה קבועים לשמירה על תקינות המנדף ואורך חיים מקסימלי. התקנה ותחזוקה מקצועית של מערכות יניקה מתקדמות למטבחי פנים וחוץ מכל הסוגים. פתרונות המבטיחים אוויר נקי ועמידה בכל התקנים הנדרשים.",
      icon: Wrench,
      features: [
        "ניקוי מסננים וחלקים פנימיים",
        "בדיקת מנועים ומערכות חשמל",
        "ניקוי יסודי של תעלות",
        "טיפול בתקלות ובבעיות שוטפות",
      ],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "/SrvSafety",
      title: "אישורי בטיחות ותקנים",
      description: "אנו מסייעים בקבלת כל האישורים הנדרשים מהרשויות, כולל אישורי כיבוי אש ואישורי תברואה.",
      icon: ShieldCheck,
      features: [
        "ליווי בתהליך קבלת אישורי כיבוי אש",
        "הכנת תיק מתקן לפי דרישות הרשויות",
        "התאמה לתקן ישראלי 1001 חלק 6",
        "עמידה בדרישות תברואה ובטיחות",
      ],
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="rtl">
      <section className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            <h1>הפתרונות שלנו</h1>
            <h1 className="text-4xl font-bold text-gray-100 mb-4">
              כל השירותים במקום אחד
            </h1>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            <p>
              מגוון פתרונות מתקדמים, המשלבים טכנולוגיה חדשנית עם עיצוב מוקפד
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              מלבד ייצור מנדפים איכותיים, אנו מציעים שירותי התקנה, תחזוקה שוטפת ושדרוג מערכות קיימות.
              המומחים שלנו ילוו אתכם משלב התכנון, דרך ההתקנה ועד ביקורות תקופתיות להבטחת ביצועים מיטביים.
            </p>
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-xl shadow-md overflow-hidden`}
            >
              <div className="md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">

                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-primary ml-3" />
                    <h2 className="text-3xl font-bold text-gray-900 mr-4">{service.title}</h2>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="ml-2 text-blue-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div >
                  <Link to={service.id}>
                    <Button className="mt-6 self-start">
                      למידע נוסף
                    </Button>


                  </Link>
                  <Link to={"/Contact"}>
                    <Button variant="outline">
                      לפרטים נוספים
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          תכניות תחזוקה
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "בסיסית",
              price: "₪1,200",
              period: "לשנה",
              features: [
                "ביקורת תחזוקה שנתית",
                "ניקוי מסננים",
                "בדיקת מערכת החשמל",
                "תמיכה טלפונית"
              ],
              highlight: false,
            },
            {
              title: "מתקדמת",
              price: "₪2,400",
              period: "לשנה",
              features: [
                "ביקורת תחזוקה חצי שנתית",
                "ניקוי מסננים וחלקים פנימיים",
                "בדיקת מערכת החשמל",
                "ניקוי תעלות",
                "תמיכה טלפונית מורחבת",
                "תגובה תוך 48 שעות לתקלות"
              ],
              highlight: true,
            },
            {
              title: "פרימיום",
              price: "₪3,600",
              period: "לשנה",
              features: [
                "ביקורת תחזוקה רבעונית",
                "ניקוי מסננים וחלקים פנימיים",
                "בדיקת והחלפת חלקים פגומים",
                "ניקוי תעלות מקיף",
                "תמיכה טלפונית 24/7",
                "תגובה תוך 24 שעות לתקלות"
              ],
              highlight: false,
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.highlight ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  מומלץ ביותר
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-center mb-2">{plan.title}</h3>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="ml-2 text-blue-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={"/Contact"}>
                  <Button
                    className={`w-full ${plan.highlight ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.highlight ? 'default' : 'outline'}
                  >
                    הזמן עכשיו
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))
          }
        </div>
      </section>


      {/* קריאה לפעולה */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">מעוניינים לשמוע עוד?</h2>
          <p className="text-xl mb-8">
            צוות המומחים שלנו ישמח לייעץ ולהתאים עבורכם את הפתרון המושלם
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors group"
          >
            צרו קשר
            <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform ltr:rotate-180" />
          </Link>

        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            יש לכם שאלות לגבי השירותים שלנו?
          </h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            צוות השירות שלנו זמין לענות על כל שאלה ולעזור לכם למצוא את הפתרון המתאים ביותר לצרכים שלכם.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={"/Contact"}>
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100"
              >
                צרו קשר עכשיו
              </Button>
            </Link>
            <a href="tel:08-XXXXXXX">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                08-XXXXXXX
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services
