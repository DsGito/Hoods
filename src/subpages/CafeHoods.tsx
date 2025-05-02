
import { Link } from "react-router-dom";
import { Check, Coffee, PieChart, VolumeX, Ruler } from "lucide-react";
import { motion } from 'framer-motion';
import CtaMoreSection from '../components/sections/CtaMoreSection';


const products = [
    {
        id: "cafe-standard",
        title: "מנדף קומפקטי לבתי קפה",
        description: "מנדף קומפ בגודל מותאם במיוחד לבתי קפה קטנים עד בינוניים עם רמת עשן ואדים סטנדרטית.",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        features: [
            "גדלים מותאמים למטבחי בתי קפה קטנים",
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

const features = [
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
    }
];

// Hero section variants for animation
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};


export default function CafeHoods() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                מנדפים לבתי קפה
                            </h1>
                            <nav className="flex" aria-label="Breadcrumb">
                                <ol className="flex items-center space-x-4 space-x-reverse">
                                    <li>
                                        <Link to="/Home"
                                            onClick={() => window.scrollTo(0, 0)}
                                            className="text-gray-500 hover:text-gray-700">
                                            דף הבית
                                        </Link>
                                    </li>
                                    <li className="text-gray-500">/</li>
                                    <li>
                                        <Link to="/Products"
                                            onClick={() => window.scrollTo(0, 0)}
                                            className="text-gray-500 hover:text-gray-700">
                                            מוצרים
                                        </Link>
                                    </li>
                                    <li className="text-gray-500">/</li>
                                    <li className="text-gray-900 font-medium">מנדפים לבתי קפה</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                                    {/* Value Proposition Section */}
                <motion.section
                    className="mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerChildren}
                >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto">
                                <img
                                    src="/images/img29.jpg"
                                    alt="מנדפים לבתי קפה"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-8 md:p-12">
                                <h2 className="text-3xl font-bold mb-6 text-gray-800">מנדפים מעוצבים ושקטים לבתי קפה</h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    הפתרונות שלנו לבתי קפה ומאפיות מציעים שילוב מושלם של עיצוב אסתטי, פעולה שקטה ויעילות סינון מקסימלית.
                                    המנדפים מותאמים במיוחד לצרכים הייחודיים של בתי קפה, המשלבים מטבח קטן יחסית עם חלל אירוח רגיש לרעשים וריחות.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {["עיצוב אסתטי", "פעולה שקטה במיוחד", "מידות מותאמות לחללים קטנים", "סינון אדים וריחות יעיל"].map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="flex items-start"
                                            variants={fadeIn}
                                        >
                                            <div className="flex-shrink-0 p-1 bg-blue-100 rounded-full">
                                                <Check className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <div className="mr-3">
                                                <p className="text-gray-700 font-medium">{feature}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">


                {/* Key Features Section */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">מאפיינים מיוחדים למנדפים לבתי קפה</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">המנדפים שלנו מיוצרים בהתאמה לדרישות הייחודיות של בתי קפה ומאפיות, עם דגש על עיצוב, שקט ויעילות</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="p-6 flex flex-col items-center text-center">
                                    <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                                        <feature.icon className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Products Section */}
                <section id="product-catalog" className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">הדגמים המובילים שלנו</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            כל הפתרונות שלנו מותאמים לדרישות מחמירות של בתי קפה ומאפיות, עם דגש על איכות, עיצוב ויעילות
                        </p>
                    </div>

                    <div className="space-y-12">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-2xl shadow-lg overflow-hidden`}
                            >
                                <div className="w-full md:w-1/5 relative">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="w-full md:w-4/5 p-6 md:p-10">
                                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{product.title}</h3>
                                    <p className="text-gray-600 text-lg mb-6">{product.description}</p>

                                    <div className="mb-8">
                                        <h4 className="font-semibold mb-4 text-gray-700">מאפיינים עיקריים:</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {product.features.map((feature, i) => (
                                                <div key={i} className="flex items-start">
                                                    <div className="flex-shrink-0 p-1 bg-green-100 rounded-full">
                                                        <Check className="h-5 w-5 text-green-600" />
                                                    </div>
                                                    <span className="mr-3 text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            {/* CTA Section */}
            <CtaMoreSection />
        </div>
    );
}