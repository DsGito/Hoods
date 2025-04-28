import { Link } from 'react-router-dom';
import { Award, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const CtaMoreSection = () => {

    // אנימציות
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (

        <section className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
                        <div className="md:flex items-center">
                            <div className="md:w-2/3 p-12">
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    מעוניינים לשמוע עוד?
                                </h2>
                                <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                                    הצוות המקצועי שלנו ישמח לייעץ ולהתאים עבורכם את הפתרון המושלם.
                                    אנו מציעים ייעוץ מקצועי, התאמה אישית ותמיכה לאורך כל הדרך.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        to="/Contact"
                                        className="group flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                                    >
                                        <PhoneCall className="h-5 w-5" />
                                        צרו קשר
                                    </Link>

                                    {/*<Link
                                    to="/Products"
                                    className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-all"
                                >
                                    למוצרים שלנו
                                </Link>
                                 */}
                                </div>
                            </div>

                            <div className="md:w-1/3 flex items-center justify-center p-12">
                                <motion.div
                                    whileHover={{
                                        rotate: [0, 5, -5, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                   className="bg-white/10 p-8 rounded-full"
                                >
                                    <Award className="h-24 w-24 text-white" />
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>

    );
};

export default CtaMoreSection;