import { Link } from "react-router-dom";
import { Check, Shield, Sun, Droplets, BookOpen } from "lucide-react";
import { motion } from 'framer-motion';
import CtaMoreSection from '../components/sections/CtaMoreSection';

export default function OutdoorKitchens() {
    const products = [
        {
            id: "premium-outdoor-kitchen",
            title: "מטבח חוץ פרימיום",
            description: "מטבח חוץ יוקרתי המשלב חומרים איכותיים מנירוסטה וגרניט עם עיצוב מותאם אישית לחצר או למרפסת הבית.",
            image: "/images/img4.jpg",
            features: [
                "נירוסטה 316 מיוחדת לתנאי חוץ",
                "משטחי עבודה מגרניט או קוורץ עמידים",
                "אפשרות לשילוב כיור, ברז וכירת גז",
                "ארונות אחסון מובנים עמידים למים",
                "תאורת LED משולבת",
            ],
        },
        {
            id: "island-outdoor-kitchen",
            title: "מטבח חוץ אי",
            description: "פתרון אי מושלם למרכז איזור האירוח בחצר, המאפשר לבשל ולארח בו-זמנית עם גישה מכל הכיוונים.",
            image: "/images/img16.jpg",
            features: [
                "עיצוב מעגלי או מלבני לבחירה",
                "מערכת גז מובנית",
                "משטח עבודה רחב",
                "אפשרות להתקנת מקרר חוץ",
                "אופציה לגג חלקי מעל האי",
            ],
        },
        {
            id: "custom-outdoor-kitchen",
            title: "מטבח חוץ מותאם אישית",
            description: "עיצוב וביצוע מטבח חוץ ייחודי בהתאמה מלאה לצרכים, לחלל ולטעם האישי שלכם, כולל ייעוץ מקצועי.",
            image: "/images/img29.jpg",
            features: [
                "תכנון אדריכלי מלא של החלל",
                "שילוב כל האלמנטים הנדרשים",
                "התאמת חומרים לפי בחירה",
                "מערכות חשמל ותאורה מתוכננות",
                "אפשרות לשילוב מערכות טאבון, פיצה או מנגל ייחודי",
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
                                מטבחי חוץ
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
                                    <li className="text-gray-900 font-medium">מטבחי חוץ</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl overflow-hidden shadow-md">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full">
                                <img
                                    src="/images/img4.jpg"
                                    alt="מטבחי חוץ"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4">מטבחי חוץ מעוצבים ואיכותיים</h2>
                                <p className="text-gray-600 mb-6">
                                    מטבחי החוץ היוקרתיים שלנו מתוכננים בקפידה כדי לשלב עמידות מקסימלית בתנאי מזג אוויר עם אסתטיקה יוקרתית ופונקציונליות מלאה.
                                    כל מטבח מותאם אישית לצרכי הלקוח, לסגנון הבית ולתנאי החוץ הספציפיים, עם דגש על חומרים איכותיים ועיצוב מדויק.
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
                                            <p className="text-gray-600">אפשרויות שילוב מגוונות</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">תחזוקה קלה לאורך שנים</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">מאפיינים מיוחדים של מטבחי החוץ שלנו</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {[
                            {
                                icon: Sun,
                                title: "עמידות מוכחת",
                                description: "חומרים מובחרים העמידים לשמש ישירה, גשם, לחות, ושינויי טמפרטורה קיצוניים לאורך שנים."
                            },
                            {
                                icon: BookOpen,
                                title: "תכנון מקצועי",
                                description: "ליווי אדריכלי מלא לתכנון המטבח באופן שישתלב בצורה מושלמת בחלל החיצוני שלכם."
                            },
                            {
                                icon: Shield,
                                title: "חומרים איכותיים",
                                description: "שימוש בנירוסטה מיוחדת לתנאי חוץ, אבן טבעית עמידה, וחומרים שנבחרו במיוחד עבור שימוש חיצוני."
                            },
                            {
                                icon: Droplets,
                                title: "עמידות למים",
                                description: "כל המרכיבים החשמליים והמכניים מוגנים בפני מים וסופות, עם אטימה מיוחדת לארונות ומגירות."
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
            </div>
            {/* קריאה לפעולה */}
            <CtaMoreSection />
        </div>
    );
}