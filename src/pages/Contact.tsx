import { Mail, MapPin, PhoneCall, Clock, MessageSquare } from 'lucide-react'
import { Button } from '../components/ui/button'
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: PhoneCall,
      title: 'טלפון',
      details: ['074-7123456'],
    },
    {
      icon: Mail,
      title: 'דואר אלקטרוני',
      details: ['info@kitchen-hoods.co.il'],
      description: 'מענה תוך 24 שעות'
    },
    {
      icon: MapPin,
      title: 'משרד ראשי',
      details: ['רחוב התעשייה 123', 'אזור התעשייה, תל אביב'],
      description: 'אולם תצוגה פתוח לקהל'
    },
    {
      icon: MessageSquare,
      title: 'ייעוץ מקצועי',
      details: ['תיאום פגישת ייעוץ', 'הדגמות במקום'],
      description: 'פגישת ייעוץ ללא עלות'
    },
    {
      icon: Clock,
      title: 'שעות פעילות',
      details: ['ראשון - חמישי: 09:00 - 18:00', 'שישי: 09:00 - 13:00']
    }
  ]

  return (
    <div className="rtl">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            <h1 className="text-4xl font-bold text-gray-100 mb-4">
              רוצים אוויר נקי במטבח? צרו קשר!
            </h1>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            <p >
              נשמח לייעץ ולהתאים את הפתרון המושלם עבורכם
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              נשמח לשמוע מכם, לייעץ ולהתאים לכם את הפתרון המושלם.
              מלאו את הטופס או התקשרו אלינו ישירות.
            </p>
          </motion.p>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1  gap-8">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">פרטי התקשרות</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start p-4 border rounded-lg shadow-sm">
                <info.icon className="h-6 w-6 text-primary ml-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                  {info.description && (
                    <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

          </motion.div>

          {/* Contact Form */}
          {/* 
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">שם מלא*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="איך קוראים לך?"
                        required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">טלפון*</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">דואר אלקטרוני*</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">תוכן הפנייה*</label>
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
          */}
        </div>


        {/* Google Map */}
        {/*
        <div className="mt-12 rounded-xl overflow-hidden shadow-sm">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54051.85107632526!2d34.77302442345724!3d32.0879544016021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca1dd351df3%3A0x6a52a1d4d041358c!2z16rXnCDXkNeo15nXkS3Xmdek15U!5e0!3m2!1siw!2sil!4v1656924726462!5m2!1siw!2sil"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

  */}
      </div>
    </div>
  )
}

export default Contact
