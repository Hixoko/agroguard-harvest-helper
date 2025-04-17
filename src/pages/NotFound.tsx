
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-agrogreen-50/50">
        <div className="text-center max-w-md px-4">
          <div className="flex justify-center mb-4">
            <div className="bg-agrogreen-100 p-4 rounded-full">
              <AlertCircle className="h-16 w-16 text-agrogreen-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          <Link to="/">
            <Button className="bg-agrogreen-600 hover:bg-agrogreen-700 text-white px-8">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
