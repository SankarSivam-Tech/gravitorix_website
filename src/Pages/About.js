import React from 'react';
import { Users, Target, Award, ChevronRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Company</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a forward-thinking company dedicated to delivering exceptional results through innovation, 
            expertise, and unwavering commitment to our clients' success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
            <p className="text-gray-600">
              Our diverse team of professionals brings decades of combined experience to every project.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Clear Vision</h3>
            <p className="text-gray-600">
              We maintain a clear focus on our goals and deliver measurable results for our clients.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Focus</h3>
            <p className="text-gray-600">
              Excellence is at the heart of everything we do, ensuring superior outcomes every time.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To empower businesses worldwide with cutting-edge solutions that drive growth, 
                enhance efficiency, and create lasting value for all stakeholders.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Innovation-driven approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Client-centric solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Sustainable growth focus</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-3xl font-bold text-purple-600 mb-2">1+</div>
                <div className="text-gray-600 font-medium">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;