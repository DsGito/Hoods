import { Link } from "react-router-dom";
import { Check, Filter, Wind, GaugeCircle, BarChart } from "lucide-react";
import { motion } from 'framer-motion';
import CtaMoreSection from '../components/sections/CtaMoreSection';

export default function SmokeFilters() {
  const filterSystems = [
    {
      id: "basic-filters",
      title: "מערכת סינון בסיסית",
      description: "מערכת סינון דו-שלבית המספקת פתרון יעיל ואיכותי לבתי עסק קטנים עד בינוניים עם רמת עשן רגילה.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "מסנני שומן מנירוסטה באיכות גבוהה",
        "מסנני פחם פעיל לנטרול ריחות",
        "התקנה פשוטה ותחזוקה קלה",
        "יעילות סינון של עד 85%",
        "מיועד לבתי עסק עם כמות עשן ואדים רגילה",
      ],
    },
    {
      id: "advanced-filters",
      title: "מערכת סינון מתקדמת",
      description: "מערכת סינון ארבע-שלבית ליישומים מסחריים שדורשים סינון יעיל ורמת ניקיון גבוהה במיוחד.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "מסנני שומן בעיצוב זרימה מתקדם",
        "מערכת UV לפירוק מולקולרי של ריחות",
        "מסנני פחם פעיל מקטליטי",
        "מסנני HEPA לשימור איכות אוויר מעולה",
        "יעילות סינון של למעלה מ-95%",
      ],
    },
    {
      id: "electrostatic-filters",
      title: "מערכת סינון אלקטרוסטטית",
      description: "מערכת סינון מתקדמת המשתמשת בטכנולוגיה אלקטרוסטטית ללכידת חלקיקים עדינים במיוחד ואדי שמן.",
      image: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "יחידת טעינה אלקטרוסטטית",
        "לוחות איסוף עם תצורת זרימה משופרת",
        "מערכת ניקוי עצמי (אופציונלי)",
        "חיסכון משמעותי בעלויות תחזוקה",
        "יעילות גבוהה במיוחד בלכידת חלקיקים עדינים",
      ],
    },
  ];

  const filteringStages = [
    {
      stage: "שלב 1: סינון מכני ראשוני",
      description: "מ סננים מכניים שתופסים את החלקיקים הגדולים וטיפות השומן. משמש כשלב הראשון בכל מערכות הסינון.",
      icon: Filter,
      color: "blue",
      percentage: 70,
    },
    {
      stage: "שלב 2: סינון הפחתת ריחות",
      description: "מפרק מולקולרי של ריחות באמצעות טכנולוגיית UV או פחם פעיל. סינון זה חיוני במיוחד לבתי אוכל ומטבחים.",
      icon: Wind,
      color: "green",
      percentage: 85,
    },
    {
      stage: "שלב 3: סינון חלקיקים עדינים",
      description: "מסנני HEPA או מערכות אלקטרוסטטיות ללכידת חלקיקים מזהמים וחלקיקים זעירים עד לרמה של 0.3 מיקרון.",
      icon: GaugeCircle,
      color: "purple",
      percentage: 95,
    },
    {
      stage: "שלב 4: פליטה מבוקרת",
      description: "מערכת בקרה המווסתת את פליטת האוויר המסונן, מותאמת לדרישות התקן ומבטיחה עמידה בתקני איכות סביבה.",
      icon: BarChart,
      color: "amber",
      percentage: 98,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                מערכות סינון עשן
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
                  <li className="text-gray-900 font-medium">מערכות סינון עשן</li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full">
                <img
                  src="/images/img23.jpg"
                  alt="מערכות סינון עשן"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">פתרונות סינון מתקדמים לאוויר נקי ובריא</h2>
                <p className="text-gray-600 mb-6">
                  מערכות הסינון המתקדמות שלנו מציעות פתרון כולל להפחתת עשן, ריחות, ואדי שמן במטבחים מסחריים וביתיים.
                  הטכנולוגיות החדשניות מאפשרות לכם לעמוד בכל התקנים והרגולציות, לשמור על סביבת עבודה בריאה, ולהפחית מטרדים לסביבה.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-gray-600">סינון יעיל של עשן וריחות</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-gray-600">עמידה בתקני איכות סביבה</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-gray-600">חיסכון בעלויות אנרגיה</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-gray-600">תחזוקה פשוטה ונוחה</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Quality Filtration Matters */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">למה סינון איכותי חשוב?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "עמידה ברגולציה",
                description: "מערכות סינון מתקדמות מבטיחות עמידה בתקנים ודרישות של משרדי הבריאות, כיבוי אש, ואיכות הסביבה.",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "בריאות ובטיחות",
                description: "סינון יעיל מפחית חשיפה של עובדים ולקוחות לזיהום אוויר, עשן ושומנים, ומקטין סיכוני שריפה.",
                image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "חיסכון בעלויות",
                description: "מערכות סינון איכותיות מפחיתות עלויות תחזוקה, מאריכות את חיי המערכת, ומקטינות צריכת אנרגיה.",
                image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </motion.div>
            ))
            }
          </div>
        </section>

        {/* Filtering Process */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">תהליך הסינון המתקדם</h2>

          {filteringStages.map((stage, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className={`bg-${stage.color}-50 rounded-xl p-6 border border-${stage.color}-100`}>
                <div className="md:flex items-center">
                  <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                    <div className={`bg-${stage.color}-100 p-4 rounded-full`}>
                      <stage.icon className={`w-16 h-16 text-${stage.color}-600`} />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className={`text-2xl sm:text-3xl font-bold text-${stage.color}-700 mb-3`}>{stage.stage}</h3>
                    <p className="text-gray-700 mb-4 text-lg">
                      {stage.description}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`bg-${stage.color}-600 h-2.5 rounded-full`}
                        style={{ width: `${stage.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-end mt-1">
                      <p className={`text-sm font-medium text-${stage.color}-600`}>
                        יעילות סינון: {stage.percentage}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-600">
              * יעילות הסינון משתנה בהתאם לסוג המערכת וההתקנה. הנתונים המוצגים הם ממוצעים מייצגים.
            </p>
          </div>
        </section>

        {/* Filter Systems */}
        <section id="filter-systems" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">סוגי מערכות סינון</h2>

          {filterSystems.map((system, index) => (
            <div
              key={system.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-xl shadow-md overflow-hidden mb-8`}
            >
              <div className="md:w-2/5">
                <img
                  src={system.image}
                  alt={system.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">{system.title}</h3>
                <p className="text-gray-600 mb-6">{system.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">מאפיינים עיקריים:</h4>
                  <ul className="space-y-2">
                    {system.features.map((feature, i) => (
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

        {/* Maintenance & Replacement */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">תחזוקה והחלפת מסננים</h2>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1580901368919-7738efb0f87e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="תחזוקת מסננים"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">תחזוקה נכונה למערכת סינון</h3>
                <p className="text-gray-600 mb-6">
                  תחזוקה נכונה של מערכת הסינון חיונית לשמירה על יעילות המערכת, עמידה בתקנים, ומניעת סיכוני בטיחות.
                  אנו מציעים מגוון פתרונות תחזוקה ומערך החלפת מסננים לפי לוח זמנים מומלץ:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">מסנני שומן (נירוסטה/אלומיניום)</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="ml-2 text-blue-600 font-semibold">תדירות ניקוי:</span>
                        <span>כל 2-4 שבועות</span>
                      </li>
                      <li className="flex items-start">
                        <span className="ml-2 text-blue-600 font-semibold">תדירות החלפה:</span>
                        <span>כל 2-3 שנים</span>
                      </li>
                      <li className="flex items-start">
                        <span className="ml-2 text-blue-600 font-semibold">סימני החלפה:</span>
                        <span>עיוותים, חורים, הצטברות שאינה ניתנת לניקוי</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">מסנני פחם פעיל</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="ml-2 text-blue-600 font-semibold">תדירות החלפה:</span>
                        <span>כל 3-6 חודשים</span>
                      </li>
                      <li className="flex items-start">
                        <span className="ml-2 text-blue-600 font-semibold">סימני החלפה:</span>
                        <span>ירידה ביעילות סינון ריחות, ריחות חזקים יותר</span>
                      </li>
                      <li className="flex items-start">
                        <span className="ml-2 text-blue-600 font-semibold">הערות:</span>
                        <span>לא ניתן לשטוף או לנקות - רק להחליף</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">מסנני HEPA</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="ml-2 text-blue-600 font-semibold">תדירות החלפה:</span>
                        <span>כל 6-12 חודשים</span>
                      </li>
                      <li className="flex items-start">
                        <span className="ml-2 text-blue-600 font-semibold">סימני החלפה:</span>
                        <span>שינוי צבע, ירידה בזרימת האוויר</span>
                      </li>
                      <li className="flex items-start">
                        <span className="ml-2 text-blue-600 font-semibold">הערות:</span>
                        <span>אין לנסות לנקות - החלפה בלבד</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">לוחות אלקטרוסטטיים</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="ml-2 text-blue-600 font-semibold">תדירות ניקוי:</span>
                        <span>כל 2-4 שבועות</span>
                      </li>
                      <li className="flex items-start">
                        <span className="ml-2 text-blue-600 font-semibold">תדירות החלפה:</span>
                        <span>כל 4-5 שנים</span>
                      </li>
                      <li className="flex items-start">
                        <span className="ml-2 text-blue-600 font-semibold">סימני החלפה:</span>
                        <span>קורוזיה, נזק פיזי, ירידה ביעילות</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      {/* קריאה לפעולה */}
      <CtaMoreSection />
    </div>
  );
}