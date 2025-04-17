import { useState, useEffect } from "react";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from 'framer-motion';

const imonials = [
    {
        id: 1,
        quote: "המנדף שקנינו מושלם! סוף סוף המטבח שלנו לא מתמלא בריחות של טיגון. השירות היה מעולה והצוות מקצועי ואדיב.",
        author: "יעל כהן, בעלת 'קפה נועם'",
        rating: 5,
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 2,
        quote: "שירות אדיב ומקצועי מאוד, התקנה מהירה ותוצאות מעולות. מאז שהתקנו את המנדף, האווירה במסעדה הפכה לנעימה יותר ללקוחות.",
        author: "רון לוי, שף במסעדת 'הבשר והיין'",
        rating: 5,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 3,
        quote: "ההשקעה במנדף של טי אנד מדפים הוכיחה את עצמה כבר בחודש הראשון. יעילות מדהימה, חיסכון בחשמל ושקט מפתיע.",
        author: "דוד ישראלי, בעלים של מאפיית 'לחמים'",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 4,
        quote: "שדרגנו את המנדף הישן שלנו לדגם החדש, וההבדל עצום. איכות האוויר במטבח השתפרה פלאים, והחיסכון באנרגיה מורגש בחשבונות החשמל.",
        author: "מירה לוינסון, מנהלת תפעול במלון 'אואזיס'",
        rating: 5,
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 5,
        quote: "טי אנד מדפים התאימו לנו פתרון מדויק לצרכי המטבח הקטן והעמוס שלנו. העבודה הייתה נקייה, מהירה ויעילה, וכל שאלה קיבלה מענה מקצועי.",
        author: "יוסי אברהם, בעלים של בית קפה 'קפה ועוד'",
        rating: 5,
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
];

export default function imonialSlider() {
    const [imonialCount, setimonialCount] = useState(1);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setimonialCount(3);
            } else if (window.innerWidth >= 768) {
                setimonialCount(2);
            } else {
                setimonialCount(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrev = () => {
        setStartIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? imonials.length - imonialCount : newIndex;
        });
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex > imonials.length - imonialCount ? 0 : newIndex;
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [startIndex]);

    const visibleimonials = [];
    for (let i = 0; i < imonialCount; i++) {
        const index = (startIndex + i) % imonials.length;
        visibleimonials.push(imonials[index]);
    }

    return (
        <div className="relative py-10 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-12">לקוחות מרוצים</h2>

            <div className="flex justify-center items-center">
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 md:right-8 lg:right-16 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-md"
                    onClick={handlePrev}
                >
                    <ChevronRight className="w-5 h-5" />
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                    {visibleimonials.map((imonial, index) => (
                        <motion.div
                            key={imonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="flex mb-4">
                                {Array.from({ length: imonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6">"{imonial.quote}"</p>
                            <div className="flex items-center">
                                <img
                                    src={imonial.image}
                                    alt={imonial.author}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <p className="font-medium">{imonial.author}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 md:left-8 lg:left-16 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-md"
                    onClick={handleNext}
                >
                    <ChevronLeft className="w-5 h-5" />
                </Button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8">
                {Array.from({ length: imonials.length - imonialCount + 1 }).map((_, i) => (
                    <button
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full mx-1 ${i === startIndex ? "bg-blue-600" : "bg-gray-300"
                            }`}
                        onClick={() => setStartIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
}
