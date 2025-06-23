
import { Card } from "@/components/ui/card";
import { Target, Zap, Smartphone, Clock, Star, MessageSquare } from "lucide-react";

const FeaturesSection = () => {
  const features = [
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
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Our Winning Edge</h2>
          <p className="text-xl text-gray-600">Discover our unique strength and distinctive value we offer</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
