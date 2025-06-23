import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Target, Clock, Smartphone, Star, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolioItems = [
    {
      title: "SaaS Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Analytics platform with real-time data"
    },
    {
      title: "E-commerce Store", 
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description: "Modern online shopping experience"
    },
    {
      title: "Creative Agency",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop", 
      description: "Bold portfolio showcase"
    },
    {
      title: "Tech Startup",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      description: "Clean corporate presence"
    },
    {
      title: "Restaurant Chain",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      description: "Appetizing food delivery platform"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [portfolioItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const BookingDialog = ({ children }: { children: React.ReactNode }) => (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Book Your Strategy Call</DialogTitle>
        </DialogHeader>
        <div className="p-6 text-center">
          <div className="mb-4">
            <Zap className="w-12 h-12 mx-auto mb-3 text-blue-500" />
            <p className="text-gray-600 mb-4">Schedule a free 30-minute consultation to discuss your project</p>
          </div>
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
            onClick={() => window.open('https://calendly.com/your-calendar-link', '_blank')}
          >
            Schedule on Calendly
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            Or email us directly at hello@apexwebsolutions.com
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Updated to match screenshot */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">Ax</span>
              </div>
              <span className="font-semibold text-lg text-gray-900">Aurex Labs</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-900 font-medium hover:text-gray-600 transition-colors">Home</a>
              <a href="#portfolio" className="text-gray-500 hover:text-gray-900 transition-colors">Works</a>
            </div>
            <BookingDialog>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-2 rounded-full font-medium">
                Work
              </Button>
            </BookingDialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-black text-white px-4 py-2">
            New
          </Badge>
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            Get a High-Converting Website That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Works for You
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We build stunning websites that actually drive results. Professional design meets conversion optimization.
          </p>
          <BookingDialog>
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-lg">
              Book a Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </BookingDialog>
        </div>
      </section>

      {/* Portfolio Slider Section - Updated with auto-slide */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-600">We design and develop custom sites that look great and drive real results.</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {portfolioItems.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="overflow-hidden shadow-lg">
                      <div className="aspect-video">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg hover:bg-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg hover:bg-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <BookingDialog>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg">
                Book my Call
              </Button>
            </BookingDialog>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Our Winning Edge</h2>
            <p className="text-xl text-gray-600">Discover our unique strength and distinctive value we offer</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-blue-500" />,
                title: "SEO-Optimized",
                description: "Our SEO-centric design approach enhances your online visibility, driving organic traffic by securing prime ranks on Google search."
              },
              {
                icon: <Zap className="w-8 h-8 text-orange-500" />,
                title: "High-Converting Design", 
                description: "Our engaging design techniques drive remarkable increases in conversion rates by compelling visitors to take decisive, intentional action."
              },
              {
                icon: <Smartphone className="w-8 h-8 text-green-500" />,
                title: "Peak Performance on Any Screen",
                description: "Our fluid website experience guarantees flawless performance across all screens, from desktops and laptops to tablets and mobile devices."
              },
              {
                icon: <Clock className="w-8 h-8 text-purple-500" />,
                title: "Fast Turnaround Time",
                description: "Launch your landing pages swiftly within 7 to 14 days, ensuring fast access to online opportunities without sacrificing quality."
              },
              {
                icon: <Star className="w-8 h-8 text-pink-500" />,
                title: "Quality Without Overcharge",
                description: "Always receive exceptional quality without any additional costs, ensuring unparalleled value and trust in every service we provide."
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-yellow-500" />,
                title: "Effortless Experience",
                description: "Our streamlined process and world-class systems minimize your involvement, saving you time while maximizing efficiency."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Design Focus Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Specialized in Crafting Brand
              <br />
              Defining Hero Sections
            </h2>
            <div className="flex justify-center space-x-12 mb-12">
              {[
                { icon: <Check className="w-6 h-6 text-blue-500" />, text: "Positive Initial Impression" },
                { icon: <Check className="w-6 h-6 text-blue-500" />, text: "Clear Brand Introduction Message" },
                { icon: <Check className="w-6 h-6 text-blue-500" />, text: "Improved Conversion Rates" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {item.icon}
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SurveyPortal",
                subtitle: "Create online surveys and forms that mean business",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                color: "green"
              },
              {
                title: "Capable",
                subtitle: "Empower Your Social Connections with Capable", 
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
                color: "purple"
              },
              {
                title: "TaskFlow",
                subtitle: "Smart Tools for Streamlined Project Workflow",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop", 
                color: "orange"
              }
            ].map((example, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{example.title}</h3>
                  <p className="text-gray-600">{example.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Our Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Landing Page</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">Starts at $400</p>
              <p className="text-gray-600 mb-6">
                A single, high-impact page designed to capture leads and drive conversions, built from scratch to production in 7-10 days.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Mobile responsive design</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>SEO optimized</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Contact form integration</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Multi-Page Website</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">Starts at $500+</p>
              <p className="text-gray-600 mb-6">
                A multi-page site to showcase your brand and services in detail, built from scratch to production in 2-3 weeks.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Up to 5 custom pages</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>CMS integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Advanced animations</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-6 bg-gray-50 border border-gray-200 text-center">
            <p className="text-gray-700">
              We also offer standalone services: <span className="font-semibold">Website Design Only</span> or <span className="font-semibold">Development Only</span> packages.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: <MessageSquare className="w-6 h-6 text-blue-500" />, text: "Smooth Communication" },
              { icon: <Zap className="w-6 h-6 text-blue-500" />, text: "Flexible Revisions" },
              { icon: <Star className="w-6 h-6 text-blue-500" />, text: "Post-Project Support" }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                {benefit.icon}
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <BookingDialog>
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-lg">
                <Zap className="w-5 h-5 mr-2" />
                Book a Call
              </Button>
            </BookingDialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-purple-400 text-xl font-bold mb-4">Aurex Labs</h3>
              <p className="text-gray-400">
                Building successful products through innovation and expertise.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Website Design</li>
                <li>Web Development</li>
                <li>SEO Optimization</li>
                <li>Maintenance</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>Email</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Aurex Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Fixed CTA Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <BookingDialog>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-full shadow-lg">
            Book my Call
          </Button>
        </BookingDialog>
      </div>
    </div>
  );
};

export default Index;
