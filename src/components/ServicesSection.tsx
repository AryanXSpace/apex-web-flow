
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, MessageSquare, Star } from "lucide-react";
import BookingDialog from "./BookingDialog";

const ServicesSection = () => {
  const benefits = [
    { icon: <MessageSquare className="w-6 h-6 text-blue-500" />, text: "Smooth Communication" },
    { icon: <Zap className="w-6 h-6 text-blue-500" />, text: "Flexible Revisions" },
    { icon: <Star className="w-6 h-6 text-blue-500" />, text: "Post-Project Support" }
  ];

  return (
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
          {benefits.map((benefit, index) => (
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
  );
};

export default ServicesSection;
