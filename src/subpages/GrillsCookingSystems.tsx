import { Link } from "react-router-dom";
import { Check, Flame, ThermometerSun, Utensils, Settings } from "lucide-react";
import { motion } from 'framer-motion';
import CtaMoreSection from '../components/sections/CtaMoreSection';

export default function GrillsCookingSystems() {
    const products = [
        {
            id: "professional-grill",
            title: "מערכת גריל מקצועית",
            description: "מערכת גריל איכותית המשלבת טכנולוגיה מתקדמת עם עיצוב יוקרתי, אידיאלית למטבח חוץ מקצועי.",
            image: "/images/img0.jpg",
            features: [
                "מבערי נירוסטה עוצמתיים",
                "אפשרות לבחירת משטחי צלייה שונים",
                "מערכת פיזור חום אחידה",
                "שליטה מדויקת בטמפרטורה",
                "תאורת LED מובנית",
            ],
        },
        {
            id: "smoker-grill",
            title: "מנגל עישון משולב",
            description: "מערכת משולבת המאפשרת צלייה ועישון איטי, מושלמת לחובבי הבשר המעושן והברביקיו המקצועי.",
            image: "/images/img3.jpg",
            features: [
                "מערכת עישון מובנית",
                "בקרת טמפרטורה דיגיטלית",
                "מגירת עץ לעישון",
                "אפשרות לצלייה איטית לאורך שעות",
                "נפח גדול במיוחד",
            ],
        },
        {
            id: "built-in-grill",
            title: "גריל להתקנה במטבח חוץ",
            description: "גריל מקצועי המיועד להשתלב בצורה מושלמת במטבח החוץ שלכם, עם חזית נירוסטה איכותית וביצועים ללא פשרות.",
            image: "/images/img8.jpg",
            features: [
                "התקנה אינטגרלית במטבח החוץ",
                "חזית נירוסטה יוקרתית",
                "אפשרות שליטה מרחוק",
                "מערכת ניקוז שומנים מתקדמת",
                "אחריות מורחבת לחלקים",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                מנגלים ומערכות צלייה
                            </h1>
                            <nav className="flex" aria-label="Breadcrumb">
                                <ol className="flex items-center space-x-4 space-x-reverse">
                                    <li>
                                        <Link to="/Home" onClick={() => window.scrollTo(0, 0)}
                                            className="text-gray-500 hover:text-gray-700">
                                            דף הבית
                                        </Link>
                                    </li>
                                    <li className="text-gray-500">/</li>
                                    <li>
                                        <Link to="/Products" onClick={() => window.scrollTo(0, 0)}
                                            className="text-gray-500 hover:text-gray-700">
                                            מוצרים
                                        </Link>
                                    </li>
                                    <li className="text-gray-500">/</li>
                                    <li className="text-gray-900 font-medium">מנגלים ומערכות צלייה</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl overflow-hidden shadow-md">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full">
                                <img
                                    src="/images/img0.jpg"
                                    alt="מנגלים ומערכות צלייה"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4">פתרונות צלייה מקצועיים</h2>
                                <p className="text-gray-600 mb-6">
                                    אנו מציעים מגוון רחב של פתרונות צלייה, החל ממנגלים בסיסיים ועד למערכות גריל מקצועיות המשולבות במטבחי חוץ.
                                    המערכות שלנו מתוכננות לביצועים מקסימליים, עמידות לאורך שנים, ועיצוב מרהיב שמשתלב בכל סביבת חוץ.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">עיצוב מותאם אישית</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">חומרים עמידים לתנאי חוץ</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">תאורת LED משולבת</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">ביצועי צלייה מקצועיים</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">מאפיינים מיוחדים למערכות הצלייה שלנו</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {[
                            {
                                icon: Flame,
                                title: "שליטה בחום",
                                description: "מערכות בקרת חום מתקדמות המאפשרות שליטה מדויקת בטמפרטורה, חיונית לתוצאות צלייה מושלמות."
                            },
                            {
                                icon: ThermometerSun,
                                title: "עמידות גבוהה",
                                description: "חומרים שנבחרו במיוחד לעמידות בטמפרטורות גבוהות ובתנאי מזג אוויר משתנים, לאורך שנים."
                            },
                            {
                                icon: Utensils,
                                title: "ורסטיליות",
                                description: "אפשרויות צלייה מגוונות - גריל ישיר, עישון, צלייה עקיפה ואפילו אפיית לחם ופיצה בחלק מהדגמים."
                            },
                            {
                                icon: Settings,
                                title: "תחזוקה קלה",
                                description: "תכנון חכם המאפשר ניקוי וטיפול קלים, עם מערכות ניקוז שומנים אוטומטיות וחלקים נשלפים."
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
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">הדגמים שלנו</h2>

                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-xl shadow-md overflow-hidden mb-4 sm:mb-8`}
                        >
                            <div className="w-full md:w-2/5 h-64 sm:h-72 md:h-auto">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full md:w-3/5 p-4 sm:p-6 md:p-8">
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
            </div>
            {/* קריאה לפעולה */}
            <CtaMoreSection />
        </div>
    );
}