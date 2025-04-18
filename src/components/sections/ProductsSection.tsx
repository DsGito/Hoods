import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProductsSection = () => {
    const products = [
        {
            title: "מנדפים למסעדות",
            description: "מנדפים עוצמתיים ועמידים המתוכננים במיוחד עבור המטבח המסעדתי העמוס והאינטנסיבי למסעדות, בתי קפה ומפעלי מזון. עוצמה וביצועים ללא פשרות.",
            image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            path: "RestaurantHoods",
        },
        {
            title: "מנדפים לבתי קפה ומאפיות",
            description: "מנדפים מעוצבים ושקטים במיוחד, מותאמים לחללים הקטנים ולאופי השקט של בתי קפה ומאפיות.",
            image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            path: "CafeHoods",
        },
        {
            title: "מנדפי גריל",
            description: "מנדפים ייעודיים לשימוש עם גריל, טאבון או מנגל, עם יכולת התמודדות עם חום גבוה ועשן כבד.",
            image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            path: "GrillHoods",
        },
        {
            title: "קולטי אדים למטבח הביתי",
            description: "קולטי אדים יוקרתיים למטבח הביתי המשלבים עיצוב מודרני עם ביצועים מקצועיים.",
            image: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            path: "HomeHoods",
        },
        {
            title: "עבודות נירוסטה",
            description: "עבודות נירוסטה מותאמות אישית - מדפים, ארונות, כיורים, משטחי עבודה ועוד.",
            image: "https://images.unsplash.com/photo-1588644525273-f37b60d78512?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            path: "StainlessWorks",
        },


        {
            title: 'מטבחי חוץ יוקרתיים',
            description: 'עיצוב וביצוע מטבחי חוץ המשלבים עמידות לתנאי מזג האוויר עם אסתטיקה יוקרתית ופונקציונליות מלאה.',
            image: '/images/gallery4.jpg',
            path: "/",
        },
        {
            title: 'מנגלים ומערכות צלייה',
            description: 'מגוון פתרונות צלייה, החל ממנגלים בסיסיים ועד למערכות גריל מקצועיות משולבות במטבחי החוץ.',
            image: '/images/gallery5.jpg',
            path: "/",
        },
        {
            title: "תחזוקה ושירות",
            description:
                "אנו מציעים שירותי תחזוקה שוטפים לשמירה על תקינות המנדף לאורך זמן. השירותים כוללים ניקוי מסננים, בדיקת מנועים ועוד.",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            path: "/SrvMaintenance",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-4 text-white">המוצרים המובילים שלנו</h2>

                    <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
                        אנו מציעים פתרונות מטבח מקצועיים, מעוצבים בהתאמה אישית לצרכי הלקוח ובסטנדרטים הגבוהים ביותר, מבחר רחב של מנדפים תעשייתיים, קולטי אדים ביתיים ומערכות סינון מתקדמות.
                        כל מוצר מותאם אישית לצרכים הייחודיים של כל לקוח, לחומרי הגלם הדרושים ולעיצוב הנדרש. הנה כמה דוגמאות מהמגוון שלנו:
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-700 hover:border-blue-500">
                            <Link to={"/" + category.path}>
                                <div className="relative h-52">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-white">
                                        {category.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        {category.description}
                                    </p>
                                    <div className="flex justify-end">
                                        <span className="text-blue-400 hover:text-blue-100 font-medium inline-flex items-center">
                                            פרטים נוספים
                                            <ArrowLeft className="w-4 h-4 mr-2" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="/Products"
                        className="inline-flex items-center bg-white-400 text-white px-8 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition-colors group"
                    >
                        לצפייה בכל המוצרים
                        <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform ltr:rotate-180" />

                    </a>

                </motion.div>
            </div>
        </section>
    );
};

export default ProductsSection;
