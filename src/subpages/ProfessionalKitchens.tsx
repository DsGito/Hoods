import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, PieChart, Utensils } from "lucide-react";

export default function ProfessionalKitchens() {
  const kitchenTypes = [
    {
      id: "restaurant-kitchen",
      title: "מטבחי מסעדות",
      description: "מטבחים לכל סוגי המסעדות - מותאמים לנפח העבודה, תפריט, ומבנה הצוות.",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "תכנון זרימת עבודה יעילה",
        "אזורים מוגדרים לסוגי הבישול השונים",
        "עמדות עבודה מרובות",
        "מנדפים תעשייתיים חזקים",
        "משטחי נירוסטה עמידים במיוחד",
      ],
    },
    {
      id: "cafe-kitchen",
      title: "מטבחי בתי קפה ומאפיות",
      description: "מטבחים קומפקטיים המותאמים לחללים קטנים ולתפריטים מגוונים של בתי קפה ומאפיות.",
      image: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "ניצול מקסימלי של חלל קטן",
        "פתרונות אחסון חכמים",
        "אזורי הכנת מזון והגשה נפרדים",
        "מערכות קירור למאפים וקינוחים",
        "עמידות בפני טמפרטורות גבוהות לתנורי אפייה",
      ],
    },
    {
      id: "catering-kitchen",
      title: "מטבחי קייטרינג",
      description: "מטבחים לחברות קייטרינג המייצרות כמויות גדולות של מזון - מתוכננים לייעילות מקסימלית ונפח עבודה גבוה.",
      image: "https://images.unsplash.com/photo-1631373631838-2bbea8c94e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "מתקני בישול בנפח גדול",
        "אזורי אחסון מורחבים למזון ואריזות",
        "מערכות קירור תעשייתיות",
        "אזורי אריזה ייעודיים",
        "ציוד להעמסה ושינוע",
      ],
    },
    {
      id: "institutional-kitchen",
      title: "מטבחים מוסדיים",
      description: "מטבחים לבתי חולים, בתי ספר, אולמות אירועים ומוסדות גדולים - מותאמים להכנת מזון בכמויות גדולות.",
      image: "https://images.unsplash.com/photo-1588644525273-f37b60d78512?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "ציוד בישול תעשייתי בנפח גדול",
        "מערכות הגיינה וסטריליזציה מתקדמות",
        "קווי הגשה יעילים",
        "מערכות אוורור וסינון חזקות במיוחד",
        "פתרונות אחסון בקירור וללא קירור",
      ],
    },
    {
      id: "hotel-kitchen",
      title: "מטבחי מלונות",
      description: "מטבחים מורכבים למלונות - כוללים מטבח מרכזי, מטבחי קצה, ברים ומטבחי חדר אוכל.",
      image: "https://images.unsplash.com/photo-1609167830220-7164aa360951?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "מערכות מודולריות לגמישות מקסימלית",
        "אזורים מוגדרים לארוחות בוקר, צהריים וערב",
        "מערכות לוגיסטיות מתקדמות",
        "פתרונות לשירות חדרים",
        "ציוד לאירוח אירועים גדולים",
      ],
    },
  ];

  const kitchenComponents = [
    {
      title: "אזורי בישול והכנה",
      description: "אזורים מוגדרים לסוגי בישול שונים, עם ציוד ייעודי וזרימת עבודה יעילה.",
      image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "מערכות מנדפים וסינון",
      description: "מנדפים מקצועיים עם מערכות סינון מתקדמות להסרת עשן, אדים וריחות.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "משטחי עבודה",
      description: "משטחי עבודה מנירוסטה איכותית, עמידים במיוחד לשימוש אינטנסיבי.",
      image: "https://images.unsplash.com/photo-1588644525273-f37b60d78512?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "פתרונות אחסון",
      description: "מערכות אחסון יעילות - מדפים, ארונות, ועגלות מנירוסטה לאחסון חומרי גלם וציוד.",
      image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "מערכות קירור",
      description: "פתרונות קירור - מקררים תעשייתיים, חדרי קירור וחדרי הקפאה בגדלים שונים.",
      image: "https://images.unsplash.com/photo-1553787793-87cc1ca3c174?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "כיורים וברזים",
      description: "כיורים תעשייתיים בגדלים שונים, עם ברזים מקצועיים וחיבורים תקניים.",
      image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                מטבחים מקצועיים
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
                  <li className="text-gray-900 font-medium">מטבחים מקצועיים</li>
                </ol>
              </nav>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/Contact?product=professional-kitchen">
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
                  src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="מטבחים מקצועיים"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-4">מטבחים מקצועיים בהתאמה אישית</h2>
                <p className="text-gray-600 mb-6">
                  סטיל קיטשן מתמחה בתכנון, ייצור והתקנה של מטבחים מקצועיים מותאמים לצרכיו הייחודיים של כל לקוח. 
                  המטבחים שלנו מיוצרים מנירוסטה איכותית, עמידים לאורך זמן ומתוכננים לנצל בצורה מיטבית את החלל הקיים תוך מתן דגש על יעילות תפעולית.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-gray-600">נירוסטה 304/316 איכותית</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-gray-600">תכנון זרימת עבודה מיטבית</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-gray-600">התאמה מושלמת לחלל ולצרכים</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-gray-600">עמידה בכל התקנים הרלוונטיים</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Link to="/Contact?product=professional-kitchen">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      לקבלת הצעת מחיר
                    </Button>
                  </Link>
                  <Link to="/Projects">
                    <Button variant="outline">
                      צפו בגלריית פרויקטים
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">היתרונות של מטבח מקצועי מותאם אישית</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "חיסכון בזמן",
                description: "תכנון חכם של זרימת העבודה במטבח שמאפשר עבודה יעילה יותר וחסכון בזמן בהכנת המנות."
              },
              {
                icon: PieChart,
                title: "חיסכון בעלויות",
                description: "התקנת מערכות יעילות, ציוד איכותי ותכנון נכון מאפשרים לחסוך בהוצאות אנרגיה וכוח אדם."
              },
              {
                icon: Utensils,
                title: "סביבת עבודה נוחה",
                description: "מטבח מתוכנן היטב יוצר סביבת עבודה נוחה יותר, מה שמשפר את שביעות רצון העובדים ואיכות העבודה."
              },
              {
                icon: Users,
                title: "חוויית לקוח משופרת",
                description: "מטבח יעיל מאפשר הכנת מנות מהירה יותר, איכותית יותר וקבועה יותר, מה שמשפר את חוויית הלקוח."
              },
            ].map((benefit, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-xl shadow-md overflow-hidden mb-8`}
                >
                  <div className="md:w-2/5 flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))
              }
          </div>
        </section>

        {/* Kitchen Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">סוגי מטבחים מקצועיים</h2>
          
          {kitchenTypes.map((kitchen, index) => (
            <div 
              key={kitchen.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-xl shadow-md overflow-hidden mb-8`}
            >
              <div className="md:w-2/5">
                <img
                  src={kitchen.image}
                  alt={kitchen.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold mb-3">{kitchen.title}</h3>
                <p className="text-gray-600 mb-6">{kitchen.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">מאפיינים עיקריים:</h4>
                  <ul className="space-y-2">
                    {kitchen.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  <Link to="/Contact?product=${kitchen.id}">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      לקבלת הצעת מחיר
                    </Button>
                  </Link>
                  <Button variant="outline">
                    למידע נוסף
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Kitchen Components */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">רכיבי המטבח המקצועי</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kitchenComponents.map((component, index) => (
  <div key={index} className="overflow-hidden hover:shadow-lg transition-shadow mb-8">
    <div className="relative h-48">
      <img
        src={component.image}
        alt={component.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3">{component.title}</h3>
      <p className="text-gray-600">{component.description}</p>
    </div>
  </div>
))
}
          </div>
        </section>

        {/* Design Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">תהליך התכנון וההתקנה</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">ייעוץ ראשוני</h3>
                  <p className="text-gray-600">
                    פגישת ייעוץ לזיהוי הצרכים, המגבלות והחזון שלכם. נבצע מדידות ונלמד את דרישות התפעול שלכם.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">תכנון מפורט</h3>
                  <p className="text-gray-600">
                    הכנת תכנית מפורטת כולל הדמיות תלת-ממדיות, מפרטים טכניים, בחירת חומרים וציוד.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">ייצור</h3>
                  <p className="text-gray-600">
                    ייצור כל רכיבי המטבח במפעל שלנו תוך שימוש בחומרים איכותיים וטכנולוגיות מתקדמות.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">4</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">התקנה</h3>
                  <p className="text-gray-600">
                    התקנה מקצועית על ידי צוות מיומן, תוך הקפדה על כל פרט ופרט.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">5</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">הדרכה ומסירה</h3>
                  <p className="text-gray-600">
                    הדרכה מקיפה על השימוש בציוד ובמערכות, ומסירה מסודרת של המטבח החדש.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">6</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">שירות ותחזוקה</h3>
                  <p className="text-gray-600">
                    שירות תחזוקה מקיף לאחר ההתקנה, כולל אחריות, תיקונים ושדרוגים עתידיים.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">לקוחות מרוצים</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "המטבח המקצועי שסטיל קיטשן תכננו והתקינו עבורנו חולל מהפכה בצורת העבודה שלנו. היעילות השתפרה באופן דרמטי והצוות נהנה מסביבת עבודה נוחה ומתקדמת.",
                author: "רונן לוי, שף ובעלים של מסעדת 'לואיז'",
                image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
              },
              {
                quote: "התהליך היה מקצועי מתחילתו ועד סופו. צוות התכנון של סטיל קיטשן הקשיב לכל הדרישות שלנו והציע פתרונות יצירתיים. התוצאה היא מטבח שהוא התגשמות החלום שלנו.",
                author: "דנה כהן, מנהלת קייטרינג 'טעם של בית'",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
              },
            ].map((testimonial, index) => (
                <div key={index} className="shadow-sm mb-8">
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
                </div>
              ))
              }
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              מוכנים להקים או לשדרג את המטבח המקצועי שלכם?
            </h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              צרו קשר עכשיו לקבלת ייעוץ מקצועי וללא התחייבות. המומחים שלנו ישמחו לעזור לכם לתכנן את המטבח המקצועי המושלם עבורכם.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/Contact?product=professional-kitchen">
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
