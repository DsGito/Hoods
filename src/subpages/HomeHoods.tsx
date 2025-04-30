import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Lightbulb, Ruler, ShieldCheck, Volume2 } from "lucide-react";
import { motion } from 'framer-motion';
import CtaMoreSection from '../components/sections/CtaMoreSection';

export default function HomeHoods() {
    const products = [
        {
            id: "wall-hood",
            title: "קולטי אדים קיריים",
            description: "קולטי אדים מעוצבים להתקנה על הקיר, מספקים פתרון יעיל וחסכוני למטבחים ביתיים.",
            image: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "עיצוב מודרני ואלגנטי",
                "עוצמת שאיבה של עד 1,000 מ\"ק לשעה",
                "רמת רעש נמוכה (עד 55dB)",
                "תאורת LED חסכונית ועוצמתית",
                "פאנל שליטה דיגיטלי",
            ],
            price: "החל מ-1,500 ₪",
        },
        {
            id: "island-hood",
            title: "קולטי אדים לאי",
            description: "פתרון מושלם למטבחים עם אי מרכזי, שילוב של עוצמה ועיצוב יוקרתי שתלוי מהתקרה.",
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "עיצוב דו-צדדי תלוי",
                "שאיבה חזקה (עד 1,200 מ\"ק לשעה)",
                "שליטה בכל צד בנפרד",
                "תאורת LED היקפית",
                "עיצובים ייחודיים לבחירה",
            ],
            price: "החל מ-2,500 ₪",
        },
        {
            id: "built-in-hood",
            title: "קולטי אדים נסתרים",
            description: "קולטי אדים המשתלבים בארונות המטבח העליונים, לאלו המעדיפים מראה נקי ומינימליסטי.",
            image: "https://images.unsplash.com/photo-1631048500251-9857be19c9ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "שילוב מושלם במטבח",
                "מנגנון שליפה נוח",
                "מסנני אלומיניום או נירוסטה",
                "אפשרות לשליטה מרחוק",
                "התקנה קלה ופשוטה",
            ],
            price: "החל מ-1,200 ₪",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                קולטי אדים איכותיים לבית שלכם
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
                                    <li className="text-gray-900 font-medium">קולטי אדים ביתיים</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <Link to="/Contact">
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
                                    src="/images/img6.jpg"
                                    alt="קולטי אדים ביתיים"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8">
                                <h2 className="text-2xl font-bold mb-4">עיצוב, איכות ושקט במטבח שלכם</h2>
                                <p className="text-gray-600 mb-6">
                                    אנו נעצב עבורכם את הקולט שתמיד ראיתם תוך מתן דגש על איכות ללא פשרות. הקולטי אדים שלנו מסופקים עם צנרת פליטה אל מחוץ לבית וככה אתם נהנים מקולט אדים שקט ויעיל ללא צורך בתחזוקה מורכבת.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">עיצוב מודרני ואלגנטי</p>
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
                                            <p className="text-gray-600">יעילות שאיבה גבוהה</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">חסכוני בחשמל</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link to="/Contact">
                                        <Button className="bg-blue-600 hover:bg-blue-700">
                                            לקבלת הצעת מחיר
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">יתרונות קולטי האדים שלנו</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Volume2,
                                title: "פעולה שקטה",
                                description: "טכנולוגיית מנועים מתקדמת המבטיחה רמת רעש נמוכה במיוחד (45-55dB), לחווית בישול רגועה."
                            },
                            {
                                icon: ShieldCheck,
                                title: "איכות ללא פשרות",
                                description: "חומרים איכותיים כמו נירוסטה 304 ואלומיניום מוקשה, המבטיחים עמידות לאורך שנים."
                            },
                            {
                                icon: Ruler,
                                title: "התאמה אישית",
                                description: "אפשרות להתאמת מידות, צבעים וגימורים לפי דרישת הלקוח ועיצוב המטבח."
                            },
                            {
                                icon: Lightbulb,
                                title: "תאורת LED משולבת",
                                description: "תאורה חזקה וחסכונית המאירה את משטח העבודה בצורה אופטימלית."
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

                {/*  Product Catalog */}
                <section id="product-catalog" className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">דגמים מובילים</h2>

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
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                                        <p className="text-blue-600 font-medium mb-3">{product.price}</p>
                                    </div>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                                        פופולרי
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-6">{product.description}</p>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-3">מאפיינים עיקריים:</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-4">
                                    <Link to="/Contact">
                                        <Button className="bg-blue-600 hover:bg-blue-700">
                                            לקבלת הצעת מחיר
                                        </Button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Design Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">עיצוב מותאם אישית</h2>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-2/5">
                                <img
                                    src="https://images.unsplash.com/photo-1607894396565-98e51c39f114?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                    alt="עיצוב מותאם אישית"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-3/5 p-8">
                                <h3 className="text-2xl font-bold mb-4">התאמה מושלמת למטבח שלכם</h3>
                                <p className="text-gray-600 mb-6">
                                    אנו מציעים שירות עיצוב והתאמה אישית לכל קולט אדים. הצוות המקצועי שלנו יעבוד איתכם כדי ליצור קולט אדים שישתלב
                                    באופן מושלם במטבח שלכם, תוך התחשבות בסגנון העיצובי, בצבעים ובחומרים של המטבח.
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                                        <p className="font-medium">נירוסטה מוברשת</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                                        <p className="font-medium">זכוכית שחורה</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                                        <p className="font-medium">זכוכית לבנה</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                                        <p className="font-medium">צבע לפי בחירה</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                                        <p className="font-medium">עץ מלא</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                                        <p className="font-medium">צורות מיוחדות</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6">
                                    בנוסף, אנו מציעים מגוון רחב של אביזרים ותוספות כמו תאורה בהתאמה אישית, שלט רחוק,
                                    חיישני טמפרטורה ולחות, ואפילו אפשרות לשליטה דרך אפליקציה.
                                </p>

                                <Link to="/Contact">
                                    <Button className="bg-blue-600 hover:bg-blue-700">
                                        ייעוץ עיצובי חינם
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Installation & Maintenance */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">התקנה ותחזוקה</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            key="installation"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="shadow-md"
                        >
                            <div className="p-0">
                                <div className="relative pb-[60%]">
                                    <img
                                        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                        alt="התקנה מקצועית"
                                        className="absolute w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">התקנה מקצועית</h3>
                                    <p className="text-gray-600 mb-4">
                                        ההתקנה מבוצעת על ידי צוות מקצועי ומנוסה, המבטיח תוצאה מושלמת וללא תקלות.
                                        צוות ההתקנה שלנו מקפיד על עבודה נקייה ומסודרת, תוך שמירה על בטיחות והימנעות מנזקים.
                                    </p>
                                    <h4 className="font-semibold mb-2">מה כוללת ההתקנה?</h4>
                                    <ul className="space-y-1 mb-4">
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>התקנת הקולט במיקום המיועד</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>חיבור לחשמל</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>התקנת צנרת פליטה</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>בדיקת תקינות ותפקוד</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>


                        <motion.div
                            key="maintenance"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="shadow-md"
                        >
                            <div className="p-0">
                                <div className="relative pb-[60%]">
                                    <img
                                        src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                        alt="תחזוקה שוטפת"
                                        className="absolute w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">תחזוקה שוטפת</h3>
                                    <p className="text-gray-600 mb-4">
                                        תחזוקה נכונה מאריכה את חיי קולט האדים ומבטיחה ביצועים מיטביים לאורך זמן.
                                        אנו מספקים הדרכה מקיפה על תחזוקה שוטפת ומציעים שירותי תחזוקה מקצועיים.
                                    </p>
                                    <h4 className="font-semibold mb-2">המלצות לתחזוקה:</h4>
                                    <ul className="space-y-1 mb-4">
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>ניקוי מסננים אחת לחודש</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>החלפת פילטרי פחם (אם יש) כל 3-6 חודשים</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>ניקוי חיצוני של הקולט בחומרים מתאימים</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>בדיקת תקינות שנתית על ידי טכנאי</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </motion.div>

                    </div>
                </section>

            </div>
                  {/* קריאה לפעולה */}
      <CtaMoreSection />
        </div>
    );
}