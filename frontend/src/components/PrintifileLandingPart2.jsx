import React from 'react';
import { 
  Award, 
  Truck, 
  Palette, 
  Clock, 
  Users, 
  Shield, 
  Star,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../mock';

// This component contains the remaining sections of the landing page
const PrintifileLandingPart2 = ({ currentTestimonial }) => {
  const iconMap = {
    Award, Truck, Palette, Clock, Users, Shield
  };

  return (
    <>
      {/* Business Printing Solutions */}
      <section id="business" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              End-to-End Branding for Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete branding solutions tailored for different business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {mockData.businessSolutions.map((solution) => (
              <Card key={solution.id} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <Badge className="bg-white text-indigo-900 mb-2">
                      {solution.title}
                    </Badge>
                    <h3 className="text-xl font-bold mb-1">
                      {solution.description}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="text-2xl font-bold text-saffron-600">
                      {solution.price}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                      <ul className="space-y-1">
                        {solution.includes.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <ChevronRight size={16} className="text-indigo-900 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-indigo-900 hover:bg-indigo-800">
                      Request Custom Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Printifile */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Printifile?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Trusted by Indian startups and creative professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mockData.features.map((feature, idx) => {
              const Icon = iconMap[feature.icon];
              return (
                <div 
                  key={idx} 
                  className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-gray-50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-100 to-saffron-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-indigo-900" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-900 to-indigo-700">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-indigo-200">
              Real feedback from Indian businesses
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
              {mockData.testimonials.length > 0 && (
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < mockData.testimonials[currentTestimonial].rating
                            ? 'text-saffron-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg lg:text-xl text-gray-700 mb-6 italic leading-relaxed">
                    "{mockData.testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={mockData.testimonials[currentTestimonial].avatar}
                      alt={mockData.testimonials[currentTestimonial].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">
                        {mockData.testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {mockData.testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {mockData.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial 
                      ? 'bg-white' 
                      : 'bg-indigo-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-saffron-500 to-saffron-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Bring Your Ideas to Life in Print
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of Indian businesses who trust Printifile for their branding needs. 
              Start creating professional materials that make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-saffron-600 hover:bg-gray-100 h-14 px-8 text-lg font-semibold"
              >
                Start Customizing
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg font-semibold"
                onClick={() => window.open('https://wa.me/+919876543210', '_blank')}
              >
                <Phone className="mr-2" size={20} />
                Talk on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-saffron-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-2xl font-bold">Printifile</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                India's premier print-on-demand platform, helping businesses create 
                professional branded materials with ease and excellence.
              </p>
              
              {/* Newsletter */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Get design inspiration & offers</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-indigo-500 text-white"
                  />
                  <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-l-none">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Products</h4>
              <ul className="space-y-2">
                {mockData.footerLinks.products.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                {mockData.footerLinks.services.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Company */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-2 mb-6">
                {mockData.footerLinks.support.slice(0, 3).map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone size={16} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail size={16} />
                  <span>hello@printifile.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin size={16} />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400">
                © 2025 Printifile. All rights reserved.
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PrintifileLandingPart2;