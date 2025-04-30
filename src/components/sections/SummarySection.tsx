import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SummarySection = () => {
    return (
        <section className="relative bg-white py-10">
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-100 to-white"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >

                        <div className="relative mb-4 sm:mb-8">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">מי אנחנו</h2>
                            <div className="h-1 w-16 bg-[#d6b16c] rounded-full mb-4 sm:mb-6"></div>
                        </div>

                        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                        טי אמ מנדפים מתמחה בתכנון, ייצור והתקנה של מערכות מנדפים וקולטי אדים למטבחים בהתאמה אישית,
                            לצד מערכות נירוסטה ייחודיות תוך הקפדה על חדשנות טכנולוגית ואיכות בלתי מתפשרת.
                            עם ניסיון עשיר בתחום, אנו מלווים את לקוחותינו משלב הרעיון ועד למסירה – במקצועיות, יצירתיות ודיוק.
                        </p>

                        <blockquote className="border-r-4 border-[#d6b16c] pr-4 py-2 mb-8">
                            <p className="text-xl font-light leading-relaxed text-gray-700 italic">
                                "חזוננו הוא לספק מנדפים שלא רק עומדים בתקנים הנדרשים,
                                אלא גם תורמים לסביבת עבודה בטוחה יותר, נקייה יותר ויעילה יותר."
                            </p>
                        </blockquote>

                    </motion.div>

                    {/* About Us Images */}
                    <motion.div
                        className="lg:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full max-w-md lg:max-w-full">
                            <div className="space-y-2 sm:space-y-4">
                                <div className="overflow-hidden rounded-lg shadow-lg h-32 sm:h-48 border-r-4 border-primary">
                                    <img
                                        src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                        alt="Kitchen equipment"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-lg h-24 sm:h-32 border-r-4 border-[#d6b16c]">
                                    <img
                                        src='/images/img8.jpg'
                                        alt="Restaurant kitchen"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 sm:space-y-4 mt-4 sm:mt-8">
                                <div className="overflow-hidden rounded-lg shadow-lg h-24 sm:h-32 border-r-4 border-[#d6b16c]">
                                    <img
                                        src='/images/img29.jpg'
                                        alt="Kitchen hood"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-lg h-32 sm:h-48 border-r-4 border-primary">
                                    <img
                                        src='/images/img11.jpg'
                                        alt="Professional kitchen"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 sm:mt-6 text-center"
                >
                <Link
                    to="/About"
                    className="inline-flex items-center bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium hover:bg-[#d6b16c] transition-colors group"
                    >
                    קראו עוד עלינו
                    <ArrowRight className="mr-2 h-4 sm:h-5 w-4 sm:w-5 transform group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                </Link>
            </motion.div>
        </section>
    );
};

export default SummarySection;
