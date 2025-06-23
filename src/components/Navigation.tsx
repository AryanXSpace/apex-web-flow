
import { Button } from "@/components/ui/button";
import BookingDialog from "./BookingDialog";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
