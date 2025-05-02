import { motion } from 'framer-motion'

const Accessibility = () => {
  const themeColor = '#d6b16c'

  const accessibilityFeatures = [
    {
      category: "התאמות טקסט וצבעים",
      features: [
        "אפשרות להגדלת הטקסט עד 200%",
        "מספר מצבי ניגודיות: רגילה, גבוהה, מצב כהה, מצב בהיר ומצב עיוורון צבעים",
        "פונט מותאם לאנשים עם דיסלקציה",
        "מדריך קריאה להקלה על מעקב אחר הטקסט"
      ]
    },
    {
      category: "ניווט ואינטראקציה",
      features: [
        "תמיכה מלאה בניווט באמצעות מקלדת",
        "אפשרות להגדלת סמן העכבר",
        "הדגשת קישורים לשיפור הנראות",
        "תפריט נגישות קבוע וזמין בכל עמוד"
      ]
    },
    {
      category: "תמיכה במחשב בקריאה ושמיעה",
      features: [
        "תכונת הקראת טקסט (Text-to-Speech) בעברית",
        "אפשרות להשהות ולהמשיך את ההקראה",
        "ממשק שליטה בהקראה נוח וברור",
        "הקראת תוכן בעת מעבר העכבר מעל טקסטים, כותרות וקישורים"
      ]
    },
    {
      category: "מבנה ותוכן",
      features: [
        "מבנה דפים עקבי וברור",
        "כותרות מדורגות לניווט קל",
        "תיאורי תמונות חלופיים",
        "טפסים נגישים עם תוויות ברורות"
      ]
    }
  ]

  return (
    <div className="rtl bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-20 pb-32">
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
          >
            הצהרת <span style={{ color: themeColor }}>נגישות</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-xl text-blue-100"
          >
            אנו מאמינים שהאינטרנט צריך להיות נגיש לכולם
          </motion.p>
        </div>

        {/* גל תחתון */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="w-full">
            <path
              fill="white"
              d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,117.3C840,96,960,96,1080,112C1200,128,1320,160,1380,176L1440,192L1440,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* מבוא */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-r-4 pr-4" style={{ borderColor: themeColor }}>
            מחויבות לנגישות
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            חברת טי אמ מנדפים מאמינה ומקדמת את זכותם של אנשים עם מוגבלות להשתתפות שוויונית ופעילה בחברה.
            אתר זה תוכנן ופותח כך שיהיה נגיש עבור אנשים עם מוגבלות.
          </p>
          <p className="text-gray-700 leading-relaxed">
            אנו ממשיכים לפעול באופן מתמיד לשיפור נגישות האתר והשירותים הדיגיטליים שלנו.
          </p>
        </motion.div>

        {/* כיצד להשתמש בתפריט הנגישות */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-r-4 pr-4" style={{ borderColor: themeColor }}>
            כיצד להשתמש בתפריט הנגישות
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              תפריט הנגישות נמצא בפינה הימנית התחתונה של המסך ומסומן באיקון נגישות.
              לחיצה על כפתור זה תפתח את תפריט הנגישות המלא עם כל האפשרויות הזמינות.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2" style={{ color: themeColor }}>התאמות זמינות בתפריט:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>הגדלה והקטנה של גודל הטקסט</li>
                <li>שינוי ניגודיות ומצבי תצוגה</li>
                <li>הפעלת פונט מותאם לדיסלקציה</li>
                <li>הפעלת מדריך קריאה</li>
                <li>הפעלת הקראת טקסט</li>
                <li>הגדלת סמן העכבר</li>
                <li>הדגשת קישורים</li>
                <li>איפוס כל ההגדרות</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* התאמות נגישות */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-r-4 pr-4" style={{ borderColor: themeColor }}>
            התאמות הנגישות באתר
          </h2>

          <div className="space-y-10">
            {accessibilityFeatures.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-800 mb-3" style={{ color: themeColor }}>
                  {section.category}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {section.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* יצירת קשר בנושא נגישות */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-r-4 pr-4" style={{ borderColor: themeColor }}>
            יצירת קשר בנושא נגישות
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            אם נתקלתם בבעיית נגישות באתר או שיש לכם הצעות לשיפור, נשמח לשמוע מכם.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>דוא"ל: Tm.mindaf@gmail.com</p>
          </div>
        </motion.div>

        {/* עדכון */}
        <p className="text-gray-500 text-sm text-center">
          הצהרת הנגישות עודכנה לאחרונה בתאריך: {new Date().toLocaleDateString('he-IL')}
        </p>
      </section>
    </div>
  )
}

export default Accessibility