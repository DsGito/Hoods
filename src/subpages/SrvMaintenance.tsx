
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, CalendarClock, Brush, Wrench, BarChart4 } from "lucide-react";
import { motion } from 'framer-motion';

export default function SrvMaintenance() {
    const maintenancePlans = [
        {
            title: "תכנית בסיסית",
            price: "₪1,200 לשנה",
            description: "תכנית שנתית הכוללת ביקורת תחזוקה שנתית, ניקוי מסננים, ותמיכה טלפונית.",
            features: [
                "ביקורת תחזוקה שנתית",
                "ניקוי מסננים",
                "בדיקת מערכת החשמל",
                "תמיכה טלפונית",
            ],
            highlight: false
        },
        {
            title: "תכנית מתקדמת",
            price: "₪2,400 לשנה",
            description: "תכנית חצי שנתית הכוללת ניקוי מסננים, חלקים פנימיים, בדיקות מקיפות וזמן תגובה מהיר לתקלות.",
            features: [
                "ביקורת תחזוקה חצי שנתית",
                "ניקוי מסננים וחלקים פנימיים",
                "בדיקת מערכת החשמל",
                "ניקוי תעלות",
                "תמיכה טלפונית מורחבת",
                "תגובה תוך 48 שעות לתקלות",
            ],
            highlight: true
        },
        {
            title: "תכנית פרימיום",
            price: "₪3,600 לשנה",
            description: "תכנית רבעונית הכוללת ביקורות תקופתיות, החלפת חלקים פגומים, ניקוי מקיף ותמיכה מלאה 24/7.",
            features: [
                "ביקורת תחזוקה רבעונית",
                "ניקוי מסננים וחלקים פנימיים",
                "בדיקת והחלפת חלקים פגומים",
                "ניקוי תעלות מקיף",
                "תמיכה טלפונית 24/7",
                "תגובה תוך 24 שעות לתקלות",
            ],
            highlight: false
        }
    ];

    const maintenanceTasks = [
        {
            title: "ניקוי מסננים",
            description: "ניקוי יסודי של מסנני השומן והאוויר להבטחת פעולה יעילה וצמצום סיכוני שריפה.",
            frequency: "כל 2-4 שבועות",
            icon: Brush
        },
        {
            title: "בדיקת מערכת החשמל",
            description: "בדיקה מקיפה של כל חיבורי החשמל, חיווט, והמנוע לאיתור בעיות אפשריות ותיקונן.",
            frequency: "פעמיים בשנה",
            icon: Wrench
        },
        {
            title: "ניקוי תעלות",
            description: "ניקוי יסודי של מערכת התעלות להסרת הצטברויות שומן ולכלוך המפחיתים את יעילות המערכת.",
            frequency: "פעם בשנה",
            icon: Brush
        },
        {
            title: "ביקורת תקופתית",
            description: "בדיקה כוללת של כל מרכיבי המערכת כולל מנוע, מפוח, חיבורים ואטמים לאיתור בעיות מוקדם ככל האפשר.",
            frequency: "בהתאם לתכנית השירות",
            icon: CalendarClock
        },
        {
            title: "בדיקת ביצועים",
            description: "מדידת יעילות השאיבה, זרימת האוויר, רמות רעש וצריכת אנרגיה להבטחת פעולה אופטימלית.",
            frequency: "פעם בשנה",
            icon: BarChart4
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                תחזוקה ושירות
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
                                    <li className="text-gray-900 font-medium">תחזוקה ושירות</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <Link to="/Contact?service=maintenance">
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    הזמנת שירות תחזוקה
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl overflow-hidden shadow-md">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                    alt="תחזוקה ושירות"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8">
                                <h2 className="text-2xl font-bold mb-4">שירותי תחזוקה מקצועיים</h2>
                                <p className="text-gray-600 mb-6">
                                    אנו מציעים שירותי תחזוקה שוטפים לשמירה על תקינות המנדף לאורך זמן. שירותי התחזוקה כוללים ניקוי מסננים,
                                    בדיקת מנועים, ניקוי תעלות, וטיפול בתקלות. תחזוקה נכונה מאריכה את חיי המנדף, מבטיחה יעילות מקסימלית
                                    ומפחיתה סיכוני בטיחות.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">ניקוי מסננים תקופתי</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">בדיקת מנועים ומפוחים</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">ניקוי יסודי של תעלות</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">איתור וטיפול בתקלות</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link to="/Contact?service=maintenance">
                                        <Button className="bg-blue-600 hover:bg-blue-700">
                                            הזמנת שירות תחזוקה
                                        </Button>
                                    </Link>
                                    <Link to="#maintenance-plans">
                                        <Button variant="outline">
                                            תכניות תחזוקה
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Regular Maintenance */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">למה תחזוקה שוטפת חיונית?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "בטיחות מוגברת",
                                description: "תחזוקה שוטפת מפחיתה משמעותית את סיכוני השריפה על ידי מניעת הצטברות שומנים דליקים במערכת.",
                                image: "https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "יעילות אופטימלית",
                                description: "מנדף נקי פועל ביעילות גבוהה יותר, מסלק ריחות, אדים ועשן בצורה טובה יותר ומשפר את סביבת המטבח.",
                                image: "https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "חיסכון בעלויות",
                                description: "תחזוקה מונעת מקטינה את הסיכוי לתקלות יקרות, מאריכה את חיי המערכת ומפחיתה את צריכת האנרגיה.",
                                image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            },
                        ].map((reason, index) => (
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
                                        src={reason.image}
                                        alt={reason.title}
                                        className="absolute w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                                    <p className="text-gray-600">{reason.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Maintenance Tasks */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">פעולות התחזוקה העיקריות</h2>

                    <div className="space-y-6">
                        {maintenanceTasks.map((task, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                                <div className="md:flex">
                                    <div className="md:w-1/4 bg-blue-50 p-6 flex flex-col items-center justify-center text-center">
                                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                                            <task.icon className="h-10 w-10 text-blue-600" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{task.title}</h3>
                                        <div className="text-blue-800 text-sm font-semibold px-3 py-1 bg-blue-100 rounded-full">
                                            {task.frequency}
                                        </div>
                                    </div>
                                    <div className="md:w-3/4 p-6">
                                        <p className="text-gray-600 text-lg">
                                            {task.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Maintenance Plans */}
                <section id="maintenance-plans" className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">תכניות תחזוקה</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {maintenancePlans.map((plan) => (
                            <motion.div
                                key={plan.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className={`relative ${plan.highlight ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        מומלץ ביותר
                                    </div>
                                )}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-center mb-2">{plan.title}</h3>
                                    <div className="text-center mb-6">
                                        <span className="text-3xl font-bold">{plan.price}</span>
                                    </div>
                                    <p className="text-gray-600 mb-6">{plan.description}</p>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="ml-2 text-blue-600">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/Contact">
                                        <Button
                                            className={`w-full ${plan.highlight ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                                            variant={plan.highlight ? 'default' : 'outline'}
                                        >
                                            הזמן עכשיו
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Warning Signs */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">סימני אזהרה לבעיות במנדף</h2>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="p-8">
                            <p className="text-gray-600 mb-6 text-center text-lg">
                                יש לשים לב לסימנים הבאים, המצביעים על הצורך בטיפול מיידי במנדף:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                    <h3 className="font-semibold mb-3 text-red-800">רעשים חריגים</h3>
                                    <p className="text-gray-700">
                                        רעשים חדשים או חריגים בזמן פעולת המנדף עלולים להצביע על בעיות במנוע, מפוח או חלקים רופפים.
                                    </p>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                    <h3 className="font-semibold mb-3 text-red-800">ירידה ביעילות השאיבה</h3>
                                    <p className="text-gray-700">
                                        אם המנדף לא סופג אדים, עשן או ריחות כפי שעשה בעבר, ייתכן שיש חסימה במסננים או בתעלות.
                                    </p>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                    <h3 className="font-semibold mb-3 text-red-800">ריחות לא נעימים</h3>
                                    <p className="text-gray-700">
                                        ריחות רעים היוצאים מהמנדף עצמו יכולים להצביע על הצטברות שומן או עובש במערכת.
                                    </p>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                    <h3 className="font-semibold mb-3 text-red-800">הצטברות שמן נראית לעין</h3>
                                    <p className="text-gray-700">
                                        טפטוף שמן או שומן מהמנדף הוא סימן ברור לצורך בניקוי יסודי ומיידי.
                                    </p>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                    <h3 className="font-semibold mb-3 text-red-800">רעידות</h3>
                                    <p className="text-gray-700">
                                        רעידות חזקות בזמן פעולה עלולות להצביע על חוסר איזון במאוורר או על חלקים רופפים.
                                    </p>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                    <h3 className="font-semibold mb-3 text-red-800">האטה בתאורה או תקלות חשמל</h3>
                                    <p className="text-gray-700">
                                        בעיות בתאורת המנדף או תקלות חשמליות אחרות מצריכות טיפול מקצועי מיידי.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <Link to="/Contact?service=emergency">
                                    <Button className="bg-red-600 hover:bg-red-700">
                                        זיהיתם אחד מהסימנים? צרו קשר מיידי לשירות
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DIY vs Professional */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">תחזוקה עצמית מול תחזוקה מקצועית</h2>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2 p-8">
                                <h3 className="text-2xl font-bold mb-4 text-center">תחזוקה עצמית</h3>
                                <p className="text-gray-600 mb-6">
                                    ישנן פעולות תחזוקה בסיסיות שניתן לבצע באופן עצמאי כדי לשמור על תפקוד תקין של המנדף:
                                </p>

                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <div>
                                            <p className="font-medium">ניקוי מסנני השומן</p>
                                            <p className="text-gray-600 text-sm">הסרת המסננים, השרייתם במים חמים וסבון, ושטיפתם ביסודיות.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <div>
                                            <p className="font-medium">ניקוי חיצוני של המנדף</p>
                                            <p className="text-gray-600 text-sm">ניגוב המשטחים החיצוניים עם חומר ניקוי מתאים.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <div>
                                            <p className="font-medium">בדיקה ויזואלית תקופתית</p>
                                            <p className="text-gray-600 text-sm">זיהוי הצטברויות שומן או סימני נזק הדורשים טיפול.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                                        <div>
                                            <p className="font-medium">החלפת נורות</p>
                                            <p className="text-gray-600 text-sm">החלפת נורות שרופות בהתאם להוראות היצרן.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="md:w-1/2 p-8 bg-gray-50">
                                <h3 className="text-2xl font-bold mb-4 text-center">תחזוקה מקצועית</h3>
                                <p className="text-gray-600 mb-6">
                                    פעולות תחזוקה מורכבות יותר הדורשות מומחיות, כלים מיוחדים או גישה לחלקים פנימיים של המערכת:
                                </p>

                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-blue-600 ml-2 mt-0.5" />
                                        <div>
                                            <p className="font-medium">ניקוי יסודי של תעלות</p>
                                            <p className="text-gray-600 text-sm">ניקוי מקצועי של כל מערכת התעלות להסרת הצטברויות שומן.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-blue-600 ml-2 mt-0.5" />
                                        <div>
                                            <p className="font-medium">טיפול במנוע ובמפוח</p>
                                            <p className="text-gray-600 text-sm">בדיקה, ניקוי, שימון והחלפת חלקים במנוע ובמפוח לפי הצורך.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-blue-600 ml-2 mt-0.5" />
                                        <div>
                                            <p className="font-medium">בדיקת חיבורי חשמל</p>
                                            <p className="text-gray-600 text-sm">בדיקה מקיפה של כל החיווט ומערכת החשמל לאיתור בעיות בטיחות.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-blue-600 ml-2 mt-0.5" />
                                        <div>
                                            <p className="font-medium">טיפול במערכות כיבוי אש</p>
                                            <p className="text-gray-600 text-sm">בדיקה ותחזוקה של מערכות כיבוי אש אוטומטיות (אם קיימות).</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-blue-600 ml-2 mt-0.5" />
                                        <div>
                                            <p className="font-medium">בדיקת ביצועים מקיפה</p>
                                            <p className="text-gray-600 text-sm">מדידות מקצועיות של ביצועי המערכת וכיוונים לפי הצורך.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">מה אומרים לקוחותינו על שירותי התחזוקה</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                quote: "כבר שנתיים שאנחנו נמצאים בתכנית התחזוקה המתקדמת ורואים הבדל עצום. המנדפים תמיד נקיים, אין ריחות במסעדה והיעילות גבוהה.",
                                author: "יוסי לוי - מסעדת 'טעמים'",
                                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
                            },
                            {
                                quote: "צוות התחזוקה מקצועי, אדיב ותמיד מגיע בזמן. הם עובדים בצורה שקטה ונקייה ולא מפריעים לפעילות השוטפת של המסעדה.",
                                author: "מירה כהן - קונדיטורית ראשית, 'קפה נועם'",
                                image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
                            },
                            {
                                quote: "אחרי שנתקלנו בבעיות חוזרות במנדף, הצטרפנו לתכנית התחזוקה וחסכנו המון כסף על תיקונים. בנוסף, המטבח שלנו הרבה יותר נעים לעבודה.",
                                author: "דוד ישראלי - שף, 'המסעדה היהודית'",
                                image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="shadow-sm"
                            >
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            className="w-12 h-12 rounded-full object-cover ml-4"
                                        />
                                        <p className="font-medium">{testimonial.author}</p>
                                    </div>
                                    <p className="text-gray-600">"{testimonial.quote}"</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            מוכנים להבטיח את הביצועים של המנדף שלכם?
                        </h2>
                        <p className="text-lg mb-6 max-w-3xl mx-auto">
                            הצטרפו לאחת מתכניות התחזוקה שלנו והבטיחו שהמנדף שלכם יפעל ביעילות מקסימלית לאורך שנים.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/Contact?service=maintenance">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-700 hover:bg-gray-100"
                                >
                                    הזמנת שירות תחזוקה
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