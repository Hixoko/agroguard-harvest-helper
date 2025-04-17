
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-agrogreen-600 animate-leaf-sway" />
            <span className="text-xl font-bold text-agrogreen-600">AgroGuard</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-agrogreen-500 font-medium transition-colors">
              Home
            </Link>
            <Link to="/analysis" className="text-foreground hover:text-agrogreen-500 font-medium transition-colors">
              Analyze Crop
            </Link>
            <Link to="/news" className="text-foreground hover:text-agrogreen-500 font-medium transition-colors">
              News
            </Link>
            <Link to="/education" className="text-foreground hover:text-agrogreen-500 font-medium transition-colors">
              Education
            </Link>
            <Button className="bg-agrogreen-600 hover:bg-agrogreen-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-agrogreen-500 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/analysis" 
              className="text-foreground hover:text-agrogreen-500 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Analyze Crop
            </Link>
            <Link 
              to="/news" 
              className="text-foreground hover:text-agrogreen-500 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              to="/education" 
              className="text-foreground hover:text-agrogreen-500 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </Link>
            <Button className="bg-agrogreen-600 hover:bg-agrogreen-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
