
import { Button } from "@/components/ui/button";
import BookingDialog from "./BookingDialog";

const FixedCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <BookingDialog>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-full shadow-lg">
          Book my Call
        </Button>
      </BookingDialog>
    </div>
  );
};

export default FixedCTA;
