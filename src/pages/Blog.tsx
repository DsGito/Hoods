import { SearchIcon, User, Calendar, Clock, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'איך לבחור את המנדף המתאים למטבח שלך?',
      excerpt:
        'מדריך מקיף לבחירת מנדף מטבח מקצועי, כולל התייחסות לגודל, עוצמה, ומאפיינים חשובים נוספים.',
      content: 'תוכן המאמר המלא יופיע כאן...',
      author: 'רותם לוי',
      authorRole: 'יועץ מטבחים',
      date: '21 בינואר 2025',
      readTime: 6,
      category: 'מדריכים',
      image: '/images/blog1.jpg',
      featured: false
    },
    {
      id: 2,
      title: 'תחזוקת מנדפים: טיפים חשובים לשמירה על תקינות',
      excerpt:
        'המלצות מקצועיות לתחזוקה שוטפת של מנדפי מטבח, כולל לוח זמנים מומלץ לבדיקות ותחזוקה.',
      content: 'תוכן המאמר המלא יופיע כאן...',
      author: 'אסף ברק',
      authorRole: 'מומחה לתחזוקה',
      date: '15 בינואר 2025',
      readTime: 7,
      category: 'תחזוקה',
      image: '/images/blog2.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'חידושים טכנולוגיים בעולם המנדפים',
      excerpt:
        'סקירה של החידושים האחרונים בתחום מנדפי המטבח, כולל טכנולוגיות חדשות וטרנדים מובילים.',
      content: 'תוכן המאמר המלא יופיע כאן...',
      author: 'מיכל גולן',
      authorRole: 'עורכת טכנולוגיה',
      date: '10 בינואר 2025',
      readTime: 5,
      category: 'חדשות',
      image: '/images/blog3.jpg',
      featured: false
    },

    {
      id: 4,
      title: "כיצד לבחור את המנדף המתאים לעסק שלכם?",
      excerpt: "מדריך מקיף לבחירת מנדף למסעדה, בית קפה או מטבח תעשייתי - כל מה שצריך לדעת לפני שמזמינים.",
      content: "תוכן המאמר המלא יופיע כאן...",
      author: "דני כהן",
      authorRole: "מהנדס ראשי",
      date: "2023-10-15",
      readTime: 8,
      category: "מדריכים",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      featured: true
    },
    {
      id: 5,
      title: "תקן 1001 חלק 6 - מה צריך לדעת?",
      excerpt: "הסבר מפורט על דרישות התקן הישראלי למנדפים ומערכות אוורור במטבחים מסחריים ואיך לעמוד בהן.",
      content: "תוכן המאמר המלא יופיע כאן...",
      author: "יעל לוי",
      authorRole: "יועצת בטיחות",
      date: "2023-09-22",
      readTime: 10,
      category: "רגולציה",
      image: "https://images.unsplash.com/photo-1581092160607-ee23d8c9ed65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      featured: false
    },
    {
      id: 6,
      title: "5 טעויות נפוצות בתחזוקת מנדפים",
      excerpt: "הטעויות הנפוצות ביותר שעסקים עושים בתחזוקת מנדפים, ואיך להימנע מהן כדי להבטיח בטיחות ויעילות.",
      content: "תוכן המאמר המלא יופיע כאן...",
      author: "רונית ישראלי",
      authorRole: "מנהלת תפעול",
      date: "2023-08-18",
      readTime: 6,
      category: "תחזוקה",
      image: "https://images.unsplash.com/photo-1571942676516-bcab84649e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      featured: true
    },
    {
      id: 7,
      title: "חיסכון באנרגיה במערכות אוורור מסחריות",
      excerpt: "כיצד לתכנן ולהפעיל מערכות אוורור יעילות אנרגטית שיחסכו לעסק שלכם אלפי שקלים בשנה.",
      content: "תוכן המאמר המלא יופיע כאן...",
      author: "גלעד שמואלי",
      authorRole: "יועץ אנרגיה",
      date: "2023-07-05",
      readTime: 9,
      category: "יעילות אנרגטית",
      image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      featured: false
    },
    {
      id: 8,
      title: "מערכות סינון מתקדמות - טכנולוגיות חדשות",
      excerpt: "סקירה של טכנולוגיות הסינון החדשניות ביותר בתחום והיתרונות שהן מביאות למטבחים מסחריים.",
      content: "תוכן המאמר המלא יופיע כאן...",
      author: "מאיה לוי",
      authorRole: "מנהלת מחקר ופיתוח",
      date: "2023-06-12",
      readTime: 7,
      category: "טכנולוגיה",
      image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      featured: true
    },
    {
      id: 9,
      title: "בטיחות אש במטבחים - מדריך מקיף",
      excerpt: "כל מה שצריך לדעת על מניעת שריפות במטבחים מסחריים והתפקיד החיוני של מנדפים בבטיחות אש.",
      content: "תוכן המאמר המלא יופיע כאן...",
      author: "אלון כהן",
      authorRole: "יועץ בטיחות אש",
      date: "2023-05-28",
      readTime: 12,
      category: "בטיחות",
      image: "https://images.unsplash.com/photo-1603792907191-89e55f70099a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      featured: false
    },
  ];

  return (
    <div className="rtl">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">בלוג מקצועי</h1>
          <h1 className="text-4xl font-bold text-center text-gray-100 mb-4">
            הבלוג המקצועי שלנו
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            מאמרים, טיפים וחדשות מעולם המנדפים המקצועיים
          </p>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            מאמרים, טיפים והדרכות בנושא מנדפים, מערכות אוורור, סינון ובטיחות במטבחים מסחריים וביתיים
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="חפש במאמרים..."
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
                <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {blogPosts.map(post => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-48 w-full object-cover md:h-full"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{post.category}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>

                      <div className="flex flex-wrap justify-between items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center mb-2 md:mb-0">
                          <User className="w-4 h-4 ml-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 ml-1" />
                          <span>{(post.date)}</span>
                        </div>
                        <div className="flex items-center mt-2 md:mt-0">
                          <Clock className="w-4 h-4 ml-1" />
                          <span>{post.readTime} דקות קריאה</span>
                        </div>
                      </div>


                      <Button variant="outline" className="flex items-center">
                        <span>להמשך קריאה</span>
                        <ArrowRight className="w-4 h-4 mr-1" />
                      </Button>

                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">

            </div>
          </div>


        </div>

        {/* Newsletter Subscription */}
        <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">הצטרפו לעדכונים מהבלוג שלנו</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            קבלו עדכונים על מאמרים חדשים, טיפים מקצועיים ועדכוני רגולציה ישירות לתיבת המייל
          </p>
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="הזינו את כתובת המייל שלכם"
                className="bg-white/90 text-gray-900 placeholder:text-gray-500 flex-1"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                הרשמה לעדכונים
              </Button>
            </div>
            <p className="text-sm mt-2 text-blue-100">אנו מכבדים את פרטיותכם ולא נשתף את המייל שלכם עם גורמים שלישיים</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blog
