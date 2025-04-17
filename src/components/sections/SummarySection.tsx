import { Shield, Settings, Wrench, ThumbsUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        title: "איכות ללא פשרות",
        description: "חומרי גלם איכותיים העומדים בתקנים",
        icon: <Shield className="h-6 w-6 text-blue-600" />,
    },
    {
        title: "מומחיות מקצועית",
        description: "שנים של ניסיון בתכנון, ייצור והתקנה",
        icon: <Settings className="h-6 w-6 text-green-600" />,
    },
    {
        title: "התאמה אישית",
        description: "פתרונות מותאמים לצרכים שלכם",
        icon: <Wrench className="h-6 w-6 text-purple-600" />,
    },
    {
        title: "שירות מקיף",
        description: "ליווי מקצועי משלב הייעוץ ועד התחזוקה",
        icon: <ThumbsUp className="h-6 w-6 text-red-600" />,
    },
];

const SummarySection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex items-center gap-12">

                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold mb-2">מי אנחנו</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                ברוכים הבאים למנדפי מטבח, המתמחה בתכנון, ייצור והתקנה של מערכות מקצועיות בהתאמה אישית -
                                מטבחים מקצועיים, מנדפים וקולטי אדים למטבחים עסקיים וביתיים, ועבודות נירוסטה מותאמות אישית באיכות הגבוהה ביותר.
                                עם ניסיון רב שנים בתחום, אנו מספקים פתרונות מתקדמים המשלבים איכות חומרים גבוהה, פונקציונליות,
                                עיצוב מוקפד עם דגש על חדשנות ואיכות ללא פשרות למסעדות, בתי קפה, מאפיות, מלונות, ולקוחות פרטיים.
                                אנו נעים לצידכם לאורך כל הדרך תוך מתן ייעוץ מקצועי מהתכנון הראשוני ועד לביצוע המושלם.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.2 }}
                                    className="flex items-start space-x-2 rtl:space-x-reverse"
                                >
                                    <div className="flex-shrink-0 p-1 rounded-full">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{benefit.title}</h3>
                                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-center mt-12"
                        >
                            <a
                                href="/About"
                                className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors group"
                            >
                                קראו עוד עלינו
                                <ArrowRight className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform rtl:rotate-180" />

                            </a>
                        </motion.div>

                    </div>

                    <div className="md:w-1/2 mb-8 md:mb-0">
                    <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                        <img
                            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                            alt="המטבח המקצועי שלכם"
                            className="rounded-xl shadow-lg w-full h-auto"
                        />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SummarySection;
