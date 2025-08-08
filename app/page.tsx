'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Star, Calendar, Sparkles, Palette, Heart } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-50/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">Bella Beauty</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact Us
                </button>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="bg-gradient-to-r from-amber-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-amber-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-amber-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-50/95 backdrop-blur-md border-t border-gray-300">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                Contact Us
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="block bg-gradient-to-r from-amber-500 to-pink-500 text-white px-3 py-2 text-base font-medium w-full text-left rounded-lg mt-2"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-amber-50"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
            alt="Professional makeup artist at work"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-amber-600/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">Transform Your</span>
            <span className="block bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
              Natural Beauty
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the artistry of professional makeup with our expert team. 
            From everyday elegance to special occasion glamour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-amber-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Book Your Session
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="border-2 border-amber-600 text-amber-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Palette className="h-5 w-5" />
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of professional makeup services designed to enhance your natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bridal Makeup",
                description: "Perfect your wedding day look with our specialized bridal makeup services",
                image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg",
                price: "From $150",
                icon: <Heart className="h-8 w-8" />
              },
              {
                title: "Party & Events",
                description: "Glamorous makeup for parties, proms, and special occasions",
                image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg",
                price: "From $80",
                icon: <Sparkles className="h-8 w-8" />
              },
              {
                title: "Professional Look",
                description: "Polished makeup for business meetings, photoshoots, and corporate events",
                image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg",
                price: "From $60",
                icon: <Star className="h-8 w-8" />
              },
              {
                title: "Makeup Consultation",
                description: "Personal makeup consultation and technique training sessions",
                image: "https://images.pexels.com/photos/3785095/pexels-photo-3785095.jpeg",
                price: "From $40",
                icon: <Palette className="h-8 w-8" />
              },
              {
                title: "Group Sessions",
                description: "Perfect for bridal parties, birthday celebrations, and group events",
                image: "https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg",
                price: "From $50/person",
                icon: <Heart className="h-8 w-8" />
              },
              {
                title: "Makeup Lessons",
                description: "Learn professional makeup techniques with personalized one-on-one lessons",
                image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg",
                price: "From $70",
                icon: <Star className="h-8 w-8" />
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-pink-500 text-white p-2 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">{service.price}</span>
                    <button className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-amber-500 hover:to-pink-500 hover:text-white transition-all duration-200 font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Bella Beauty</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 10 years of experience in the beauty industry, Bella Beauty has been transforming 
                faces and boosting confidence. Our team of certified makeup artists brings creativity, 
                skill, and passion to every appointment.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We use only premium, professional-grade makeup products and stay current with the latest 
                trends and techniques. Whether you're preparing for your wedding day, a special event, 
                or simply want to treat yourself, we're here to make you look and feel absolutely radiant.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-amber-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get In Touch
              </button>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg"
                  alt="Professional makeup artist"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-amber-400 to-pink-400 rounded-2xl opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-gray-400 to-amber-400 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to book your appointment or have questions? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">(555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">hello@bellabeauty.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-600">123 Beauty Street, Glamour City, GC 12345</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Business Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="booking">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Appointment</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500">
                      <option>Select a service</option>
                      <option>Bridal Makeup</option>
                      <option>Party & Events</option>
                      <option>Professional Look</option>
                      <option>Makeup Consultation</option>
                      <option>Group Sessions</option>
                      <option>Makeup Lessons</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                      <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                      <input type="time" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" placeholder="Tell us about your preferences or special requests..."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Sparkles className="h-8 w-8 text-amber-500" />
                <span className="ml-2 text-xl font-bold">Bella Beauty</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming natural beauty with professional makeup artistry and personalized service.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:from-amber-600 hover:to-pink-600 transition-all">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:from-amber-600 hover:to-pink-600 transition-all">
                  <span className="text-sm font-bold">@</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:from-amber-600 hover:to-pink-600 transition-all">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-amber-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>hello@bellabeauty.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>123 Beauty Street, Glamour City</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bella Beauty Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}