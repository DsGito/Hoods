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
            <section className="relative min-h-[70vh] md:min-h-[90vh] bg-gradient-to-r from-gray-950 to-gray-800 text-white overflow-hidden flex items-center">

                {/* Background Pattern */}
                <div className="absolute inset-0 w-full h-full opacity-10 bg-black bg-opacity-40 sm:bg-opacity-20 md:bg-opacity-10">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-30"
                        style={{
                            minHeight: '500%',
                            objectPosition: 'center 30%', // מיקום טוב יותר במובייל
                            maxWidth: '100%'
                        }}
                    >
                        <source src="/videos/kitchen-hood-hero1.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Content Container */}
                <div className="relative w-full py-6 md:py-16 lg:py-24">

                    <div className="w-full flex justify-end px-4 sm:pr-10 lg:pr-20 xl:pr-28">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-white w-full lg:max-w-4xl xl:max-w-5xl ml-auto"
                        >
                            {/* Badge */}
                            <span className="inline-block mb-3 md:mb-4 bg-[#d6b16c] text-black px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm md:text-lg font-medium shadow-md">
                                טי אמ מנדפים הבית לפתרונות מקצועיים בשבילך
                            </span>

                            {/* Headings */}
                            <div className="mb-6 md:mb-10">
                                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-2 md:mb-4 break-words md:whitespace-normal lg:whitespace-nowrap">
                                    מנדפים, קולטי אדים ועבודות נירוסטה <span className="text-blue-300"> בהתאמה אישית</span>
                                </h1>
                                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-[#d6b16c] leading-tight">
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
                                className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center"
                            >

                                <button
                                    onClick={() => scrollToSection('products-section')}
                                    className="inline-flex justify-center items-center bg-transparent text-white px-6 sm:px-8 py-3 sm:py-4 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition-colors group cursor-pointer text-base sm:text-lg w-full sm:w-auto"
                                >
                                    צפו בפתרונות שלנו
                                    <ArrowDown className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 transform transition-transform duration-300 group-hover:translate-y-1" />
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
                        <path
                            fill="#f9fafb"
                            fillOpacity="1"
                            d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,53.3C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
                        ></path>
                    </svg>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
