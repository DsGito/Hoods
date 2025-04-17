import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

export default function Products() {
  const categories = [
    {
      id: "restaurant",
      title: "מנדפים ומערכות יניקה למסעדות",
      description: "מנדפים מקצועיים המותאמים לעומסים גבוהים ושימוש אינטנסיבי במסעדות ובתי קפה.",
      image: '/images/gallery1.jpg',
      features: ["עמידות בעומסים גבוהים", "עמידה בתקנים מחמירים", "יעילות שאיבה גבוהה",'ייעוץ מקיף לבחירת המנדף המתאים ביותר לצרכים שלכם', 'התאמה לכל סוגי המטבחים', 'מערכות חכמות לחיסכון באנרגיה', 'עמידה בתקני בטיחות'],
      path: "RestaurantHoods",
    },
    {
      id: "cafe",
      title: "מנדפים לבתי קפה",
      description: "מנדפים מעוצבים ויעילים המותאמים במיוחד לצרכי בתי קפה ומאפיות.",
      image: '/images/gallery2.jpg',
      features: ["עיצוב אסתטי", "פעולה שקטה", "התאמה לחללים קטנים"],
      path: "CafeHoods",
    },
    {
      id: "grill",
      title: "מנדפי גריל",
      description: "מנדפים חזקים במיוחד המתמודדים ביעילות עם עשן וריחות חזקים של גריל ובישול בשר.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["טיפול בעשן כבד", "מסנני שומן מתקדמים", "עמידות בטמפרטורות גבוהות"],
      path: "GrillHoods",
    },
    {
      id: "home",
      title: "קולטי אדים ביתיים",
      description: "קולטי אדים יוקרתיים ושקטים למטבח הביתי המספקים פתרון יעיל וחסכוני.",
      image: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["עיצוב מודרני", "פעולה שקטה", "תאורת LED משולבת"],
      path: "HomeHoods",
    },
    {
      id: "filter",
      title: "מערכות סינון עשן",
      description: "מערכות סינון מתקדמות לטיפול יעיל בעשן, ריחות וחלקיקים מזיקים.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["סינון יעיל של חלקיקים", "הפחתת ריחות", "חיסכון באנרגיה"],
      path: "SmokeFilters",
    },

    {
      id: "home",
      title: "מטבחים מקצועיים בהתאמה אישית",
      description: 'עיצוב וביצוע מטבחי חוץ המשלבים עמידות לתנאי מזג האוויר עם אסתטיקה יוקרתית ופונקציונליות מלאה. תכנון וביצוע מטבחי פנים פונקציונליים ומעוצבים. שילוב מושלם בין אסתטיקה לפרקטיות.',
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: ["עיצוב מודרני", "פעולה שקטה", "תאורת LED משולבת",'עיצוב מותאם אישית', 'חומרים איכותיים', 'פתרונות אחסון חכמים','חומרים עמידים לתנאי חוץ', 'אזורי עבודה מרווחים', 'אחסון מוגן'],
      path: "HomeHoods",
    },
    {
      id: "filter",
      title: "עבודות נירוסטה מקצועיות וייצור מותאם אישית",
      description: "מוצרי נירוסטה סטנדרטיים, לצד ייצור מותאם אישית לפי תכניות ודרישות ספציפיות של הלקוח.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: ["סינון יעיל של חלקיקים", "הפחתת ריחות", "חיסכון באנרגיה"],
      path: "SmokeFilters",
    },

  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            מגוון מנדפים וקולטי אדים – פתרון לכל מטבח
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנו מציעים מבחר רחב של מנדפים תעשייתיים, קולטי אדים ביתיים ומערכות סינון מתקדמות. כל מוצר מותאם אישית ללקוח, לחומרי הגלם הדרושים ולעיצוב הנדרש.
          </p>
        </header>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <div className="h-full">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{category.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-800 mb-3">מאפיינים עיקריים:</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
                        >
                          <Tag className="w-3 h-3 ml-1" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">

                    <Link to={`/${category.path}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        פרטים נוספים
                      </Button>
                    </Link>
                    <Link to={`/Contact?product=${category.id}`}>
                    <Button variant="outline">
                        קבלת הצעת מחיר
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
          מעוניינים לשמוע עוד?
        </h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          הצוות המקצועי שלנו ישמח לייעץ ולהתאים עבורכם את הפתרון המושלם.
          אנו מציעים ייעוץ מקצועי, התאמה אישית ותמיכה לאורך כל הדרך.
        </p>
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
  );
}