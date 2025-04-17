
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Leaf, Upload, Search, Book, BarChart, AlertTriangle,
  CheckCircle, Sprout, CloudLightning, Activity
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-pattern py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Protect Your Crops with <span className="text-agrogreen-600">AI-Powered</span> Disease Detection
              </h1>
              <p className="text-lg text-muted-foreground">
                AgroGuard helps farmers identify and treat crop diseases quickly and effectively through advanced image analysis and expert recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/analysis">
                  <Button className="bg-agrogreen-600 hover:bg-agrogreen-700 text-white px-6 py-6 h-auto text-lg">
                    Analyze Your Crop
                  </Button>
                </Link>
                <Link to="/education">
                  <Button variant="outline" className="border-agrogreen-600 text-agrogreen-600 hover:bg-agrogreen-50 px-6 py-6 h-auto text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8" 
                  alt="Farmer inspecting crops"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-agrogreen-600 text-white rounded-lg p-4 shadow-lg md:max-w-xs hidden md:block">
                <p className="font-medium">Early detection of diseases can save up to 30% of crop losses annually</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How AgroGuard Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform offers a comprehensive solution for farmers to identify, track, and treat crop diseases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-agrogreen-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-agrogreen-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Upload className="h-6 w-6 text-agrogreen-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Upload & Analyze</h3>
              <p className="text-muted-foreground">
                Take a photo of your affected crop and upload it to our AI-powered system for instant analysis and disease identification.
              </p>
            </div>
            
            <div className="bg-agrogreen-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-agrogreen-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Search className="h-6 w-6 text-agrogreen-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Get Detailed Insights</h3>
              <p className="text-muted-foreground">
                Receive comprehensive information about the identified disease, including causes, spread patterns, and impact levels.
              </p>
            </div>
            
            <div className="bg-agrogreen-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-agrogreen-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Book className="h-6 w-6 text-agrogreen-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Treatment Recommendations</h3>
              <p className="text-muted-foreground">
                Access customized treatment plans, preventive measures, and best practices to effectively manage the identified crop disease.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* App Sections Preview */}
      <section className="py-16 bg-agrogreen-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Explore Our Platform</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AgroGuard offers multiple tools to help you protect your crops and increase your yields
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/analysis" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8" 
                    alt="Crop Analysis Tool"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <BarChart className="h-5 w-5 text-white" />
                        <span className="text-white font-medium">Analyze Crop</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">AI-Powered Disease Detection</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    Upload images of your crops for instant analysis and detailed disease identification with treatment recommendations.
                  </p>
                  <div className="mt-4 flex items-center text-agrogreen-600 font-medium">
                    <span>Try the analyzer</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/news" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586892477838-2b96e85e0f96" 
                    alt="News on Outbreaks"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-white" />
                        <span className="text-white font-medium">News</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">Latest Outbreak Updates</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    Stay informed about the latest crop disease outbreaks in your region and globally with expert analyses and alerts.
                  </p>
                  <div className="mt-4 flex items-center text-agrogreen-600 font-medium">
                    <span>Read latest news</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/education" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce" 
                    alt="Education Resources"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Book className="h-5 w-5 text-white" />
                        <span className="text-white font-medium">Education</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">Knowledge Resources</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    Access our comprehensive library of educational resources on crop diseases, prevention methods, and sustainable farming practices.
                  </p>
                  <div className="mt-4 flex items-center text-agrogreen-600 font-medium">
                    <span>Explore resources</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            
            <div className="bg-agrogreen-600 rounded-lg overflow-hidden shadow-md text-white p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Join Thousands of Farmers</h3>
              <p className="mb-6 text-agrogreen-50">
                More than 10,000 farmers worldwide trust AgroGuard to protect their crops and increase their yields.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center bg-agrogreen-700/50 rounded-lg p-4">
                  <CheckCircle className="h-8 w-8 mb-2" />
                  <span className="text-2xl font-bold">95%</span>
                  <span className="text-sm text-center">Accurate Disease Detection</span>
                </div>
                <div className="flex flex-col items-center bg-agrogreen-700/50 rounded-lg p-4">
                  <Sprout className="h-8 w-8 mb-2" />
                  <span className="text-2xl font-bold">30%</span>
                  <span className="text-sm text-center">Average Yield Increase</span>
                </div>
                <div className="flex flex-col items-center bg-agrogreen-700/50 rounded-lg p-4">
                  <CloudLightning className="h-8 w-8 mb-2" />
                  <span className="text-2xl font-bold">500+</span>
                  <span className="text-sm text-center">Disease Profiles</span>
                </div>
                <div className="flex flex-col items-center bg-agrogreen-700/50 rounded-lg p-4">
                  <Activity className="h-8 w-8 mb-2" />
                  <span className="text-2xl font-bold">24/7</span>
                  <span className="text-sm text-center">Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-agrogreen-600 to-agrogreen-700 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Crops?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-agrogreen-50">
              Join thousands of farmers who are already using AgroGuard to identify and treat crop diseases early, saving time and increasing yields.
            </p>
            <Link to="/analysis">
              <Button className="bg-white text-agrogreen-600 hover:bg-agrogreen-50 px-8 py-6 h-auto text-lg">
                Start Analyzing Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
