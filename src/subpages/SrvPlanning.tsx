import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, FileText, Lightbulb, Ruler, SquarePen } from "lucide-react";
import { motion } from 'framer-motion';

export default function SrvPlanning() {
    const planningSteps = [
        {
            icon: Ruler,
            title: "סקירה ומדידות",
            description: "הצוות המקצועי שלנו מגיע לאתר לסקירה מקיפה ומדידות מדויקות של החלל.",
            details: [
                "מדידות מדויקות של המטבח",
                "בחינת מערכת החשמל והתשתיות",
                "בדיקת מיקום אופטימלי למנדף",
                "ניתוח הצרכים הספציפיים של הלקוח",
            ]
        },
        {
            icon: Lightbulb,
            title: "ייעוץ והמלצות",
            description: "מתן ייעוץ מקצועי לגבי סוג המנדף המתאים, עוצמת השאיבה הנדרשת ומיקום אידיאלי.",
            details: [
                "בחירת סוג מנדף אופטימלי",
                "חישוב עוצמת השאיבה הנדרשת",
                "המלצה על מערכת סינון מתאימה",
                "התאמה לתקנים ולדרישות רגולטוריות",
            ]
        },
        {
            icon: SquarePen,
            title: "תכנון מפורט",
            description: "הכנת תכנית מפורטת הכוללת מידות, מפרט טכני, תוואי צנרת ודרישות התקנה.",
            details: [
                "שרטוט מפורט של המנדף והמיקום",
                "תכנון מערכת הצנרת והמפוחים",
                "תכנון חיבורי חשמל ותשתיות",
                "בחירת חומרים מתאימים לצרכי הלקוח",
            ]
        },
        {
            icon: FileText,
            title: "הצעת מחיר מפורטת",
            description: "הכנת הצעת מחיר מפורטת הכוללת את כל מרכיבי המערכת, כולל התקנה ואחריות.",
            details: [
                "פירוט מלא של המנדף וכל הרכיבים",
                "לוח זמנים מדויק להתקנה",
                "תנאי תשלום ותנאי אחריות",
                "אפשרויות שדרוג ותוספות",
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                תכנון והתאמה אישית
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
                                    <li className="text-gray-900 font-medium">תכנון והתאמה אישית</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <Link to="/Contact?service=planning">
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    לתיאום פגישת תכנון
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl overflow-hidden shadow-md">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                    alt="תכנון והתאמה אישית"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8">
                                <h2 className="text-2xl font-bold mb-4">תכנון מקצועי ומותאם אישית</h2>
                                <p className="text-gray-600 mb-6">
                                    אנו מציעים שירותי תכנון והתאמה אישית לכל לקוח. צוות המומחים שלנו יגיע למקום,
                                    יבצע מדידות, ייעץ לגבי הפתרון המתאים ביותר, ויתכנן מנדף המותאם במדויק לצרכים שלכם.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">מדידות מדויקות במקום</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">ייעוץ מקצועי לגבי הפתרון המתאים</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">התאמה לתקנים וחוקי בנייה</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">תכנון מערכת צנרת ומפוחים</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link to="/Contact?service=planning">
                                        <Button className="bg-blue-600 hover:bg-blue-700">
                                            תיאום פגישת ייעוץ
                                        </Button>
                                    </Link>
                                    <Button variant="outline">
                                        מידע נוסף על השירות
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Planning Process */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">תהליך התכנון שלנו</h2>

                    <div className="space-y-8">
                        {planningSteps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden"
                            >
                                <div className="md:flex">
                                    <div className="md:w-1/4 bg-blue-50 p-6 flex flex-col items-center justify-center text-center">
                                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                                            <step.icon className="h-10 w-10 text-blue-600" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <div className="text-blue-800 text-lg font-semibold">
                                            שלב {index + 1}
                                        </div>
                                    </div>
                                    <div className="md:w-3/4 p-6">
                                        <p className="text-gray-600 mb-4 text-lg">
                                            {step.description}
                                        </p>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h4 className="font-semibold mb-3">מה זה כולל?</h4>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {step.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                                        <span>{detail}</span>
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

                {/* Why Choose Our Planning Service */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">למה לבחור בשירות התכנון שלנו?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "מומחיות מקצועית",
                                description: "צוות המתכננים שלנו בעל ניסיון רב בתכנון מנדפים לכל סוגי העסקים והבתים, עם היכרות מעמיקה עם התקנים והדרישות הרגולטוריות.",
                                image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "חיסכון בעלויות לטווח ארוך",
                                description: "תכנון מדויק מבטיח שתקבלו את המנדף המתאים ביותר לצרכים שלכם, ללא הפתעות או עלויות נוספות בהמשך, תוך חיסכון באנרגיה ובעלויות תחזוקה.",
                                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "פתרונות לכל אתגר",
                                description: "אנו מתמחים בפתרון אתגרים מורכבים: מבנים ישנים, מגבלות חלל, דרישות אסתטיות מיוחדות, או כל אתגר אחר שעשוי להתעורר.",
                                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            },
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="overflow-hidden shadow-md"
                            >
                                <div className="relative pb-[60%]">
                                    <img
                                        src={benefit.image}
                                        alt={benefit.title}
                                        className="absolute w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Case Study */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">מקרה לדוגמה: תכנון למסעדה חדשה</h2>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-2/5">
                                <img
                                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                    alt="מקרה לדוגמה: תכנון למסעדה חדשה"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-3/5 p-8">
                                <h3 className="text-2xl font-bold mb-4">מסעדת "טעם של בית" - פתרון תכנון כולל</h3>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-2">האתגר:</h4>
                                    <p className="text-gray-600 mb-4">
                                        מסעדה חדשה בחלל היסטורי עם מגבלות מבניות רבות, הכוללת מטבח פתוח עם תחנות בישול מרובות: גריל, טיגון, אפייה ופס חם.
                                    </p>

                                    <h4 className="font-semibold mb-2">הפתרון:</h4>
                                    <p className="text-gray-600 mb-4">
                                        תכננו מערכת מנדפים מודולרית המותאמת לכל אזור בישול בנפרד, תוך שמירה על אסתטיקה אחידה והתחשבות במבנה ההיסטורי.
                                    </p>

                                    <h4 className="font-semibold mb-2">התוצאה:</h4>
                                    <ul className="space-y-2 mb-4">
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>מערכת יעילה המתמודדת עם כל סוגי הבישול</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>שמירה על האסתטיקה של המקום</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>עמידה בכל התקנים והדרישות הרגולטוריות</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                            <span>חיסכון של 20% בעלויות האנרגיה</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-gray-600 p-4 bg-gray-50 rounded-lg mb-6 text-center">
                                    <p>"שירות התכנון חסך לנו הרבה כאבי ראש. הצוות היה מקצועי ופתר בעיות שלא חשבנו עליהן כלל. התוצאה היא מטבח מאוורר ונעים לעבודה."</p>
                                    <p className="font-medium mt-2">- שחר כהן, בעלים של "טעם של בית"</p>
                                </div>

                                <Link to="/Contact?service=planning">
                                    <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                                        רוצים שנתכנן את המנדף שלכם? צרו קשר עכשיו!
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">שאלות נפוצות</h2>

                    <div className="space-y-4">
                        {[
                            {
                                question: "כמה זמן לוקח תהליך התכנון?",
                                answer: "תהליך התכנון המלא, מהפגישה הראשונית ועד להצעת המחיר הסופית, אורך בדרך כלל בין שבוע לשבועיים, תלוי במורכבות הפרויקט. פגישת הייעוץ והמדידות הראשונית אורכת בדרך כלל כשעה עד שעתיים."
                            },
                            {
                                question: "האם שירות התכנון כרוך בתשלום?",
                                answer: "אנו מציעים פגישת ייעוץ ראשונית ללא עלות. במידה ותחליטו להמשיך עם הפרויקט, עלות התכנון המפורט תקוזז ממחיר ההזמנה הסופית."
                            },
                            {
                                question: "האם אתם יכולים לעבוד עם האדריכל/מעצב שלי?",
                                answer: "בהחלט! אנו שמחים לשתף פעולה עם אדריכלים ומעצבי פנים. צוות התכנון שלנו יעבוד בתיאום מלא עם האדריכל או המעצב שלכם כדי להבטיח שהמנדף ישתלב בצורה מושלמת בתכנון הכולל."
                            },
                            {
                                question: "האם התכנון כולל גם את מערכת הצנרת?",
                                answer: "כן, התכנון המפורט כולל את המנדף עצמו, מערכת התעלות, מיקום המפוחים, והגדרת נקודות החשמל הנדרשות. אנו מתכננים את המערכת כולה, מקצה לקצה."
                            },
                            {
                                question: "לאילו סוגי עסקים אתם מציעים שירותי תכנון?",
                                answer: "אנו מציעים שירותי תכנון לכל סוגי העסקים: מסעדות, בתי קפה, מאפיות, בתי מלון, מפעלי מזון, וכן למטבחים ביתיים. לכל סוג עסק יש דרישות ייחודיות, וצוות התכנון שלנו מנוסה בכולן."
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
                            מוכנים להתחיל בתכנון המנדף שלכם?
                        </h2>
                        <p className="text-lg mb-6 max-w-3xl mx-auto">
                            צרו קשר עכשיו לתיאום פגישת ייעוץ וקבלו את הפתרון המושלם עבורכם!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/Contact?service=planning">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-700 hover:bg-gray-100"
                                >
                                    תיאום פגישת ייעוץ
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