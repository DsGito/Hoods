import { Link } from 'react-router-dom';
import { Award } from 'lucide-react'

const CtaMoreSection = () => {
    return (

        <section className="py-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
                    <div className="md:flex items-center">
                        <div className="md:w-2/3 p-12">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                מעוניינים לשמוע עוד?
                            </h2>
                            <p className="text-blue-100 mb-8 text-lg">
                                הצוות המקצועי שלנו ישמח לייעץ ולהתאים עבורכם את הפתרון המושלם.
                                אנו מציעים ייעוץ מקצועי, התאמה אישית ותמיכה לאורך כל הדרך.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/Contact"
                                    className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                                >
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
                            <div className="bg-white/10 p-8 rounded-full">
                                <Award className="h-24 w-24 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CtaMoreSection;