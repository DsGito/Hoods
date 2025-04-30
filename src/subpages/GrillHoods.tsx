import { Link } from "react-router-dom";
import { Check, Flame, Shield, Thermometer } from "lucide-react";
import { motion } from 'framer-motion';
import CtaMoreSection from '../components/sections/CtaMoreSection';

export default function GrillHoods() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                מנדף גריל - הפתרון הטוב ביותר עבורכם!
              </h1>
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-4 space-x-reverse">
                  <li>
                    <Link to="/Home" className="text-gray-500 hover:text-gray-700">
                      דף הבית
                    </Link>
                  </li>
                  <li className="text-gray-500">/</li>
                  <li>
                    <Link to="/Products" className="text-gray-500 hover:text-gray-700">
                      מוצרים
                    </Link>
                  </li>
                  <li className="text-gray-500">/</li>
                  <li className="text-gray-900 font-medium">מנדפי גריל</li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="/images/img3.jpg"
                  alt="מנדפי גריל"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-4">מנדף גריל מקצועי למסעדות בשרים</h2>
                <p className="text-gray-600 mb-6">
                  רוצים להנות ממנגל במסעדת בשרים שהבריח הבשרי יישאר לכם ולאורחים? מנדף גריל הוא הפתרון הטוב ביותר עבורכם! מנדפי הגריל שלנו מתוכננים במיוחד להתמודד עם העשן הכבד, השומנים והחום הגבוה המאפיינים עבודה עם גריל.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-gray-600">מסנני שומן מתקדמים</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-gray-600">יכולת שאיבה גבוהה</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-gray-600">חומרים עמידים במיוחד</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">מאפיינים ייחודיים של מנדפי הגריל שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Flame,
                title: "עמידות בחום גבוה",
                description: "נירוסטה 304 עמידה בטמפרטורות של עד 600°C, מושלמת לעבודה עם גריל ופחמים לוהטים."
              },
              {
                icon: Thermometer,
                title: "בקרת טמפרטורה",
                description: "חיישני טמפרטורה מתקדמים השולטים במהירות המפוח בהתאם לעוצמת החום והעשן."
              },
              {
                icon: Shield,
                title: "סינון כפול",
                description: "מערכת סינון כפולה ללכידת שומנים וחלקיקים עדינים, מפחיתה משמעותית את הריחות והעשן."
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center hover:shadow-md transition-shadow p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))
            }
          </div>
        </section>

        {/* Products Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">סוגי מנדפי גריל</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: "charcoal-grill",
                title: "מנדף לגריל פחמים",
                description: "מתוכנן במיוחד להתמודדות עם העשן והחום האינטנסיביים של גרילי פחמים. כולל מערכת סינון מתקדמת להפחתת ריחות וזיהום אוויר.",
                image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                features: [
                  "מבנה חזק במיוחד העומד בתנאי חום קיצוניים",
                  "מערכת סינון ניצוצות ייחודית",
                  "עוצמת שאיבה גבוהה במיוחד",
                ],
              },
              {
                id: "gas-grill",
                title: "מנדף לגריל גז",
                description: "מיועד לגרילי גז מקצועיים, עם שליטה מדויקת על עוצמת השאיבה בהתאם לעוצמת הבישול. מצויד במסנני שומן מתקדמים ביותר.",
                image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                features: [
                  "בקרת עוצמה אלקטרונית",
                  "מסנני שומן נשלפים קלים לניקוי",
                  "תאורת LED משולבת להארת אזור הבישול",
                ],
              },
              {
                id: "tabun-hood",
                title: "מנדף לטאבון",
                description: "מנדף מותאם במיוחד לטאבונים מסורתיים, המתמודד עם החום הגבוה והעשן הייחודי של אפיית פיתות ובשרים בטאבון.",
                image: "https://images.unsplash.com/photo-1621510456681-2330135e5871?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                features: [
                  "תכנון ייחודי המתאים למבנה הטאבון",
                  "חומרים עמידים בחום של עד 600°C",
                  "מסנני עשן מיוחדים לבישול בתנורי אבן",
                  "אפשרות להתאמה אישית לכל סוגי הטאבונים",
                ],
              },
              {
                id: "smoker-hood",
                title: "מנדף למעשנות",
                description: "מנדף ייעודי המתוכנן לעבודה עם מעשנות בשר מקצועיות, עם מערכת סינון מיוחדת ללכידת חלקיקי עשן וריח.",
                image: "https://images.unsplash.com/photo-1523392444453-1bbe603e907c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                features: [
                  "מערכת סינון עשן ייחודית ארבע-שלבית",
                  "בקרת זרימת אוויר לשמירה על טמפרטורה אחידה",
                  "אפשרות לחיבור לארובה חיצונית",
                  "חומרים עמידים בתנאי עבודה ממושכים",
                ],
              },
            ].map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative pb-[60%]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">מאפיינים עיקריים:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))
            }
          </div>
        </section>

      </div>
      {/* קריאה לפעולה */}
      <CtaMoreSection />
    </div>
  );
}
