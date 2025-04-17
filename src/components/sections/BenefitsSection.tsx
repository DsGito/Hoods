import { motion } from 'framer-motion';
import { ClipboardCheck, MessageSquare, Check, Shield, Wrench, ArrowRight } from 'lucide-react';

const steps = [
    {
        icon: <Shield className="h-10 w-10" />,
        title: 'איכות ללא פשרות',
        description: 'המנדפים שלנו מיוצרים מחומרי הגלם האיכותיים ביותר ועומדים בתקנים מחמירים כולל תקן 1001 חלק 6',
        color: 'bg-orange-500',
    },
    {
        icon: <ClipboardCheck className="h-10 w-10" />,
        title: 'מומחיות מקצועית',
        description:  'צוות המומחים שלנו מביא איתו שנים של ניסיון בתכנון, ייצור והתקנה של מנדפים לכל סוגי העסקים',
        color: 'bg-blue-500',
    },
    {
        icon: <Wrench className="h-10 w-10" />,
        title: 'התאמה אישית',
        description: 'פתרונות מותאמים אישית לכל לקוח, אנו מתאימים כל מנדף לצרכים הספציפיים של הלקוח - מהמידות המדויקות ועד לעוצמת השאיבה הנדרשת',
        color: 'bg-purple-500',
    },
    {
        icon: <MessageSquare className="h-10 w-10" />,
        title: 'שירות מקצועי ומקיף',
        description: 'אנחנו מלווים אתכם מהייעוץ הראשוני, דרך התכנון וההתקנה, ועד לשירות ותחזוקה שוטפת',
        color: 'bg-green-500',
    },
    {
        icon: <Check className="h-10 w-10" />,
        title: 'אמינים',
        description: 'אחריות מלאה על כל העבודות',
        color: 'bg-pink-500',
    },
];

const BenefitsSection = () => {
    return (
        <section className="py-10 bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-gray-900 mb-4"
                    >
                        <h2>למה לבחור בנו?</h2>
                    </motion.h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                                {index + 1}
                            </div>

                            {/* Content */}
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} text-white mb-4`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>

                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 right-full w-full h-0.5 bg-gray-200 -translate-y-1/2 translate-x-8">
                                    <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-indigo-600 -translate-y-1/2" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <a
                        href="/contact"
                        className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors group"
                    >
                        התחילו עכשיו
                        <ArrowRight className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform rtl:rotate-180" />

                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default BenefitsSection;
