import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SummarySection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex items-center gap-12">

                    <div >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold mb-2 text-center">מי אנחנו</h2>
                            <p className="text-lg text-gray-600 ">
                            טי אמ מנדפים - T.M mindafim מתמחה בתכנון, ייצור והתקנה של מערכות מנדפים וקולטי אדים למטבחים בהתאמה אישית,
                                לצד מערכות נירוסטה ייחודיות תוך הקפדה על חדשנות טכנולוגית ואיכות בלתי מתפשרת.
                                עם ניסיון עשיר בתחום, אנו מלווים את לקוחותינו משלב הרעיון ועד למסירה – במקצועיות, יצירתיות ודיוק.
                            </p>

                            <p className="text-xl font-light leading-relaxed ">
                                "חזוננו הוא לספק מנדפים שלא רק עומדים בתקנים הנדרשים,
                                אלא גם תורמים לסביבת עבודה בטוחה יותר, נקייה יותר ויעילה יותר."
                            </p>

                        </motion.div>

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


                </div>
            </div>
        </section>
    );
};

export default SummarySection;
