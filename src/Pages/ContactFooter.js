import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Send,
  Heart,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const ContactFooter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  // Initialize EmailJS when component mounts
  useEffect(() => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotification({ show: false, type: '', message: '' });


    try {
      // Template parameters for EmailJS
      const templateParams = {
        from_name: name || 'Website Visitor',
        from_email: email,
        message: message,
        to_email: process.env.REACT_APP_EMAILJS_TO_EMAIL || 'contact@gravitorix.com',
        reply_to: email,
        timestamp: new Date().toISOString(),
        // Additional parameters to ensure data is captured
        user_name: name || 'Website Visitor',
        user_email: email,
        contact_name: name || 'Website Visitor',
        contact_email: email,
        sender_name: name || 'Website Visitor',
        sender_email: email,
      };


      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      
      // Show success notification
      setNotification({
        show: true,
        type: 'success',
        message: 'Thank you for reaching out! We\'ll get back to you soon.'
      });
      
      // Clear inputs
      setName('');
      setEmail('');
      setMessage('');
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification({ show: false, type: '', message: '' });
      }, 5000);
      
    } catch (error) {
      
      // Show error notification
      setNotification({
        show: true,
        type: 'error',
        message: 'Failed to send message. Please try again or email us directly.'
      });
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification({ show: false, type: '', message: '' });
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div
        style={{backgroundImage: 'linear-gradient(to right, #e1b7f9ff, #eecce1ff)'}}
        className="py-12 rounded-2xl">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h3>
          <p className="text-gray-600 mb-8 text-lg">
            Have a project in mind or want to discuss how we can help? Drop us a message and we'll get back to you.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            {notification.show && (
              <div className={`p-4 rounded-lg flex items-center gap-3 ${
                notification.type === 'success' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {notification.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm">{notification.message}</p>
              </div>
            )}
            
            {/* Optional Name Field */}
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)"
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
            
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project or how we can help..."
              rows="3"
              required
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button 
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Gravitorix</h3>
            <p className="text-gray-600 mb-6">
              Transforming businesses through innovative technology solutions and strategic partnerships.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Team', 'Careers', 'News', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Solutions</h4>
            <ul className="space-y-2">
              {['Enterprise', 'Small Business', 'Startups', 'E-commerce', 'Healthcare'].map((solution, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">{solution}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Raj Studio in front of KFC yellow color House, Kovilpatti</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a href="tel:+91 73490 12242" className="text-gray-600 hover:text-blue-600 transition-colors">+91 73490 12242</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a href="mailto:contact@gravitorix.com" className="text-gray-600 hover:text-blue-600 transition-colors">contact@gravitorix.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Gravitorix © 2025
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;