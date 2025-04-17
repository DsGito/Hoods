import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Hammer, HardHat, Shield, Timer } from "lucide-react";
import { motion } from 'framer-motion';

export default function SrvInstallation() {
    const installationSteps = [
        {
            title: "הכנה",
            description: "בדיקת האתר וביצוע כל ההכנות הנדרשות לפני ההתקנה",
            items: [
                "בדיקת המיקום והתשתיות הקיימות",
                "סימון נקודות התקנה וחיבור",
                "הכנת כלים וציוד נדרש",
                "הגנה על סביבת העבודה",
            ],
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "התקנת המנדף",
            description: "התקנה מקצועית של המנדף במיקום שנקבע",
            items: [
                "קיבוע המנדף לקיר/תקרה",
                "התקנת מסגרת תמיכה במידת הצורך",
                "יישור וייצוב המנדף",
                "התקנת מסנני השומן והאוויר",
            ],
            image: "https://images.unsplash.com/photo-1581092921461-6484fdac6b12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "התקנת צנרת ותעלות",
            description: "התקנת מערכת התעלות להובלת האוויר החוצה",
            items: [
                "חיבור תעלות בגדלים מתאימים",
                "התקנת אטמים ומחברים לאטימה מלאה",
                "חיבור המנדף למערכת הצנרת",
                "יצירת פתחים בקירות/גג במידת הצורך",
            ],
            image: "https://images.unsplash.com/photo-1581092786450-7ef25f140998?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "התקנת המפוח",
            description: "התקנה וחיבור של המפוח למערכת",
            items: [
                "מיקום המפוח בנקודה האופטימלית",
                "חיבור המפוח לצנרת",
                "התקנת משתיקי קול בהתאם לצורך",
                "בידוד וקיבוע המפוח למניעת רעידות",
            ],
            image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "חיבורי חשמל",
            description: "ביצוע חיבורי החשמל הנדרשים",
            items: [
                "חיבור המנדף והמפוח לחשמל",
                "התקנת מערכת הבקרה והשליטה",
                "חיבור מערכת התאורה",
                "בדיקות בטיחות חשמל",
            ],
            image: "https://images.unsplash.com/photo-1621905252285-15c217169bda?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "בדיקה והפעלה",
            description: "בדיקת המערכת והפעלה ראשונית",
            items: [
                "בדיקת כל החיבורים והאטמים",
                "הפעלה ניסיונית של המערכת",
                "כיוון עוצמת השאיבה והתאורה",
                "וידוא פעילות תקינה של כל המערכת",
            ],
            image: "https://images.unsplash.com/photo-1581092787765-e31370ef8ea0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                התקנה מקצועית
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
                                        <Link to="/Services" className="text-gray-500 hover:text-gray-700">
                                            שירותים
                                        </Link>
                                    </li>
                                    <li className="text-gray-500">/</li>
                                    <li className="text-gray-900 font-medium">התקנה מקצועית</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <Link to="/Contact?service=installation">
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    הזמנת שירותי התקנה
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl overflow-hidden shadow-md">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1581092921461-6484fdac6b12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                    alt="התקנה מקצועית"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8">
                                <h2 className="text-2xl font-bold mb-4">התקנה מקצועית ואמינה</h2>
                                <p className="text-gray-600 mb-6">
                                    צוות ההתקנות המיומן שלנו מבצע את ההתקנה ברמה הגבוהה ביותר, תוך הקפדה על כל פרט ופרט.
                                    ההתקנה כוללת את המנדף, מערכת התעלות, המפוחים וכל הרכיבים הנלווים.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">צוות מקצועי ומנוסה</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">שימוש בחומרים איכותיים</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">התקנה לפי תקנים מחמירים</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">בדיקת תקינות לאחר ההתקנה</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link to="/Contact?service=installation">
                                        <Button className="bg-blue-600 hover:bg-blue-700">
                                            הזמנת שירותי התקנה
                                        </Button>
                                    </Link>
                                    <Link to="#installation-process">
                                        <Button variant="outline">
                                            על תהליך ההתקנה
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Advantages */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">היתרונות שלנו</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                icon: HardHat,
                                title: "צוות מוסמך",
                                description: "כל המתקינים שלנו מוסמכים ועוברים הכשרות רענון קבועות בתחום ההתקנות, הבטיחות ותקני העבודה."
                            },
                            {
                                icon: Timer,
                                title: "עמידה בלוחות זמנים",
                                description: "אנו מקפידים לעמוד בלוחות הזמנים שנקבעו ולסיים את ההתקנה בזמן המוסכם, תוך הפרעה מינימלית."
                            },
                            {
                                icon: Shield,
                                title: "אחריות מלאה",
                                description: "אנו מעניקים אחריות מלאה על ההתקנה, בנוסף לאחריות על המוצר עצמו, להבטחת שקט נפשי מלא."
                            },
                            {
                                icon: Hammer,
                                title: "כלים וציוד מתקדמים",
                                description: "שימוש בכלים וציוד מתקדמים המאפשרים התקנה מדויקת, בטוחה ויעילה בכל תנאי שטח."
                            },
                        ].map((advantage, index) => (
                            <motion.div
                                key={index}
                                className="text-center hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                                    <advantage.icon className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                                <p className="text-gray-600">{advantage.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Installation Process */}
                <section id="installation-process" className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">תהליך ההתקנה</h2>

                    <div className="space-y-6">
                        {installationSteps.map((step, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                                <div className="md:flex">
                                    <div className="md:w-1/3">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="md:w-2/3 p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center ml-4">
                                                <span className="text-blue-600 font-bold">{index + 1}</span>
                                            </div>
                                            <h3 className="text-xl font-bold">{step.title}</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">{step.description}</p>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {step.items.map((item, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Installation Types */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">סוגי התקנות</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "התקנה סטנדרטית",
                                description: "מתאימה למקרים בהם אין צורך בהתאמות מיוחדות, הכל מותקן לפי תכנון סטנדרטי.",
                                features: [
                                    "זמן התקנה: בדרך כלל יום עבודה אחד",
                                    "מיועד למטבחים ביתיים ועסקיים רגילים",
                                    "שימוש בחלקים סטנדרטיים",
                                    "חיבור למערכות קיימות",
                                ],
                                image: "https://images.unsplash.com/photo-1556910585-09baa3a3580f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "התקנה מורכבת",
                                description: "למבנים מיוחדים, חללים מאתגרים, או במקרים שדורשים פתרונות התקנה ייחודיים.",
                                features: [
                                    "זמן התקנה: 2-5 ימי עבודה",
                                    "פתרונות מותאמים אישית",
                                    "שימוש בחלקים ייעודיים",
                                    "עבודה בתנאים מאתגרים",
                                ],
                                image: "https://images.unsplash.com/photo-1501183638272-442d85fb850a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "שדרוג והחלפה",
                                description: "החלפת מנדף קיים או שדרוג מערכת ישנה למערכת חדשה ומתקדמת יותר.",
                                features: [
                                    "זמן התקנה: 1-2 ימי עבודה",
                                    "פירוק זהיר של המערכת הישנה",
                                    "התאמת תשתיות קיימות",
                                    "שדרוג מערכות חשמל במידת הצורך",
                                ],
                                image: "https://images.unsplash.com/photo-1534347819051-285729d2a859?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "התקנת מערכות מסחריות גדולות",
                                description: "התקנת מערכות גדולות למסעדות, מלונות, מפעלי מזון וחללים מסחריים גדולים.",
                                features: [
                                    "זמן התקנה: 3-7 ימי עבודה",
                                    "תיאום עם גורמים רבים",
                                    "עמידה בתקנים מסחריים",
                                    "מערכות מורכבות ומתקדמות",
                                ],
                                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            },
                        ].map((type, index) => (
                            <motion.div
                                key={index}
                                className="overflow-hidden shadow-md"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="relative pb-[50%]">
                                    <img
                                        src={type.image}
                                        alt={type.title}
                                        className="absolute w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                                    <p className="text-gray-600 mb-4">{type.description}</p>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <ul className="space-y-2">
                                            {type.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">מה אומרים הלקוחות שלנו</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                quote: "צוות ההתקנה היה מקצועי להפליא, עבדו בצורה מסודרת ונקייה והשאירו את המטבח במצב מושלם. המנדף פועל בצורה מצוינת וללא רעשים.",
                                author: "רמי לוי - מסעדת 'הפינה הטובה'",
                                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
                            },
                            {
                                quote: "עברנו למיקום חדש והיינו צריכים פתרון התקנה מורכב בגלל מבנה התקרה. הצוות פתר את הבעיה בצורה יצירתית והתוצאה מושלמת!",
                                author: "שלומית כהן - קונדיטוריה 'מתוק וטעים'",
                                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
                            },
                            {
                                quote: "התקנה מהירה וי עילה. הצוות הגיע בזמן, עבד ללא הפרעות מיותרות, וסיים בדיוק כפי שהובטח. ממליץ בחום!",
                                author: "יוסי אברהם - בית פרטי, הרצליה",
                                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                              key={index}
                              className="shadow-sm"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <div className="p-6">
                                <div className="flex items-center mb-4">
                                  <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-12 h-12 rounded-full object-cover ml-4"
                                  />
                                  <p className="font-medium">{testimonial.author}</p>
                                </div>
                                <p className="text-gray-600">"{testimonial.quote}"</p>
                              </div>
                            </motion.div>
                          ))}
                    </div>
                </section>

                {/* Installation Checklist */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">רשימת בדיקות לאחר ההתקנה</h2>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="p-8">
                            <p className="text-gray-600 mb-6">
                                לאחר סיום ההתקנה, הצוות שלנו מבצע סדרת בדיקות מקיפה כדי להבטיח שהמערכת פועלת בצורה אופטימלית:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold mb-3">בדיקות פונקציונליות:</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>הפעלת המנדף בכל מהירויות השאיבה</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>בדיקת תפקוד התאורה</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>בדיקת יעילות השאיבה</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>בדיקת בקרת השליטה</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>בדיקת רמות רעש</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold mb-3">בדיקות בטיחות:</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>בדיקת חיבורי חשמל</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>בדיקת אטימות חיבורי הצנרת</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>בדיקת יציבות וקיבוע המנדף</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>בדיקת מערכות כיבוי אש (אם קיימות)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>וידוא תקינות הארקה</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                <p className="text-blue-800 font-medium">
                                    בסיום ההתקנה אנו מספקים תיק מוצר הכולל תעודת אחריות, מדריך הפעלה, הוראות תחזוקה וכל האישורים הרלוונטיים.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            מוכנים להתקנה מקצועית?
                        </h2>
                        <p className="text-lg mb-6 max-w-3xl mx-auto">
                            צרו קשר עכשיו לקבלת הצעת מחיר ותיאום התקנה עם הצוות המקצועי שלנו!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/Contact?service=installation">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-700 hover:bg-gray-100"
                                >
                                    הזמנת שירותי התקנה
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