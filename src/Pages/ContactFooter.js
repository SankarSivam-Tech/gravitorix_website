import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Send,
  Heart
} from 'lucide-react';

const ContactFooter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', { email, message });
    setEmail('');
    setMessage('');
    alert('Thank you for reaching out! We\'ll get back to you soon.');
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
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project or how we can help..."
              rows="3"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
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
                <span className="text-gray-600">Raj Studio in front of KFC Blue Color House, Kovilpatti</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-600 hover:text-blue-600 transition-colors">+1 (555) 123-4567</a>
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
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Your Company © 2025
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