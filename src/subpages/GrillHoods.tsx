import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, FireExtinguisher, Flame, Shield, Thermometer } from "lucide-react";
import { motion } from 'framer-motion';

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
            <div className="mt-4 md:mt-0">
              <Link to="/Contact?Product=grill">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  לקבלת הצעת מחיר
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
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
                      <p className="text-gray-600">מערכות כיבוי אש אוטומטיות</p>
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
                
                <div className="flex flex-wrap gap-4">
                  <Link to="/Contact?Product=grill">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      אנא צרו קשר לייעוץ
                    </Button>
                  </Link>
                  <Button variant="outline">
                    צפו בקטלוג 
                  </Button>
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
                description: "נירוסטה 316 עמידה בטמפרטורות של עד 600°C, מושלמת לעבודה עם גריל ופחמים לוהטים."
              },
              {
                icon: FireExtinguisher,
                title: "בטיחות מקסימלית",
                description: "מערכות כיבוי אש אוטומטיות מובנות, המופעלות בזמן אמת במקרה של התלקחות."
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
                  "מערכת כיבוי אש אוטומטית מובנית",
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
                  "התראות חכמות על מצב המסננים",
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
              
                    <Link to={`/Contact?Product=${product.id}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        בקשת הצעת מחיר
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))
              }
          </div>
        </section>

        {/* Filtration Systems */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">מערכות סינון מתקדמות</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1620236104164-d2e71398f8b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="מערכות סינון מתקדמות"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold mb-4">טכנולוגיית סינון ייחודית לגרילים</h3>
                <p className="text-gray-600 mb-6">
                  המנדפים שלנו מגיעים עם מערכות סינון מתקדמות המסננות את העשן והריחות ביעילות. 
                  מערכות אלו מאפשרות עבודה עם גריל גם באזורים צפופים ובקרבת שכנים, תוך שמירה על איכות האוויר והפחתת מטרדי הריח.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">שלב 1: מסנני השומן המכניים</h4>
                    <p className="text-gray-600">
                      מסנני נירוסטה מיוחדים בעלי יעילות סינון של עד 95% של חלקיקי שומן, ניתנים לפירוק ולניקוי בקלות.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">שלב 2: מערכת UV לנטרול ריחות</h4>
                    <p className="text-gray-600">
                      קרינת UV-C המפרקת מולקולות של ריחות וחומרים אורגניים, מפחיתה משמעותית את הריחות מהגריל.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">שלב 3: מסנני פחם פעיל</h4>
                    <p className="text-gray-600">
                      מסנני פחם פעיל קטליטי הסופגים מולקולות של ריח וגזים מזיקים, ניתנים להחלפה תקופתית.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">שלב 4: מסנן HEPA (אופציונלי)</h4>
                    <p className="text-gray-600">
                      לוכד 99.97% מהחלקיקים בגודל 0.3 מיקרון ומעלה, מושלם לסביבות רגישות במיוחד.
                    </p>
                  </div>
                </div>
                
                <Link to="/Contact?Product=grill&service=filtration">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    למידע נוסף על מערכות הסינון
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">סיפורי הצלחה</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                restaurant: "מסעדת 'אש וגחלים'",
                location: "תל אביב",
                quote: "מאז שהתקנו את מנדף הגריל המתקדם, הפסקנו לקבל תלונות משכנים על ריחות ועשן. בנוסף, זרימת האוויר במטבח השתפרה פלאים ואיכות בישול הבשרים עלתה בזכות הסביבה הנוחה יותר.",
                owner: "רוני כהן, בעלים",
                image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                restaurant: "גריל האוס",
                location: "ירושלים",
                quote: "ההשקעה במנדף הגריל של טי אנד מדפים הייתה אחת ההחלטות הטובות ביותר שקיבלנו. לא רק שהמסעדה נקייה מריחות, גם צוות המטבח נהנה מסביבת עבודה נעימה יותר וחשוב מכל - קיבלנו את כל האישורים הנדרשים בקלות.",
                owner: "שמואל לוי, שף ובעלים",
                image: "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
            ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden shadow-md"
                >
                  <div className="md:flex h-full">
                    <div className="md:w-2/5">
                      <img
                        src={story.image}
                        alt={story.restaurant}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{story.restaurant}</h3>
                        <p className="text-gray-500 mb-4">{story.location}</p>
                        <p className="text-gray-600 mb-4">"{story.quote}"</p>
                      </div>
                      <p className="text-blue-600 font-medium">{story.owner}</p>
                    </div>
                  </div>
                </motion.div>
              ))
              }
          </div>
        </section>

        {/* Fire Safety Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">בטיחות אש</h2>
          
          <div className="bg-red-50 rounded-xl p-6 border border-red-100">
            <div className="md:flex items-center gap-8">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <FireExtinguisher className="w-32 h-32 text-red-500" />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-red-700 mb-4">מערכות כיבוי אש אוטומטיות</h3>
                <p className="text-gray-700 mb-4">
                  גריל הוא אחד מהגורמים העיקריים לשריפות במסעדות. כל מנדפי הגריל שלנו מגיעים עם מערכות כיבוי אש אוטומטיות 
                  העומדות בתקנים המחמירים ביותר. המערכות כוללות:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-500 ml-2 mt-0.5" />
                    <span>חיישני חום וניטור להבה</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-500 ml-2 mt-0.5" />
                    <span>מערכת כיבוי אש אוטומטית מבוססת תרסיס</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-500 ml-2 mt-0.5" />
                    <span>ניתוק אוטומטי של אספקת הגז במקרה שריפה</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-500 ml-2 mt-0.5" />
                    <span>התרעה קולית וחזותית במקרה חירום</span>
                  </li>
                </ul>
                <Button className="bg-red-600 hover:bg-red-700">
                  למידע נוסף על מערכות בטיחות האש
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              מוכנים לשדרג את חווית הגריל במסעדה שלכם?
            </h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              צרו קשר עכשיו לקבלת ייעוץ מקצועי וללא התחייבות מהמומחים שלנו.
              אנחנו כאן כדי לעזור לכם למצוא את הפתרון המושלם עבור העסק שלכם.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/Contact?Product=grill">
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
    </div>
  );
}
