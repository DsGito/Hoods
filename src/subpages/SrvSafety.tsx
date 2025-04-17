import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, FileText, Shield, FlameKindling, BookCheck, BadgeCheck } from "lucide-react";
import { motion } from 'framer-motion';

export default function SrvSafety() {
    const regulations = [
        {
            name: "תקן 1001 חלק 6",
            description: "תקן ישראלי מחייב לבטיחות אש בבתי אוכל, בדגש על מנדפים ומערכות אוורור.",
            requirements: [
                "עמידות המנדף והצנרת לאש",
                "מערכות כיבוי אוטומטיות",
                "עובי דפנות וחומרים של מערכת תעלות",
                "דרישות לניקוז שומנים",
                "תכיפות הבדיקות התקופתיות",
            ],
            icon: FlameKindling,
        },
        {
            name: "דרישות משרד הבריאות",
            description: "הנחיות תברואה למטבחים מסחריים, התייחסות למערכות סינון ואוורור.",
            requirements: [
                "סוגי מסננים ויעילותם",
                "ניקוי שמנים וריחות",
                "תדירות תחזוקה וניקוי",
                "מניעת מפגעים תברואתיים",
                "דרישות לאוורור מטבחים",
            ],
            icon: Shield,
        },
        {
            name: "תקנות רישוי עסקים",
            description: "דרישות עבור קבלת ושמירת רישיון עסק בכל הנוגע למערכות אוורור וסינון.",
            requirements: [
                "עמידה בתקני איכות הסביבה",
                "מניעת זיהום אוויר",
                "מניעת מטרדי ריח",
                "דרישות התקנה מקצועית",
                "תחזוקה תקופתית מתועדת",
            ],
            icon: BookCheck,
        },
    ];

    const certificationProcess = [
        {
            step: "בדיקה מקדימה",
            description: "בחינת המתקן והתשתית, איתור פערים אפשריים מול דרישות התקן ותכנון הפתרונות הנדרשים.",
        },
        {
            step: "שדרוג והתאמה",
            description: "ביצוע שינויים והתאמות נדרשות במערכת הקיימת, או התקנת מערכות חדשות העומדות בתקנים.",
        },
        {
            step: "בדיקות מקצועיות",
            description: "ביצוע בדיקות מקיפות למערכת כולל בדיקת עמידות לחום, יעילות סינון, תקינות מערכות כיבוי אש ועוד.",
        },
        {
            step: "תיעוד מקיף",
            description: "הכנת תיק מתקן מפורט הכולל שרטוטים, מפרטים טכניים, אישורי התקנה ופרוטוקולי בדיקה.",
        },
        {
            step: "הגשה לרשויות",
            description: "הגשת המסמכים לרשויות הרלוונטיות וליווי בתהליך קבלת האישורים עד לסיומו המוצלח.",
        },
        {
            step: "ליווי בביקורת",
            description: "ליווי מקצועי בעת ביקורת מטעם הרשויות, מתן מענה לשאלות ונושאים שעולים במהלך הביקורת.",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                אישורי בטיחות ותקנים
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
                                    <li className="text-gray-900 font-medium">אישורי בטיחות ותקנים</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <Link to="/Contact?service=safety">
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    לייעוץ בנושא תקנים
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl overflow-hidden shadow-md">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                    alt="אישורי בטיחות ותקנים"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8">
                                <h2 className="text-2xl font-bold mb-4">ליווי וסיוע בקבלת אישורים רגולטוריים</h2>
                                <p className="text-gray-600 mb-6">
                                    אנו מסייעים בקבלת כל האישורים הנדרשים מהרשויות, כולל אישורי כיבוי אש, אישורי תברואה ואישורים נוספים הנדרשים לפעילות תקינה של העסק. המנדפים שלנו עומדים בכל התקנים המחמירים כולל תקן 1001 חלק 6.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">עמידה בתקן 1001 חלק 6</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">אישורי כיבוי אש</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">אישורי משרד הבריאות</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">ליווי בביקורות רשויות</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link to="/Contact?service=safety">
                                        <Button className="bg-blue-600 hover:bg-blue-700">
                                            לייעוץ בנושא אישורים
                                        </Button>
                                    </Link>
                                    <Button variant="outline">
                                        מידע על התקנים
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Importance of Standards */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">החשיבות של עמידה בתקנים</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "מניעת שריפות",
                                description: "מנדפים העומדים בתקנים מפחיתים משמעותית את סיכוני השריפה במטבחים מסחריים, המהווים אחד ממוקדי השריפות העיקריים בעסקים.",
                                icon: FlameKindling,
                                color: "text-red-600",
                                bgColor: "bg-red-100",
                            },
                            {
                                title: "חוקיות ורישוי",
                                description: "רק מנדפים העומדים בתקנים המחמירים יאפשרו לכם לקבל ולשמור על רישיון עסק ולעמוד בדרישות החוק.",
                                icon: FileText,
                                color: "text-blue-600",
                                bgColor: "bg-blue-100",
                            },
                            {
                                title: "בריאות ובטיחות",
                                description: "מערכות אוורור וסינון תקניות מבטיחות סביבת עבודה בריאה ובטוחה לעובדים ולקוחות, ומונעות חשיפה לזיהום אוויר.",
                                icon: Shield,
                                color: "text-green-600",
                                bgColor: "bg-green-100",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center hover:shadow-md transition-shadow"
                            >
                                <div className={`inline-flex items-center justify-center p-3 ${item.bgColor} rounded-full mb-4`}>
                                    <item.icon className={`h-6 w-6 ${item.color}`} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Key Regulations */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">התקנים והרגולציות העיקריים</h2>

                    <div className="space-y-8">
                        {regulations.map((regulation, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="overflow-hidden shadow-md"
                            >
                                <div className="md:flex">
                                    <div className="md:w-1/3 bg-blue-50 p-8 flex flex-col items-center justify-center">
                                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                                            <regulation.icon className="h-12 w-12 text-blue-700" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-center">{regulation.name}</h3>
                                    </div>
                                    <div className="md:w-2/3 p-8">
                                        <p className="text-gray-700 mb-4 text-lg">
                                            {regulation.description}
                                        </p>
                                        <h4 className="font-semibold mb-3">דרישות עיקריות:</h4>
                                        <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {regulation.requirements.map((req, i) => (
                                                <li key={i} className="flex items-start">
                                                    <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Certification Process */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">תהליך קבלת האישורים</h2>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 z-0 hidden md:block"></div>

                        <div className="space-y-8 relative z-10">
                            {certificationProcess.map((step, index) => (
                                <div key={index} className="relative">
                                    <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        <div className="md:w-5/12"></div>

                                        {/* Circle on the line */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold hidden md:flex">
                                            {index + 1}
                                        </div>

                                        <div className="md:w-5/12">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className={`shadow-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                                            >
                                                <div className="p-6">
                                                    <div className="flex items-center mb-2">
                                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold md:hidden ml-2">
                                                            {index + 1}
                                                        </div>
                                                        <h3 className="text-xl font-bold">{step.step}</h3>
                                                    </div>
                                                    <p className="text-gray-600">{step.description}</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Services */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">השירותים שאנו מציעים</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "בדיקת התאמה לתקנים",
                                description: "בדיקה מקיפה של מערכת המנדפים הקיימת או המתוכננת והתאמתה לדרישות התקן.",
                                features: [
                                    "בדיקת עמידות לאש של המערכת",
                                    "בדיקת עובי ואיכות החומרים",
                                    "בדיקת מסננים והתאמתם לדרישות",
                                    "בדיקת תשתיות הבטיחות",
                                    "איתור פערים מול דרישות התקן",
                                ],
                                icon: Shield,
                                image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "תיעוד ותיק מתקן",
                                description: "הכנת כל המסמכים הנדרשים לצורך קבלת אישורים מהרשויות ובניית תיק מתקן מקיף.",
                                features: [
                                    "הכנת שרטוטים טכניים",
                                    "איסוף אישורי עמידה בתקן",
                                    "תיעוד מפרטים וחומרים",
                                    "תיעוד בדיקות שבוצעו",
                                    "הכנת נהלי בטיחות ותחזוקה",
                                ],
                                icon: FileText,
                                image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "ליווי בביקורות",
                                description: "ליווי מקצועי בעת ביקורות של רשויות כגון כיבוי אש, משרד הבריאות ואיכות הסביבה.",
                                features: [
                                    "הכנה לקראת הביקורת",
                                    "נוכחות בזמן הביקורת",
                                    "מתן מענה לדרישות הבוחנים",
                                    "טיפול בהערות וליקויים",
                                    "מעקב עד לקבלת האישור הסופי",
                                ],
                                icon: BadgeCheck,
                                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "שדרוג מערכות קיימות",
                                description: "שדרוג מנדפים קיימים והתאמתם לתקנים העדכניים, תוך מינימום הפרעה לפעילות העסק.",
                                features: [
                                    "החלפת רכיבים לא תקניים",
                                    "התקנת מערכות כיבוי חדשות",
                                    "שדרוג מערכות סינון",
                                    "הוספת אמצעי בטיחות",
                                    "שיפור ביצועים ובטיחות",
                                ],
                                icon: BookCheck,
                                image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="overflow-hidden shadow-md"
                            >
                                <div className="relative pb-[40%]">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-blue-100 p-2 rounded-full ml-3">
                                            <service.icon className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-xl font-bold">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">{service.description}</p>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <ul className="space-y-2">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-4">
                                        <Link to="/Contact?service=safety&type=${encodeURIComponent(service.title)}">
                                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                                לפרטים נוספים
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">שאלות נפוצות</h2>

                    <div className="space-y-4">
                        {[
                            {
                                question: "כמה זמן לוקח תהליך קבלת האישורים?",
                                answer: "משך הזמן משתנה בהתאם למצב המערכת הקיימת, גודל העסק והרשויות הרלוונטיות. באופן כללי, התהליך יכול לקחת בין שבועיים לחודשיים. אם נדרשים שינויים משמעותיים, התהליך עשוי להתארך. אנו מלווים את התהליך מתחילתו ועד סופו ופועלים לזרז ככל האפשר."
                            },
                            {
                                question: "האם אתם מטפלים גם בחידוש אישורים?",
                                answer: "כן, אנו מספקים שירות מלא לחידוש אישורים תקופתיים. אנו מתריעים ללקוחותינו מבעוד מועד לפני פקיעת האישורים, מבצעים את הבדיקות הנדרשות ומגישים את כל המסמכים הנדרשים לחידוש."
                            },
                            {
                                question: "האם המנדפים שלנו צריכים להיות מוחלפים כדי לעמוד בתקנים?",
                                answer: "לא בהכרח. במקרים רבים, ניתן לשדרג מערכות קיימות כדי להתאימן לדרישות העדכניות. אנו מבצעים בדיקה מקיפה של המערכת הקיימת ומציעים את הפתרון המתאים והחסכוני ביותר - אם זה שדרוג או החלפה."
                            },
                            {
                                question: "מה הסיכון בהפעלת מנדף ללא האישורים הנדרשים?",
                                answer: "הפעלת מנדף ללא האישורים הנדרשים עלולה לגרור סנקציות חמורות, כולל קנסות, סגירת העסק, ביטול פוליסות ביטוח במקרה של נזק, והטלת אחריות אישית במקרה של פגיעה או נזק. מעבר לכך, יש כמובן את הסיכון הבטיחותי האמיתי לשריפות ובעיות תברואה."
                            },
                            {
                                question: "האם אתם עובדים גם עם עסקים קטנים?",
                                answer: "בהחלט. אנו מספקים פתרונות מותאמים לעסקים בכל גודל - ממסעדות קטנות ועד למטבחים תעשייתיים גדולים. אנו מבינים את האתגרים הייחודיים של עסקים קטנים ומציעים פתרונות יעילים ומשתלמים."
                            },
                            {
                                question: "האם יש אחריות על האישורים?",
                                answer: "כן, אנו עומדים מאחורי העבודה שלנו ומספקים אחריות על כל האישורים שאנו מסייעים בהשגתם. במקרה של בעיה או דרישה נוספת מהרשויות, אנו מטפלים בכך ללא עלות נוספת במסגרת האחריות."
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white shadow-sm"
                            >
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            צריכים עזרה בקבלת אישורים?
                        </h2>
                        <p className="text-lg mb-6 max-w-3xl mx-auto">
                            צרו קשר עכשיו וקבלו ייעוץ מקצועי, ללא התחייבות, בנושא התקנים והאישורים הנדרשים לעסק שלכם.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/Contact?service=safety">
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