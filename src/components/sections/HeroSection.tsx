import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle } from 'lucide-react';
{/*import { Link } from 'react-router-dom'; */ }

const benefits = [
    'איכות ללא פשרות',
    'מומחיות מקצועית',
    'התאמה אישית',
    'שירות מקיף',
];

const HeroSection = () => {
    // פונקציה לגלילה חלקה אל האלמנט המבוקש
    const scrollToSection = (elementId: string): void => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };


    return (
        <div className="rtl">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] bg-gradient-to-r from-gray-950 to-gray-800 text-white overflow-hidden">

                {/* Background Pattern */}
                <div className="absolute inset-0 w-full h-full opacity-10 bg-black bg-opacity-40 sm:bg-opacity-20 md:bg-opacity-10">
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
                </div>

                {/* Content Container */}
                <div className="relative flex items-center min-h-[90vh] w-full h-full py-6 sm:py-8 md:py-16 lg:py-24">

                    <div className="w-full flex justify-end pr-6 sm:pr-10 lg:pr-20 xl:pr-28">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-white w-full lg:max-w-4xl xl:max-w-5xl ml-auto"
                        >
                            {/* Badge */}
                            <span className="inline-block mb-4 bg-[#d6b16c] text-black px-4 py-2 rounded-full text-sm md:text-lg font-medium shadow-md">
                                טי אמ מנדפים הבית לפתרונות מקצועיים בשבילך
                            </span>

                            {/* Headings */}
                            <div className="mb-13">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-4 break-words md:whitespace-normal lg:whitespace-nowrap">
                                    מנדפים, קולטי אדים ועבודות נירוסטה <span className="text-blue-300"> בהתאמה אישית</span>
                                </h1>
                                <h2 className="text-xl sm:text-2xl md:text-3xl text-[#d6b16c] leading-tight">
                                    איכות, עוצמה ושקט נפשי במטבח שלך
                                </h2>
                            </div>

                            {/* Benefits */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 mt-4">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={benefit}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-center space-x-3 rtl:space-x-reverse"
                                    >
                                        <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#d6b16c] flex-shrink-0" />
                                        <span className="text-base md:text-lg">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>


                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4 items-center"
                                >

                                <button
                                    onClick={() => scrollToSection('products-section')}
                                    className="inline-flex justify-center items-center bg-transparent text-white px-8 py-4 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition-colors group cursor-pointer text-lg"
                                >
                                    צפו בפתרונות שלנו
                                    <ArrowDown className="mr-3 h-5 w-5 transform transition-transform duration-300 group-hover:translate-y-1" />
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
