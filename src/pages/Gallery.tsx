import { useState } from 'react'
import { Filter } from 'lucide-react'
import { Button } from '../components/ui/button'


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('הכל');

  const categories = [
    'הכל',
    'מסעדות',
    'מלונות',
    'אולמות אירועים',
    'מטבחים תעשייתיים',
    'מטבחי חוץ',
    'מנדפים',
    'מטבחים מעוצבים',
    'מערכות צלייה',
    'פתרונות מידוף',
    'מאפיות',
    'מגורים',
    'גריל',
    'בתי קפה',
  ];

  const projects = [
    {
      id: 1,
      title: "מטבח חוץ יוקרתי",
      category: "מטבחי חוץ",
      description: "מטבח חוץ מפואר הכולל מערכת גריל מקצועית ומשטחי עבודה נרחבים",
      location: "חוץ",
      challenge: "אתגר: יצירת פתרונות אחסון ומערכת גריל מקצועית המתאימים למטבח חוץ.",
      solution: "פתרון: תכנון מטבח חוץ עם משטחי עבודה נרחבים ומערכת גריל מקצועית לשימוש רציף.",
      images: ["/images/gallery1.jpg",],
    },
    {
      id: 2,
      title: "מערכת מנדפים למסעדה",
      category: "מנדפים",
      description: "התקנת מערכת מנדפים מתקדמת במטבח מסעדה יוקרתית",
      location: "מסעדה",
      challenge: "אתגר: התקנת מערכת מנדפים במטבח פעיל עם תנאי עשן וריחות מורכבים.",
      solution: "פתרון: תכנון מערכת מנדפים מתקדמת שמפנה עשן וריחות בצורה אופטימלית.",
      images: ["/images/gallery2.jpg",],
    },
    {
      id: 3,
      title: "מטבח מעוצב לבית פרטי",
      category: "מטבחים מעוצבים",
      description: "מטבח מודרני בהתאמה אישית עם פתרונות אחסון חכמים",
      location: "בית פרטי",
      challenge: "אתגר: יצירת מטבח מודרני תוך שמירה על פתרונות אחסון מתקדמים.",
      solution: "פתרון: עיצוב מטבח אישי עם פתרונות אחסון חכמים ומודרניים המנצלים את כל החלל.",
      images: ["/images/gallery3.jpg",],
    },
    {
      id: 4,
      title: "מערכת גריל משולבת",
      category: "מערכות צלייה",
      description: "מערכת צלייה מקצועית משולבת במטבח חוץ",
      location: "חוץ",
      challenge: "אתגר: תכנון מערכת צלייה שתספק חוויית בישול מקצועית ומרשימה בחוץ.",
      solution: "פתרון: התקנת מערכת גריל משולבת במטבח חוץ עם טכנולוגיה מתקדמת לצלייה מקצועית.",
      images: ["/images/gallery4.jpg",],
    },
    {
      id: 5,
      title: "פתרונות מידוף חכמים",
      category: "פתרונות מידוף",
      description: "מערכת מידוף מודולרית המותאמת למטבח מסחרי",
      location: "מטבח מסחרי",
      challenge: "אתגר: תכנון פתרונות מידוף שיתאימו למטבח מסחרי ויהיו גם פונקציונליים וגם אסתטיים.",
      solution: "פתרון: פתרונות מידוף מודולריים הניתנים להתאמה אישית, שמספקים פתרונות אחסון חכמים ויעילים.",
      images: ["/images/gallery5.jpg",],
    },
    {
      id: 6,
      title: "מטבח חוץ מודרני",
      category: "מטבחי חוץ",
      description: "מטבח חוץ בעיצוב מודרני עם משטחי נירוסטה ואחסון מובנה",
      location: "חוץ",
      challenge: "אתגר: עיצוב מטבח חוץ בעיצוב מודרני תוך שמירה על נוחות השימוש.",
      solution: "פתרון: שילוב של עיצוב מודרני עם חומרים איכותיים, תוך שמירה על אחסון נגיש ומרווח.",
      images: ["/images/gallery6.jpg",],
    },
    {
      id: 7,
      title: "מנדף תעשייתי במסעדת שף",
      category: "מסעדות",
      description: "התקנת מערכת מנדפים מתקדמת במסעדת שף יוקרתית בתל אביב",
      location: "תל אביב",
      challenge: "אתגר: יצירת מערכת מנדפים מתקדמת שתתאים למטבח שף פעיל ומרובה עשן.",
      solution: "פתרון: התקנה של מערכת מנדפים חזקה ויעילה שמספקת אוורור מצוין במטבח שף.",
      images: ["/images/gallery1.jpg",],
    },
    {
      id: 8,
      title: "מערכת מנדפים באולם אירועים",
      category: "אולמות אירועים",
      description: "פרויקט התקנת מנדפים מקיף באולם אירועים גדול",
      location: "אולם אירועים",
      challenge: "אתגר: התקנה של מערכת מנדפים שתספק אוורור נכון לכלל האזור באולם גדול.",
      solution: "פתרון: התקנת מערכת מנדפים יעילה ומעוצבת שמתאימה לגודל ולצורכי האולם.",
      images: ["/images/gallery2.jpg",],
    },
    {
      id: 9,
      title: "מנדף במטבח מלון",
      category: "מלונות",
      description: "מערכת מנדפים חדשנית במטבח מלון 5 כוכבים",
      location: "מלון 5 כוכבים",
      challenge: "אתגר: תכנון מערכת מנדפים שתשמור על אווירה נעימה ותספק אוורור מצוין במטבח המלון.",
      solution: "פתרון: התקנה של מערכת מנדפים משולבת שתספק פתרון לכל תחום המטבח.",
      images: ["/images/gallery3.jpg",],
    },
    {
      id: 10,
      title: "מטבח תעשייתי",
      category: "מטבחים תעשייתיים",
      description: "התקנת מערכת מנדפים במפעל מזון גדול",
      location: "מפעל מזון",
      challenge: "אתגר: התקנת מערכת מנדפים שתתמודד עם העשן הרב במפעל המזון הגדול.",
      solution: "פתרון: מערכת מנדפים ייחודית שמספקת סינון אוויר עוצמתי ומפנה עשן בצורה יעילה.",
      images: ["/images/gallery4.jpg",],
    },
    {
      id: 11,
      title: "מסעדה אסייתית",
      category: "מסעדות",
      description: "מנדפים מותאמים למטבח אסייתי מקצועי",
      location: "מסעדה אסייתית",
      challenge: "אתגר: יצירת פתרונות מנדפים שמתאימים למטבח אסייתי תובעני.",
      solution: "פתרון: מערכת מנדפים שמותאמת למטבח אסייתי עם פתרונות אוורור יעילים.",
      images: ["/images/gallery5.jpg",],
    },
    {
      id: 12,
      title: "אולם שמחות",
      category: "אולמות אירועים",
      description: "מערכת מנדפים מתקדמת באולם שמחות חדש",
      location: "אולם שמחות",
      challenge: "אתגר: יצירת מערכת מנדפים שתספק אוורור מצוין בכל רחבי האולם.",
      solution: "פתרון: התקנה של מערכת מנדפים משולבת ומתואמת לאולם גדול.",
      images: ["/images/gallery6.jpg",],
    },

    {
      id: 13,
      title: "מסעדת 'השף המודרני'",
      category: "מסעדות",
      description: "התקנת מערכת מנדפים מקיפה במסעדה יוקרתית בעלת מטבח פתוח וגריל מרכזי.",
      location: "תל אביב",
      challenge: "אתגר: תכנון מערכת שתאפשר שליטה מלאה בעשן וריחות במטבח פתוח עם שימור האסתטיקה של המקום.",
      solution: "פתרון: תכנון והתקנת מנדף אי מעוצב בשילוב מערכת סינון ארבע-שלבית ותאורה אינטגרלית.",
      images: [
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      ]
    },
    {
      id: 14,
      title: "קפה 'אספרסו פלוס'",
      category: "בתי קפה",
      description: "התקנת מנדף מעוצב בבית קפה ומאפייה בוטיק עם דגש על שקט תפעולי ואסתטיקה.",
      location: "ירושלים",
      challenge: "אתגר: בית הקפה ממוקם בבניין לשימור עם מגבלות מבניות ורגולטוריות מורכבות.",
      solution: "פתרון: תכנון מנדף קומפקטי בהתאמה אישית עם מערכת תעלות יצירתית שהותאמה למבנה ההיסטורי.",
      images: [
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      ]
    },
    {
      id: 15,
      title: "סטייק האוס 'הבשר והיין'",
      category: "גריל",
      description: "התקנת מנדף גריל ייעודי בסטייק האוס מוביל עם דגש על סינון עשן כבד וטיפול בריחות.",
      location: "חיפה",
      challenge: "אתגר: כמויות גדולות של עשן ושומן הנוצרות בתהליך הצלייה, לצד דרישות מחמירות של איכות הסביבה.",
      solution: "פתרון: מנדף גריל בעל עוצמה גבוהה בשילוב עם מערכת סינון מתקדמת ומערכת כיבוי אש אוטומטית.",
      images: [
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1558030089-02acba3c214e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      ]
    },
    {
      id: 16,
      title: "וילה פרטית 'נוף לים'",
      category: "מגורים",
      description: "התקנת קולט אדים יוקרתי בווילה פרטית עם מטבח שף מקצועי.",
      location: "הרצליה פיתוח",
      challenge: "אתגר: שילוב קולט אדים חזק ויעיל במטבח יוקרתי תוך שמירה על האסתטיקה המינימליסטית של העיצוב.",
      solution: "פתרון: תכנון קולט אדים מושקע בהתאמה אישית, בשילוב מערכת שליטה חכמה ואפשרויות תאורה מתכווננות.",
      images: [
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      ]
    },
    {
      id: 17,
      title: "מלון 'הים התיכון'",
      category: "מלונות",
      description: "התקנת מערכת מנדפים מקיפה במטבח מרכזי של מלון יוקרתי המשרת מאות סועדים מדי יום.",
      location: "אילת",
      challenge: "אתגר: מטבח ענק עם מגוון תחנות בישול, צלייה, אפייה וקינוחים הדורש מערכת אוורור וסינון מורכבת.",
      solution: "פתרון: תכנון מערכת משולבת של מנדפים ייעודיים לכל אזור, עם מערכות בקרה חכמות וחיסכון אנרגטי.",
      images: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      ]
    },
    {
      id: 18,
      title: "מאפיית 'לחם טרי'",
      category: "מאפיות",
      description: "התקנת מנדף ייעודי למאפייה עם אפייה של לחמים, מאפים וקינוחים.",
      location: "רעננה",
      challenge: "אתגר: שליטה באדי אפייה וחום גבוה, לצד צורך במניעת זיהום של אבקות וקמח.",
      solution: "פתרון: מנדף מאפייה ייעודי עם מערכת סינון מותאמת והגנות מיוחדות מפני חדירת אבקות למנוע.",
      images: [
        "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      ]
    },
  ];

  const filteredProjects = selectedCategory === 'הכל'
    ? projects
    : projects.filter(project => project.category === selectedCategory);


  return (
    <div className="rtl">
      <section className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">גלריית פרויקטים</h1>
          <p className="text-xl max-w-2xl mx-auto">
            צפו בחלק מהפרויקטים המובילים שביצענו עבור לקוחותינו
          </p>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            מבחר מהפרויקטים שביצענו בשנים האחרונות. כל פרויקט מותאם במיוחד לצרכי הלקוח ולדרישות המקום.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <Filter className="h-5 w-5" />
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative pb-[66.666667%]">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>


              <div className="p-6">
                <div className="text-sm text-primary mb-2">{project.category}</div>


                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="text-sm text-gray-600">{project.location}</div>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-700 text-sm">{project.challenge}</p>
                  <p className="text-gray-700 text-sm">{project.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Call to Action */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center border border-blue-100">
          <h2 className="text-2xl font-bold mb-4">מעוניינים בפרויקט משלכם?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            אנו מתמחים בהתאמה אישית של פתרונות אוורור וסינון לכל סוגי העסקים והבתים.
            צרו איתנו קשר לתיאום פגישת ייעוץ ללא התחייבות.
          </p>
          <div className="flex justify-center">
        {/*
        <a
          href="/contact"
          className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors group"
        >
          צרו קשר
          <ArrowRight className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
        </a>
        */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Gallery
