import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Fan, ChefHat, Sun, Flame, ArrowRight } from 'lucide-react';

const services = [
    {
        title: "עיצוב מטבחים",
        description:
            "שירותי עיצוב מטבחים המשלבים אסתטיקה עם פונקציונליות - מהדמיות תלת-ממדיות ועד לתכנון זרימת העבודה האופטימלית.",
        features: ['הדמיות תלת-ממדיות', 'תכנון זרימת עבודה'],
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        icon: <Check />,
        url: "/SrvDesign",
    },
    {
        title: 'מנדפים ומערכות יניקה',
        description: 'התקנה ותחזוקה מקצועית של מערכות יניקה מתקדמות למטבחי פנים וחוץ מכל הסוגים. פתרונות המבטיחים אוויר נקי ועמידה בכל התקנים הנדרשים.',
        features: ['פתרונות מתקדמים למטבחי פנים וחוץ, המבטיחים אוויר נקי ועמידה בתקנים', 'ייעוץ מקיף לבחירת המנדף המתאים ביותר לצרכים שלכם', 'התאמה לכל סוגי המטבחים', 'מערכות חכמות לחיסכון באנרגיה', 'עמידה בתקני בטיחות'],
        image: '/images/gallery1.jpg',
        icon: <Fan className="h-8 w-8" />,
        url: "/",
    },
    {
        title: 'מטבחים בהתאמה אישית',
        description: 'תכנון וביצוע מטבחי פנים פונקציונליים ומעוצבים. שילוב מושלם בין אסתטיקה לפרקטיות.',
        features: ['תכנון וביצוע מטבחים פונקציונליים ומעוצבים לפי דרישות הלקוח', 'עיצוב מותאם אישית', 'חומרים איכותיים', 'פתרונות אחסון חכמים'],
        image: '/images/gallery3.jpg',
        icon: <ChefHat className="h-8 w-8" />,
        url: "/",
    },
    {
        title: 'מטבחי חוץ יוקרתיים',
        description: 'עיצוב וביצוע מטבחי חוץ המשלבים עמידות לתנאי מזג האוויר עם אסתטיקה יוקרתית ופונקציונליות מלאה.',
        features: ['עיצוב וביצוע מטבחי חוץ המשלבים עמידות ואסתטיקה', 'חומרים עמידים לתנאי חוץ', 'אזורי עבודה מרווחים', 'אחסון מוגן'],
        image: '/images/gallery4.jpg',
        icon: <Sun className="h-8 w-8" />,
        url: "/",
    },
    {
        title: 'מנגלים ומערכות צלייה',
        description: 'מגוון פתרונות צלייה, החל ממנגלים בסיסיים ועד למערכות גריל מקצועיות משולבות במטבחי החוץ.',
        features: ['מגוון פתרונות צלייה, ממנגלים בסיסיים ועד מערכות גריל מקצועיות', 'מערכות גז מתקדמות', 'משטחי עבודה נלווים', 'אביזרים משלימים'],
        image: '/images/gallery5.jpg',
        icon: <Flame className="h-8 w-8" />,
        url: "/",
    },
    {
        title: "תכנון והתאמה אישית",
        description:
            "צוות המומחים שלנו יגיע למקום, יבצע מדידות, ייעץ לגבי הפתרון המתאים ביותר, ויתכנן מנדף המותאם במדויק לצרכים שלכם.",
        features: ['ייעוץ מקצועי במקום', 'התאמה מדויקת לצרכים'],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        icon: <Check />,
        url: "/SrvPlanning",
    },
    {
        title: "התקנה מקצועית",
        description:
            "צוות ההתקנות המיומן שלנו מבצע את ההתקנה ברמה הגבוהה ביותר, תוך הקפדה על כל פרט ופרט ושימוש בחומרים האיכותיים ביותר.",
        features: ['התקנה ברמה גבוהה', 'שימוש בחומרים איכותיים'],
        image: '/images/gallery5.jpg',
        icon: <Check />,
        url: "/SrvInstallation",
    },
    {
        title: "תחזוקה ושירות",
        description:
            "אנו מציעים שירותי תחזוקה שוטפים לשמירה על תקינות המנדף לאורך זמן. השירותים כוללים ניקוי מסננים, בדיקת מנועים ועוד.",
        features: ['ניקוי מסננים תקופתי', 'בדיקת מערכות'],
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        icon: <Check />,
        url: "/SrvMaintenance",
    },
    {
        title: "אישורי בטיחות ותקנים",
        description:
            "אנו מסייעים בקבלת כל האישורים הנדרשים מהרשויות, כולל אישורי כיבוי אש, אישורי תברואה ואישורים נוספים.",
        features: ['אישורי כיבוי אש', 'אישורי תברואה'],
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        icon: <Check />,
        url: "/SrvSafety",
    },
];

const ServicesSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            השירותים שלנו
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            אנו מציעים מגוון רחב של שירותים מקצועיים לכל שלבי הפרויקט - מהתכנון הראשוני ועד לתחזוקה השוטפת
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {services.map((service, index) => (
                        <Link to={service.url} key={service.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
                            >
                                <div className="relative h-48 ">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    <div className="absolute bottom-4 right-4 text-black">
                                        <div className="bg-yellow-300 text-gray-900 rounded-full p-2">
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 ">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center text-gray-500">
                                                <Check className="h-5 w-5 text-green-500 ml-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* View All Services Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="/services"
                        className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors group"
                    >
                        לכל השירותים שלנו
                        <ArrowRight className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                    </a>

                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
