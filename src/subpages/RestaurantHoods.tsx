import { Link } from "react-router-dom";
import { Check, FileText, Gauge, Shield } from "lucide-react";
import { motion } from 'framer-motion';
import CtaMoreSection from '../components/sections/CtaMoreSection';

export default function RestaurantHoods() {
    const products = [
        {
            id: "wall-hood",
            title: "מנדפי קיר למסעדות",
            description: "מנדפי קיר איכותיים לשאיבה יעילה של אדים, עשן וריחות. מתאימים במיוחד למטבחים מסעדתיים עם קיר במרחב בישול.",
            image: "https://images.unsplash.com/photo-1556908247-11fb492a5997?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "מבנה נירוסטה 304 בעובי 1.5 מ\"מ",
                "מסנני נירוסטה מובנים הניתנים לפירוק וניקוי",
                "אפשרות לתוספת מסנני פחם פעיל",
                "תאורת LED חסכונית משולבת",
                "מידות מותאמות אישית",
            ],
        },
        {
            id: "island-hood",
            title: "מנדפי אי למסעדות",
            description: "מנדפי אי דו-צדדיים למטבחים פתוחים ועמדות בישול מרכזיות. מאפשרים שליטה מושלמת בריחות ובאדים בחלל המטבח הפתוח.",
            image: "https://images.unsplash.com/photo-1567521464027-f6b0f038dbf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "מבנה דו-צדדי לשאיבה אופטימלית",
                "נירוסטה 304 בעובי 1.5 מ\"מ",
                "מסנני נירוסטה הניתנים לפירוק",
                "תאורת LED בשני הצדדים",
            ],
        },
        {
            id: "ceiling-hood",
            title: "מנדפי תקרה למסעדות",
            description: "מנדפים המותקנים בתקרה, מתאימים למטבחים מעוצבים ולחללים גדולים. מספקים פתרון אוורור יעיל תוך שמירה על מראה נקי ומינימליסטי.",
            image: "https://images.unsplash.com/photo-1594106345685-3483329621be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "עיצוב שטוח ומודרני",
                "התקנה סמויה בתקרה",
                "מנועים שקטים במיוחד",
                "כיסוי שטח רחב",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                מנדפים למסעדות - פתרונות מקצועיים לכל סוגי המטבחים
                            </h1>
                            <nav className="flex flex-wrap" aria-label="Breadcrumb">
                                <ol className="flex flex-wrap items-center space-x-2 space-x-reverse">
                                    <li>
                                        <Link to="/Home" onClick={() => window.scrollTo(0, 0)}
                                            className="text-gray-500 hover:text-gray-700 text-sm sm:text-base">
                                            דף הבית
                                        </Link>
                                    </li>
                                    <li className="text-gray-500">/</li>
                                    <li>
                                        <Link to="/Products" onClick={() => window.scrollTo(0, 0)}
                                            className="text-gray-500 hover:text-gray-700 text-sm sm:text-base">
                                            מוצרים
                                        </Link>
                                    </li>
                                    <li className="text-gray-500">/</li>
                                    <li className="text-gray-900 font-medium text-sm sm:text-base">מנדפים למסעדות</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl overflow-hidden shadow-md">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full">
                                <img
                                    src="/images/img8.jpg"
                                    alt="מנדפים למסעדות"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4">הפתרון הטוב ביותר למטבח המסעדה שלכם</h2>
                                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                                    חברת טי אנד מדפים מתמחה בייצור מדפים באיכות הגבוהה ביותר להעשיית המטבח המסעדתי ונותנת מענה מקיף לכל צרכי האוורור והסינון במטבח המקצועי. המנדפים שלנו מיוצרים לפי תקן מחומרי הגלם האיכותיים ביותר תוך מתן דגש על כל התקנים המחמירים היום בשוק.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                                        </div>
                                        <div className="mr-2 sm:mr-3">
                                            <p className="text-sm sm:text-base text-gray-600">עמידה בתקני בטיחות מחמירים</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                                        </div>
                                        <div className="mr-2 sm:mr-3">
                                            <p className="text-sm sm:text-base text-gray-600">חיסכון בעלויות אנרגיה</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                                        </div>
                                        <div className="mr-2 sm:mr-3">
                                            <p className="text-sm sm:text-base text-gray-600">רמת רעש נמוכה</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                                        </div>
                                        <div className="mr-2 sm:mr-3">
                                            <p className="text-sm sm:text-base text-gray-600">התאמה אישית למטבח שלכם</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Benefits */}
                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">יתרונות המנדפים שלנו למסעדות</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "עמידה בתקנים המחמירים",
                                description: "כל המנדפים שלנו עומדים בתקן 1001 חלק 6 ובכל דרישות הבטיחות והתברואה העדכניות."
                            },
                            {
                                icon: Gauge,
                                title: "יעילות מקסימלית",
                                description: "הנדסה מתקדמת המבטיחה שאיבה מקסימלית של אדים, ריחות ועשן תוך שימוש אופטימלי באנרגיה."
                            },
                            {
                                icon: FileText,
                                title: "תיעוד מקיף",
                                description: "כל מנדף מגיע עם תיק מוצר מפורט הכולל הוראות תחזוקה, תעודות אחריות ואישורים נדרשים."
                            },
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center hover:shadow-md transition-shadow p-4 sm:p-6 bg-white rounded-lg shadow-sm"
                            >
                                <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-blue-100 rounded-full mb-3 sm:mb-4">
                                    <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{benefit.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
                            </motion.div>
                        ))
                        }
                    </div>
                </section>

                {/* Products List */}
                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">סוגי מנדפים למסעדות</h2>

                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-xl shadow-md overflow-hidden mb-6 sm:mb-8`}
                        >
                            <div className="md:w-3/5 p-4 sm:p-6 md:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{product.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{product.description}</p>

                                <div className="mb-4 sm:mb-6">
                                    <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">מאפיינים עיקריים:</h4>
                                    <ul className="space-y-1 sm:space-y-2">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 ml-1 sm:ml-2 mt-0.5" />
                                                <span className="text-sm sm:text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* FAQ Section */}
                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">שאלות נפוצות</h2>
                    <div className="space-y-3 sm:space-y-4">
                        {[
                            {
                                question: "איזה גודל מנדף מתאים למסעדה שלי?",
                                answer: "גודל המנדף תלוי במספר גורמים כמו גודל מטבח, סוג וכמות הציוד הקולינרי (כיריים, גריל, טיגון וכו'), מספר הסועדים, ועוד. אנו ממליצים לתאם פגישת ייעוץ שבה נבצע מדידות מדויקות ונמליץ על הפתרון המתאים ביותר."
                            },
                            {
                                question: "האם המנדף עומד בדרישות כיבוי אש?",
                                answer: "כן, כל המנדפים שלנו מיוצרים בהתאם לתקן ישראלי 1001 חלק 6 ועומדים בכל דרישות כיבוי אש. אנו גם מספקים את כל האישורים הנדרשים לרשויות."
                            },
                            {
                                question: "כמה זמן אורכת התקנת מנדף במסעדה?",
                                answer: "זמן ההתקנה תלוי בגודל המנדף ובמורכבות ההתקנה. בממוצע, התקנת מנדף סטנדרטי אורכת 1-2 ימי עבודה. עבור מערכות מורכבות יותר או מנדפים מותאמים אישית, יתכן שיידרשו 3-5 ימי עבודה."
                            },
                            {
                                question: "מה כוללת תכנית תחזוקה למנדף מסעדה?",
                                answer: "תכנית תחזוקה כוללת ניקוי תקופתי של המסננים (אחת לשבועיים-חודש תלוי בעומס), ניקוי יסודי של כל המערכת (כל 3-6 חודשים), בדיקת מנועים ומפוחים, וטיפול בבעיות ככל שיתעוררו. אנו מציעים שירותי תחזוקה שוטפים המותאמים לכל לקוח."
                            },
                            {
                                question: "האם יש אחריות על המנדפים?",
                                answer: "כן, אנו מעניקים שנתיים אחריות כולל שירות. האחריות מכסה פגמים בייצור, תקלות במנועים ובחלקים אלקטרוניים, ובעיות במבנה המנדף. אפשרות להארכת האחריות בתשלום."
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white shadow-sm rounded-lg overflow-hidden"
                            >
                                <div className="p-4 sm:p-6">
                                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{faq.question}</h3>
                                    <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
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