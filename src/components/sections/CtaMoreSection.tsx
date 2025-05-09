import { Link } from 'react-router-dom';
import { Award, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const CtaMoreSection = () => {

    return (

        <section className="py-4 sm:py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden"> {/* from-[#d6b16c] to-[#e7c989]*/}
                        <div className="md:flex items-center">
                            <div className="md:w-2/3 p-6 sm:p-8 md:p-12">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                                    className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4"
                                >
                                    מעוניינים לשמוע עוד?
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                                    className="text-gray-200 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed"
                                > הצוות המקצועי שלנו ישמח לייעץ ולהתאים עבורכם את הפתרון המושלם.
                                    אנו מציעים ייעוץ מקצועי, התאמה אישית ותמיכה לאורך כל הדרך.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                                    className="flex flex-wrap gap-4"
                                >                                    <Link
                                    to="/Contact"
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="group flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-white text-blue-600 rounded-full 
                                    font-medium hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"                                    
                                >
                                    {/* text-[#d6b16c] hover:bg-[#f8f3e8] */}
                                        <PhoneCall className="h-4 w-4 sm:h-5 sm:w-5" />
                                        צרו קשר
                                    </Link>

                                    {/*<Link
                                    to="/Products"
                                    className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-all"
                                >
                                    למוצרים שלנו
                                </Link>
                                 */}
                                </motion.div>
                            </div>

                            <div className="hidden sm:flex md:w-1/3 items-center justify-center p-6 sm:p-8 md:p-12">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                    whileHover={{
                                        rotate: [0, 5, -5, 0],
                                        scale: 1.05,
                                        transition: { duration: 0.5 }
                                    }}
                                    className="bg-white/10 p-4 sm:p-6 md:p-8 rounded-full"
                                >
                                    <Award className="h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 text-white" />
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div >
        </section >

    );
};

export default CtaMoreSection;