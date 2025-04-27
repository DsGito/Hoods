import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';

const ProductsSection = () => {
    const products = [
        {
            title: "מנדפים למסעדות",
            description: "מנדפים עוצמתיים ועמידים המתוכננים במיוחד עבור המטבח המסעדתי העמוס והאינטנסיבי למסעדות, בתי קפה ומפעלי מזון. עוצמה וביצועים ללא פשרות.",
            image: '/images/img2.jpg',
            features: ["עמידות בעומסים גבוהים", "עמידה בתקנים מחמירים", "יעילות שאיבה גבוהה", 'התאמה לכל סוגי המטבחים'],

            path: "RestaurantHoods",
        },
        {
            title: "מנדפים לבתי קפה ומאפיות",
            description: "מנדפים מעוצבים ושקטים במיוחד, מותאמים לחללים הקטנים ולאופי השקט של בתי קפה ומאפיות.",
            image: '/images/img7.jpg',
            features: ["עיצוב אסתטי", "פעולה שקטה", "התאמה לחללים קטנים"],

            path: "CafeHoods",
        },
        {
            title: "מנדפי גריל",
            description: "מנדפים ייעודיים לשימוש עם גריל, טאבון או מנגל, עם יכולת התמודדות עם חום גבוה ועשן כבד.",
            image: '/images/img3.jpg',
            features: ["טיפול בעשן כבד", "מסנני שומן מתקדמים", "עמידות בטמפרטורות גבוהות"],

            path: "GrillHoods",
        },
        {
            title: "קולטי אדים למטבח הביתי",
            description: "קולטי אדים יוקרתיים למטבח הביתי המשלבים עיצוב מודרני עם ביצועים מקצועיים.",
            image: '/images/img1.jpg',
            features: ["עיצוב מודרני", "פעולה שקטה", "תאורת LED משולבת"],

            path: "HomeHoods",
        },
        {
            title: "עבודות נירוסטה",
            description: "עבודות נירוסטה מותאמות אישית - מדפים, ארונות, כיורים, משטחי עבודה ועוד.",
            image: '/images/img6.jpg',
            features: ["סינון יעיל של חלקיקים", "הפחתת ריחות", "חיסכון באנרגיה"],

            path: "StainlessWorks",
        },
        {
            title: "מערכות סינון עשן",
            description:
                "מערכות הסינון המתקדמות שלנו מציעות פתרון כולל להפחתת עשן, ריחות, ואדי שמן במטבחים מסחריים וביתיים. הטכנולוגיות החדשניות מאפשרות לכם לעמוד בכל התקנים והרגולציות, לשמור על סביבת עבודה בריאה, ולהפחית מטרדים לסביבה..",
            image: '/images/img5.jpg',
            features: ["סינון יעיל של חלקיקים", "הפחתת ריחות", "חיסכון באנרגיה"],

            path: "SmokeFilters",
        },
        {
            title: 'מטבחי חוץ יוקרתיים',
            description: 'עיצוב וביצוע מטבחי חוץ המשלבים עמידות לתנאי מזג האוויר עם אסתטיקה יוקרתית ופונקציונליות מלאה.',
            image: '/images/img4.jpg',
            features: ['עיצוב מותאם אישית', 'חומרים איכותיים', 'חומרים עמידים לתנאי חוץ', 'אזורי עבודה מרווחים'],
            path: "/",
        },
        {
            title: 'מנגלים ומערכות צלייה',
            description: 'מגוון פתרונות צלייה, החל ממנגלים בסיסיים ועד למערכות גריל מקצועיות משולבות במטבחי החוץ.',
            image: '/images/img0.jpg',
            features: ["עיצוב מודרני", "תאורת LED משולבת", 'עיצוב מותאם אישית', 'חומרים עמידים לתנאי חוץ'],

            path: "/",
        },
    ];

    // Featured products - show only first 3 on home page
    const featuredProducts = products.slice(0, 8);

    return (
        <section className="py-6 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >

                    <div className="flex justify-center">
                        <div className="relative">
                            <h2 className="text-4xl font-bold text-center mb-4 text-white">המוצרים המובילים שלנו</h2>
                            <div className="h-1 w-32 bg-[#d6b16c] mx-auto rounded-full"></div>
                        </div>
                    </div>


                    <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-6">
                        אנו מציעים פתרונות מטבח מקצועיים, מעוצבים בהתאמה אישית לצרכי הלקוח ובסטנדרטים הגבוהים ביותר, מבחר רחב של מנדפים תעשייתיים, קולטי אדים ביתיים ומערכות סינון מתקדמות.
                        כל מוצר מותאם אישית לצרכים הייחודיים של כל לקוח, לחומרי הגלם הדרושים ולעיצוב הנדרש.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {featuredProducts.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-700 hover:border-[#d6b16c]"
                        >
                            <Link to={"/" + category.path}>
                                <div className="relative h-52">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-3 text-white">
                                        {category.title}
                                    </h3>
                                    <p className="text-gray-300 mb-6">
                                        {category.description}
                                    </p>

                                    {/*
                                        <div className="flex justify-end">
                                            <span className="text-[#d6b16c] hover:text-blue-100 font-medium inline-flex items-center">
                                                פרטים נוספים
                                                <ArrowLeft className="w-4 h-4 mr-2" />
                                            </span>
                                        </div>
                                    */}
                                    <div className="mb-2">
                                        <h3 className="font-semibold text-gray-800 mb-3">מאפיינים עיקריים:</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {category.features.map((feature, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary text-[#d6b16c]"
                                                >
                                                    <Tag className="w-3 h-3 ml-1" />
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/*
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 text-center"
                >
                    <Link
                        to="/Products"
                        className="inline-flex items-center bg-white-400 text-white px-8 py-3 border border-white rounded-lg font-medium hover:bg-[#d6b16c] hover:text-black transition-colors group"
                    >
                        לצפייה בכל המוצרים
                        <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform ltr:rotate-180" />

                    </Link>

                </motion.div>
                 */}

            </div>
        </section>
    );
};

export default ProductsSection;
