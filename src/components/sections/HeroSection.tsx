import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
    'איכות ללא פשרות',
    'מומחיות מקצועית',
    'התאמה אישית',
    'שירות מקיף',
];

const HeroSection = () => {
    return (

        <div className="relative min-h-[90vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">             
            {/* Background Pattern */}
            <div className="absolute inset-0 w-full h-full">

            <div className="relative w-full h-full">

            <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-30 sm:object-contain md:object-cover lg:object-cover"
                    style={{ 
                        minHeight: '100%',
                        objectPosition: 'center',
                        maxWidth: '100%'
                    }}
                >
                    <source src="/videos/kitchen-hood-hero1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40 sm:bg-opacity-20 md:bg-opacity-10"></div>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-12 md:py-16 lg:py-24 flex items-center">
                <div className="w-full">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white w-full lg:max-w-4xl xl:max-w-5xl"
                    >
                        {/* Badge */}
                        <span className="inline-block mb-3 bg-[#d6b16c] text-black px-4 py-1 rounded-full text-sm md:text-lg font-medium shadow-md">
                            טי אמ מנדפים הבית לפתרונות מקצועיים בשבילך
                        </span>


                        {/* Headings */}
                        <div className="mb-6">

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 break-words md:whitespace-normal lg:whitespace-nowrap">
                                מנדפים, קולטי אדים ועבודות נירוסטה בהתאמה אישית
                            </h1>
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-[#d6b16c] leading-tight">
                                איכות, עוצמה ושקט נפשי במטבח שלך
                            </h2>
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center space-x-2 rtl:space-x-reverse"
                                >
                                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#d6b16c] flex-shrink-0" />
                                    <span className="text-sm md:text-base">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>


                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4" >
                            <Link
                                to="/Products"
                                className="inline-flex justify-center items-center bg-transparent text-white px-6 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition-colors group"
                            >
                                צפו בפתרונות שלנו
                                <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform ltr:rotate-180" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
