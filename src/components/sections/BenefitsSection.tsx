import { motion } from 'framer-motion';
import { ClipboardCheck, MessageSquare, Shield, Wrench } from 'lucide-react';

const steps = [
    {
        icon: <Shield className="h-10 w-10" />,
        title: 'איכות ללא פשרות',
        description: 'המנדפים שלנו מיוצרים מחומרי הגלם האיכותיים ביותר ועומדים בתקנים מחמירים כולל תקן 1001 חלק 6',
    },
    {
        icon: <ClipboardCheck className="h-10 w-10" />,
        title: 'מומחיות מקצועית',
        description: 'צוות המומחים שלנו מביא איתו שנים של ניסיון בתכנון, ייצור והתקנה של מנדפים לכל סוגי העסקים',
    },
    {
        icon: <Wrench className="h-10 w-10" />,
        title: 'התאמה אישית',
        description: 'פתרונות מותאמים אישית לכל לקוח - מהמידות המדויקות ועד לעוצמת השאיבה הנדרשת',
    },
    {
        icon: <MessageSquare className="h-10 w-10" />,
        title: 'שירות מקצועי ומקיף',
        description: 'אנחנו מלווים אתכם מהייעוץ הראשוני, דרך התכנון וההתקנה, ועד לשירות ותחזוקה שוטפת',
    },
];

const BenefitsSection = () => {
    return (
        <section className="py-6 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                    >
                        <h2>למה לבחור בנו?</h2>
                    </motion.div>
                    <div className="mx-auto h-1 w-12 sm:w-16 bg-[#d6b16c] rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group transition-all"
                        >
                            {/* מספר */}
                            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md text-sm sm:text-base">
                            {index + 1}
                            </div>

                            <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 text-center border border-gray-100 group-hover:shadow-xl group-hover:scale-105 transition duration-300">
                            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#d6b16c] text-white mb-3 sm:mb-4 shadow-sm">
                            {step.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{step.title}</h3>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{step.description}</p>
                                </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
