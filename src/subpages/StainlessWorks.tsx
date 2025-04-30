import { Link } from "react-router-dom";
import { Check, Droplets, Shield, Hammer, ThermometerSnowflake } from "lucide-react";
import CtaMoreSection from '../components/sections/CtaMoreSection';

export default function StainlessWorks() {
    const stainlessProducts = [
        {
            id: "worktables",
            title: "שולחנות עבודה",
            description: "שולחנות עבודה מנירוסטה איכותית בכל גודל והתאמה אישית - עם או בלי מדפים, מגירות, וכיורים.",
            image: "https://images.unsplash.com/photo-1588644525273-f37b60d78512?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "נירוסטה 304 (או 316 לפי דרישה)",
                "עובי פלטה 1.5 מ\"מ",
                "חיזוקים תחתונים",
                "רגליים מתכווננות",
                "אפשרות לגלגלים",
            ],
        },
        {
            id: "sinks",
            title: "כיורים תעשייתיים",
            description: "כיורים בכל גודל ועומק, כיורים בודדים או כפולים, עם משטחי ניקוז, וכיורים משולבים בשולחנות עבודה.",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "כיורים עמוקים במיוחד",
                "ריתוכים מושלמים",
                "מעמד תחתון חזק",
                "אפשרות למשטחי ניקוז",
                "התאמה לברזים תעשייתיים",
            ],
        },
        {
            id: "shelving",
            title: "מדפים ומערכות אחסון",
            description: "מדפים מנירוסטה לתליה על הקיר או כיחידות עצמאיות, מותאמים לעומס גבוה ולשימוש מקצועי.",
            image: "https://images.unsplash.com/photo-1590590470233-195e8f45cd76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "עומס עד 150 ק\"ג למדף",
                "מבנה מודולרי",
                "התאמה לתקני בטיחות מזון",
                "קלים לניקוי ולתחזוקה",
                "אפשרות לגלגלים לניידות",
            ],
        },
        {
            id: "cabinets",
            title: "ארונות וארוניות",
            description: "ארונות מנירוסטה עם דלתות, מגירות ומדפים פנימיים - מתאימים לאחסון כלים, ציוד ומזון.",
            image: "https://images.unsplash.com/photo-1584505192000-bfcfd8449c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "דלתות עם אטימה היקפית",
                "אפשרות לנעילה",
                "מגירות טלסקופיות",
                "אפשרות חימום/קירור",
                "התאמה לדרישות HACCP",
            ],
        },
        {
            id: "trolleys",
            title: "עגלות שירות",
            description: "עגלות נירוסטה לשינוע מזון, כלים וציוד במטבח - עם מדפים, דפנות ואפשרויות נוספות.",
            image: "https://images.unsplash.com/photo-1589269146448-8610d99c9f4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "גלגלים איכותיים",
                "מדפים מחוזקים",
                "אפשרות לדפנות",
                "ידיות נוחות לדחיפה",
                "קלות לניקוי ולתחזוקה",
            ],
        },
        {
            id: "custom",
            title: "פריטים בהתאמה אישית",
            description: "כל פריט נירוסטה שדמיינתם - מתאפשר אצלנו. ייצור מותאם לפי מידות, עיצוב ודרישות מיוחדות.",
            image: "https://images.unsplash.com/photo-1574351286859-5c4afec7d762?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            features: [
                "תכנון הנדסי מדויק",
                "ביצוע בכל מידה",
                "יישום פתרונות ייחודיים",
                "שילוב חומרים נוספים",
                "אפשרויות גימור מגוונות",
            ],
        },
    ];

    const stainlessQualities = [
        {
            icon: Shield,
            title: "עמידות גבוהה",
            description: "עמידות מעולה בפני קורוזיה, מכות, שריטות וכל מפגעי היומיום במטבח המקצועי."
        },
        {
            icon: Droplets,
            title: "קלה לניקוי",
            description: "משטח לא נקבובי שאינו סופג ריחות או פתוגנים, וקל במיוחד לניקוי ולחיטוי."
        },
        {
            icon: ThermometerSnowflake,
            title: "עמידות בטמפרטורות",
            description: "עמידה בטמפרטורות קיצוניות - מקור עד חום גבוה, אידיאלית למגוון שימושים במטבח."
        },
        {
            icon: Hammer,
            title: "אורך חיים",
            description: "בעלת אורך חיים יוצא דופן, חסכונית לטווח ארוך ומשמרת את איכותה ומראה לאורך שנים."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                עבודות נירוסטה מקצועיות
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
                                    <li className="text-gray-900 font-medium">עבודות נירוסטה</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl overflow-hidden shadow-md">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src="/images/img16.jpg"
                                    alt="עבודות נירוסטה מקצועיות"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8">
                                <h2 className="text-2xl font-bold mb-4">עבודות נירוסטה מקצועיות וייצור מותאם אישית</h2>
                                <p className="text-gray-600 mb-6">
                                    טי אם מנדפים מתמחה בעבודות נירוסטה מקצועיות לתחום המטבחים התעשייתיים, בתי מלון, מסעדות ובתי עסק במגזר המסחרי.
                                    אנו מציעים מגוון רחב של מוצרי נירוסטה סטנדרטיים, לצד ייצור מותאם אישית לפי תכניות ודרישות ספציפיות של הלקוח.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">נירוסטה באיכות גבוהה</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">גימורים מקצועיים</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">ריתוכים מושלמים ללא פגמים</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-1">
                                            <Check className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-gray-600">תכנון והתאמה אישית</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Stainless Steel? */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">למה נירוסטה?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {stainlessQualities.map((quality, index) => (
                            <div key={index} className="text-center hover:shadow-md transition-shadow mb-8">
                                <div className="p-6">
                                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                                        <quality.icon className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{quality.title}</h3>
                                    <p className="text-gray-600">{quality.description}</p>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </section>

                {/* Types of Stainless Steel Products */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">מוצרי נירוסטה מקצועיים</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stainlessProducts.map((product) => (
                            <div key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col mb-8">
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-60 object-cover"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                                    <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>

                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-2">מאפיינים עיקריים:</h4>
                                        <ul className="space-y-1">
                                            {product.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        ))
                        }
                    </div>
                </section>

                {/* Our Production Process */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">תהליך הייצור שלנו</h2>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="p-8">
                            <div className="flex flex-col space-y-8">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                                            <span className="text-2xl font-bold text-blue-600">1</span>
                                        </div>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h3 className="text-xl font-bold mb-2">תכנון והנדסה</h3>
                                        <p className="text-gray-600">
                                            צוות המהנדסים שלנו מתכנן את המוצר לפי דרישות הלקוח, תוך שימוש בתוכנות CAD מתקדמות.
                                            אנו מייצרים שרטוטים מפורטים המתאימים לסטנדרטים הגבוהים ביותר בתעשייה.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-0.5 h-8 bg-blue-200 mx-auto md:mr-16 md:ml-auto"></div>

                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                                            <span className="text-2xl font-bold text-blue-600">2</span>
                                        </div>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h3 className="text-xl font-bold mb-2">חיתוך וכיפוף</h3>
                                        <p className="text-gray-600">
                                            חיתוך וכיפוף פלדת הנירוסטה בדיוק מרבי באמצעות מכונות CNC מתקדמות.
                                            אנו מבצעים בקרת איכות קפדנית בכל שלב כדי להבטיח דיוק מושלם.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-0.5 h-8 bg-blue-200 mx-auto md:mr-16 md:ml-auto"></div>

                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                                            <span className="text-2xl font-bold text-blue-600">3</span>
                                        </div>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h3 className="text-xl font-bold mb-2">ריתוך והרכבה</h3>
                                        <p className="text-gray-600">
                                            הרתכים המיומנים שלנו מבצעים ריתוכים מושלמים, ללא פגמים או חללים.
                                            תהליך ההרכבה מבוצע בקפידה תוך בקרת איכות רציפה.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-0.5 h-8 bg-blue-200 mx-auto md:mr-16 md:ml-auto"></div>

                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                                            <span className="text-2xl font-bold text-blue-600">4</span>
                                        </div>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h3 className="text-xl font-bold mb-2">גימור וליטוש</h3>
                                        <p className="text-gray-600">
                                            תהליכי גימור וליטוש מקצועיים להשגת המראה והמרקם המושלמים.
                                            אנו מציעים מגוון רחב של גימורים בהתאם לדרישות הלקוח.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-0.5 h-8 bg-blue-200 mx-auto md:mr-16 md:ml-auto"></div>

                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                                            <span className="text-2xl font-bold text-blue-600">5</span>
                                        </div>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h3 className="text-xl font-bold mb-2">בקרת איכות ומשלוח</h3>
                                        <p className="text-gray-600">
                                            בדיקה סופית של כל מוצר לפני אריזה ומשלוח, כדי להבטיח שהוא עומד בסטנדרטים הגבוהים ביותר שלנו ושל לקוחותינו.
                                        </p>
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