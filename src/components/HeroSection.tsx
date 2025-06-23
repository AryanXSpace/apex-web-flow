
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import BookingDialog from "./BookingDialog";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
