import { Mail, Phone } from 'lucide-react'

const Accessibility = () => {
  const accessibilityFeatures = [
    {
      category: "התאמות טקסט וצבעים",
      features: [
        "אפשרות להגדלת הטקסט עד 150%",
        "אפשרות למצב ניגודיות גבוהה",
        "פונט מותאם לאנשים עם דיסלקציה",
        "הגדלת ריווח בין שורות לשיפור הקריאות"
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
    <div className="rtl bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">הצהרת נגישות</h1>
          <p className="text-xl">
            אנו מאמינים שהאינטרנט צריך להיות נגיש לכולם
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* מבוא */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">מחויבות לנגישות</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            חברת Kitchen Hoods מאמינה ומקדמת את זכותם של אנשים עם מוגבלות להשתתפות שוויונית ופעילה בחברה. 
            אתר זה תוכנן ופותח כך שיהיה נגיש עבור אנשים עם מוגבלות, בהתאם לתקן הישראלי (ת"י 5568) 
            ולהנחיות הנגישות WCAG 2.1 ברמה AA.
          </p>
          <p className="text-gray-700 leading-relaxed">
            אנו ממשיכים לפעול באופן מתמיד לשיפור נגישות האתר והשירותים הדיגיטליים שלנו.
          </p>
        </section>

        {/* התאמות נגישות */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">התאמות הנגישות באתר</h2>
          <div className="space-y-8">
            {accessibilityFeatures.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {section.category}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {section.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* איש קשר לנושאי נגישות */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">יצירת קשר בנושאי נגישות</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              רכז הנגישות שלנו ישמח לסייע בכל שאלה או בעיה בנושאי נגישות:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">ישראל ישראלי - רכז נגישות</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary ml-2" />
                  <span>074-7123456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary ml-2" />
                  <span>accessibility@kitchen-hoods.co.il</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* עדכון אחרון */}
        <section className="text-gray-600 text-sm">
          <p>הצהרת הנגישות עודכנה לאחרונה בתאריך: {new Date().toLocaleDateString('he-IL')}</p>
        </section>
      </div>
    </div>
  )
}

export default Accessibility 