
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Zap } from "lucide-react";

interface BookingDialogProps {
  children: React.ReactNode;
}

const BookingDialog = ({ children }: BookingDialogProps) => (
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

export default BookingDialog;
