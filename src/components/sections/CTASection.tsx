import { motion } from 'framer-motion';
import { ArrowLeft, PhoneCall, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              מעוניינים בייעוץ מקצועי?
              <br />
              <span className="text-yellow-300">צרו איתנו קשר עוד היום</span>
            </h2>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              נשמח לעזור לכם למצוא את הפתרון המושלם עבורכם.
              מלאו את הטופס או התקשרו אלינו ישירות.
            </p>

            {/* Contact Options */}
            <div className="space-y-4 mb-8">
              <a href="tel:+972000000000" className="flex items-center text-gray-100 hover:text-yellow-300 transition-colors">
                <PhoneCall className="h-5 w-5 ml-2" />
                <span>000-000-0000</span>
              </a>
              <a href="mailto:contact@example.com" className="flex items-center text-gray-100 hover:text-yellow-300 transition-colors">
                <Mail className="h-5 w-5 ml-2" />
                <span>contact@example.com</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors group"
            >
              קבעו פגישת ייעוץ
              <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform ltr:rotate-180" />
            </Link>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">השאירו פרטים</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">שם מלא</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="איך קוראים לך?"
                        required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">טלפון</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="מה מספר הטלפון שלך?"
                        required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">דואר אלקטרוני</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="מה כתובת האימייל שלך?"
                      required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">נושא הפנייה</label>
                    <select className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                      <option>מטבחי חוץ</option>
                      <option>מנדפים ומערכות יניקה</option>
                      <option>מידוף למטבחים</option>
                      <option>מטבחים בהתאמה אישית</option>
                      <option>מערכות צלייה</option>
                      <option>אחר</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">תוכן הפנייה</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="כתבו לנו במה נוכל לעזור?"
                      required></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors group"
                  >
                    שליחה
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
