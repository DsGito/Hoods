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
            <div className="absolute inset-0">

                {/* <img
                    src="/images/kitchen-hood-hero.jpg"
                    alt="מטבח חוץ יוקרתי"
                    className="w-full h-full object-cover opacity-30"
                    /> */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-30"
                >
                    <source src="/videos/kitchen-hood-hero1.mp4" type="video/mp4" />
                </video>
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
                        {/* 
                        <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                            מקצוענים בתחום המטבחים והנירוסטה
                        </div>
                         */}

                        {/* Badge */}
                        <span className="inline-block mb-3 bg-amber-400 text-black px-4 py-1 rounded-full text-sm md:text-lg font-medium">
                            הבית לפתרונות מקצועיים בשבילך
                        </span>


                        {/* Headings */}
                        <div className="mb-6">

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 break-words md:whitespace-normal lg:whitespace-nowrap">
                                מנדפים איכותיים ועבודות נירוסטה בהתאמה אישית
                            </h1>
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-amber-400 leading-tight">
                                איכות, עוצמה ושקט נפשי במטבח שלך
                                {/* 
                            <span className="text-amber-400"> בקליק אחד</span>
                            */}
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
                                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-amber-400 flex-shrink-0" />
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


                            <Link
                                to="/onboarding"
                                className="inline-flex justify-center items-center bg-amber-500 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-amber-400 transition-colors group"
                            >
                                בחרו את הפתרון שלכם
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