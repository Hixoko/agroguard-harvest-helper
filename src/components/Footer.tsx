
import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-agrogreen-50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-agrogreen-600" />
              <span className="text-xl font-bold text-agrogreen-600">AgroGuard</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Protecting crops through early disease detection and treatment recommendations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-agrogreen-600 hover:text-agrogreen-700" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-agrogreen-600 hover:text-agrogreen-700" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-agrogreen-600 hover:text-agrogreen-700" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-agrogreen-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/analysis" className="text-muted-foreground hover:text-agrogreen-600 text-sm">
                  Analyze Crop
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-agrogreen-600 text-sm">
                  News
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-muted-foreground hover:text-agrogreen-600 text-sm">
                  Education
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-agrogreen-600 text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-agrogreen-600 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-agrogreen-600 text-sm">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-agrogreen-600 text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-agrogreen-600 shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">123 Farm Road, Agro City, AC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-agrogreen-600 shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-agrogreen-600 shrink-0" />
                <span className="text-muted-foreground text-sm">contact@agroguard.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} AgroGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
