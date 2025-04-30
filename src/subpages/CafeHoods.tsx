import { Link } from "react-router-dom";
import { Check, Coffee, PieChart, VolumeX, Ruler } from "lucide-react";
import { motion } from 'framer-motion';
import CtaMoreSection from '../components/sections/CtaMoreSection';

export default function CafeHoods() {
    const products = [
        {
            id: "cafe-standard",
            title: "מנדף קומפקטי לבתי קפה",
            description: "מנדף קומפ בגודל מותאם במיוחד לבתי קפה קטנים עד בינוניים עם רמת עשן ואדים סטנדרטית.",
            image: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "גדלים מותאמים למטבחי בתי קפה קטנים",
                "רמת רעש נמוכה במיוחד (45dB)",
                "מסנני אלומיניום איכותיים",
                "תאורת LED מובנית",
                "קל לניקוי ותחזוקה",
            ],
        },
        {
            id: "bakery-hood",
            title: "מנדף למאפיות בתי קפה",
            description: "פתרון ייעודי למאפיות ובתי קפה המתמחים באפייה במקום, כולל יכולת סינון ריחות מוגברת.",
            image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "יכולת סינון מוגברת לאדי אפייה",
                "עמידות בטמפרטורות גבוהות",
                "מבנה עמוק במיוחד ללכידת אדים",
                "מסנני פחם לנטרול ריחות",
                "תאורה חזקה במיוחד לאזור האפייה",
            ],
        },
        {
            id: "design-hood",
            title: "מנדף מעוצב לבתי קפה",
            description: "מנדף בעיצוב יוקרתי המותאם אישית לקונספט העיצובי של בית הקפה, מושלם לחללים פתוחים ומעוצבים.",
            image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "עיצוב מותאם אישית",
                "גימורים יוקרתיים (נירוסטה, זכוכית, צבעים לבחירה)",
                "אפשרות לתאורה דקורטיבית",
                "פעולה שקטה במיוחד",
                "טכנולוגיית סינון מתקדמת",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                מנדפים לבתי קפה
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
                                    <li className="text-gray-900 font-medium">מנדפים לבתי קפה</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl overflow-hidden shadow-md">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src="/images/img29.jpg"
                                    alt="מנדפים לבתי קפה"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8">
                                <h2 className="text-2xl font-bold mb-4">מנדפים מעוצבים ושקטים לבתי קפה</h2>
                                <p className="text-gray-600 mb-6">
                                    הפתרונות שלנו לבתי קפה ומאפיות מציעים שילוב מושלם של עיצוב אסתטי, פעולה שקטה ויעילות סינון מקסימלית.
                                    המנדפים מותאמים במיוחד לצרכים הייחודיים של בתי קפה, המשלבים מטבח קטן יחסית עם חלל אירוח רגיש לרעשים וריחות.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">עיצוב אסתטי</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">פעולה שקטה במיוחד</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">מידות מותאמות לחללים קטנים</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">סינון אדים וריחות יעיל</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">מאפיינים מיוחדים למנדפים לבתי קפה</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                icon: VolumeX,
                                title: "פעולה שקטה",
                                description: "מנועים מיוחדים ובידוד אקוסטי לפעולה שקטה במיוחד, חיוני לחוויית לקוחות נעימה בבית הקפה."
                            },
                            {
                                icon: Ruler,
                                title: "מידות קומפקטיות",
                                description: "תכנון מותאם למטבחים קטנים של בתי קפה, עם ניצול אופטימלי של המרחב הזמין."
                            },
                            {
                                icon: Coffee,
                                title: "סינון ריחות מותאם",
                                description: "מסנני פחם מיוחדים המותאמים לריחות הייחודיים של קפה, מאפים וארוחות בוקר."
                            },
                            {
                                icon: PieChart,
                                title: "חיסכון באנרגיה",
                                description: "מערכות חכמות המווסתות את עוצמת הפעולה בהתאם לצורך, לחיסכון משמעותי בעלויות החשמל."
                            },
                        ]
                            .map((feature, index) => (
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
                            ))}
                    </div>
                </section>

                {/*  Product Catalog */}
                <section id="product-catalog" className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">הדגמים שלנו</h2>

                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-xl shadow-md overflow-hidden mb-8`}
                        >
                            <div className="md:w-2/5">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-3/5 p-8">
                                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                                <p className="text-gray-600 mb-6">{product.description}</p>

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
                        </div>
                    ))}
                </section>

                {/* Cafe Specific Considerations */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">שיקולים מיוחדים לבתי קפה</h2>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">שיקולי אסתטיקה ועיצוב</h3>
                                <p className="text-gray-600 mb-4">
                                    בבתי קפה, בהם החלל המשמש ללקוחות קרוב למטבח ולעתים בעל גישה ויזואלית למטבח, עיצוב המנדף הוא שיקול חשוב:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>עיצוב תואם לקונספט הכללי של בית הקפה</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>חומרי גמר יוקרתיים הניתנים לבחירה</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>אפשרות לתאורה מוטמעת המשתלבת בעיצוב הכללי</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>מנדפים שקטים במיוחד המותאמים לחללים משותפים</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4">סינון ריחות ייחודי</h3>
                                <p className="text-gray-600 mb-4">
                                    המנדפים לבתי קפה מכילים מערכות סינון מיוחדות המותאמות לסוגי הריחות והאדים הייחודיים של בתי קפה:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>מסנני פחם מיוחדים לקליטת ריחות הקפה</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>מערכת סינון אדי אפייה לבתי קפה עם מאפייה במקום</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>מסנני שומן בעלי יעילות גבוהה למנות קלות</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>מערכת בקרת ריחות חכמה המתאימה את עצמה לעוצמת הריחות</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4">התאמה למטבחים קטנים</h3>
                                <p className="text-gray-600 mb-4">
                                    מטבחי בתי קפה בדרך כלל קטנים יותר ממטבחי מסעדות, ולכן דורשים התאמות מיוחדות:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>מידות קומפקטיות המותאמות לחללים מצומצמים</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>אפשרויות התקנה מגוונות לניצול אופטימלי של החלל</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>מערכות תעלות קומפקטיות וגמישות</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>פתרונות משולבים למספר תחנות עבודה</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4">חיסכון בעלויות תפעול</h3>
                                <p className="text-gray-600 mb-4">
                                    המנדפים שלנו לבתי קפה מתוכננים לחיסכון משמעותי בעלויות החשמל והתחזוקה:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>מנועים חסכוניים במיוחד ובעלי נצילות אנרגטית גבוהה</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>מערכת בקרה חכמה המתאימה את עוצמת הפעולה לעומס</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>תאורת LED חסכונית ועוצמתית</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <span>מסננים קלים לניקוי להפחתת עלויות תחזוקה</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* קריאה לפעולה */}
            <CtaMoreSection />
        </div>
    );
}