
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const HeroDesignSection = () => {
  const benefits = [
    { icon: <Check className="w-6 h-6 text-blue-500" />, text: "Positive Initial Impression" },
    { icon: <Check className="w-6 h-6 text-blue-500" />, text: "Clear Brand Introduction Message" },
    { icon: <Check className="w-6 h-6 text-blue-500" />, text: "Improved Conversion Rates" }
  ];

  const examples = [
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
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Specialized in Crafting Brand
            <br />
            Defining Hero Sections
          </h2>
          <div className="flex justify-center space-x-12 mb-12">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                {item.icon}
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
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
  );
};

export default HeroDesignSection;
