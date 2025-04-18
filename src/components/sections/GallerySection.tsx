import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';


const projects = [
    {
        id: "project-1",
        title: "מטבח מסעדת 'השף המודרני'",
        description: "עיצוב מטבח מסעדה מודרני המתמחה במאכלים גורמה, תוך שימת דגש על פרקטיות ואסתטיקה. המרחב עוצב כדי לשפר את זרימת העבודה של הצוות ולספק חוויה קולינרית מרהיבה.",
        location: "תל אביב",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        alt: "פרויקט מסעדה"
    },
    {
        id: "project-2",
        title: "קפה 'אספרסו פלוס'",
        description: "עיצוב בית קפה עם אווירה חמה ומזמינה. הקפה עוצב כדי לשדר תחושת נוחות, עם אזורי ישיבה נוחים והדגש על חוויית קפה מיוחדת עבור הלקוחות.",
        location: "ירושלים",
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        alt: "פרויקט בית קפה"
    },
    {
        id: "project-3",
        title: "מטבח חוץ בוילה 'נוף לים'",
        description: "עיצוב מטבח חוץ בוילה עם נוף מרהיב לים, אשר מאפשר אירוח מושלם והכנה של אוכל בטבע תוך שמירה על נוחות ושימוש בחומרים עמידים. המרחב מיועד לפגישות חברתיות ופסטיבלים פרטיים.",
        location: "הרצליה פיתוח",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        alt: "פרויקט מטבח ביתי"
    }
];



const GallerySection = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-white">הפרויקטים האחרונים שלנו</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        הצצה לחלק מהפרויקטים האחרונים שביצענו עבור לקוחותינו
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative overflow-hidden rounded-lg shadow-xl flex flex-col h-full"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="bg-gray-800 p-5 flex-grow flex flex-col">
                                <h3 className="font-bold text-xl text-white mb-1">{project.title}</h3>
                                <p className="text-blue-400 text-sm mb-3">{project.location}</p>
                                <p className="text-gray-300 text-sm">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="/gallery"
                        className="inline-flex items-center bg-white-400 text-white px-8 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition-colors group"
                    >
                        לגלריית הפרויקטים המלאה
                        <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform ltr:rotate-180" />

                    </a>

                </motion.div>
            </div>
        </section>
    );
};

export default GallerySection;