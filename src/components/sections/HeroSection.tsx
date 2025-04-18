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

        <div className="relative h-[90vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
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
                    <source src="/videos/kitchen-hood-hero2.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
                <div className="grid grid-cols-1 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white"
                    >
                        {/* 
                        <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                            מקצוענים בתחום המטבחים והנירוסטה
                        </div>
                         */}
                        <span className="bg-yellow-300 text-black px-4 py-1 rounded-full text-lg font-medium">
                            פתרונות מקצועיים בשבילך
                        </span>



                        <div className="flex flex-wrap items-center ">
                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight whitespace-nowrap">
                                מנדפים איכותיים ועבודות נירוסטה בהתאמה אישית
                            </h1>
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-yellow-300 mb-6 leading-tight whitespace-nowrap">
                                איכות, עוצמה ושקט נפשי במטבח שלך
                                {/* 
                            <span className="text-yellow-300"> בקליק אחד</span>
                            */}
                            </h2>
                        </div>


                        {/* Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center space-x-2 rtl:space-x-reverse"
                                >
                                    <CheckCircle className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </motion.div>
                            ))}
                        </div>


                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="flex space-x-4 rtl:space-x-reverse"
                        >

                            <Link
                                to="/Products"
                                className="inline-flex items-center bg-white-400 text-white px-8 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition-colors group"
                            >
                                צפו בפתרונות שלנו
                                <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform ltr:rotate-180" />
                            </Link>


                            <Link
                                to="/onboarding"
                                className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors group"
                            >
                                בחרו את הפתרון שלכם
                                <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform ltr:rotate-180" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>


                {/* Features Grid */}

                <div className="container mx-auto px-4">
                    {/* 
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                    >
                        {[
                            { title: 'לקוחות מרוצים', value: '+1000' },
                            { title: 'פרויקטים', value: '+5000' },
                            { title: 'שנות ניסיון', value: '20+' },
                            { title: 'חיסכון שנתי', value: '30%' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                className="bg-white/10 backdrop-blur-md  rounded-lg p-4 justify-center text-center"
                            >
                                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                                <div className="text-sm opacity-80">{stat.title}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                     */}
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
