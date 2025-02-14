import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs.send(
      'service_ffj9yyg',  // Replace with your EmailJS Service ID
      'template_nvvuf8m', // Replace with your EmailJS Template ID
      formData,
      '512K6AVWkz_5hWz8Z'   // Replace with your EmailJS Public Key
    ).then(() => {
      setIsSubmitted(true);
    }).catch((error) => {
      console.error('Error sending email:', error);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Get in Touch</h2>
          <div className="max-w-3xl mx-auto">
            {isSubmitted ? (
              <div className="text-center text-xl text-green-600 dark:text-green-400 font-semibold">Message Sent! Thank you for reaching out.</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white" required />
                </div>
                <button type="submit" className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">Send Message</button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
