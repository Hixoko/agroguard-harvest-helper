
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  BookOpen,
  PlayCircle,
  FileText,
  Clock,
  Tag,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  Download,
  GraduationCap,
  BookMarked,
  Leaf,
  FileVideo
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock data for educational resources
const guides = [
  {
    id: 1,
    title: "Identifying Common Wheat Diseases",
    description: "Learn to identify the most common wheat diseases including rust, smut, and powdery mildew.",
    level: "Beginner",
    duration: "15 min read",
    category: "Disease Identification",
    image: "https://images.unsplash.com/photo-1574943320219-5630423d03ce",
    popular: true,
  },
  {
    id: 2,
    title: "Integrated Pest Management for Rice",
    description: "A comprehensive guide to implementing IPM strategies for rice crops to minimize disease impact.",
    level: "Intermediate",
    duration: "25 min read",
    category: "Management Practices",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6",
    popular: false,
  },
  {
    id: 3,
    title: "Organic Solutions for Tomato Blight",
    description: "Discover organic methods to prevent and treat early and late blight in tomato crops.",
    level: "Intermediate",
    duration: "20 min read",
    category: "Organic Farming",
    image: "https://images.unsplash.com/photo-1592841200221-a6c4c4e855a6",
    popular: true,
  },
  {
    id: 4,
    title: "Understanding Soil Health and Disease Resistance",
    description: "How healthy soil biology contributes to natural disease suppression in crops.",
    level: "Advanced",
    duration: "30 min read",
    category: "Soil Management",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
    popular: false,
  },
  {
    id: 5,
    title: "Climate Change and Emerging Crop Diseases",
    description: "How changing climate patterns are affecting the spread and intensity of crop diseases globally.",
    level: "Advanced",
    duration: "35 min read",
    category: "Climate & Diseases",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a",
    popular: true,
  },
  {
    id: 6,
    title: "Seed Treatment Best Practices",
    description: "Learn effective seed treatment techniques to prevent soil-borne diseases in your crops.",
    level: "Beginner",
    duration: "15 min read",
    category: "Preventative Measures",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6fa020",
    popular: false,
  },
];

const videos = [
  {
    id: 1,
    title: "Field Diagnosis of Wheat Rust",
    description: "Step-by-step visual guide to identifying different types of wheat rust in the field.",
    duration: "12:45",
    instructor: "Dr. Sarah Johnson",
    category: "Disease Identification",
    image: "https://images.unsplash.com/photo-1574943320219-5630423d03ce",
  },
  {
    id: 2,
    title: "Spraying Techniques for Disease Control",
    description: "Proper spraying methods to ensure effective coverage and disease control.",
    duration: "18:22",
    instructor: "Mark Williams",
    category: "Management Practices",
    image: "https://images.unsplash.com/photo-1591198619986-97f69b3a07f9",
  },
  {
    id: 3,
    title: "Early Signs of Crop Stress and Disease",
    description: "How to spot the subtle early signs of crop stress that can lead to disease susceptibility.",
    duration: "15:10",
    instructor: "Dr. Emily Chen",
    category: "Early Detection",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
  },
  {
    id: 4,
    title: "Microscopic Identification of Plant Pathogens",
    description: "Using basic microscopy techniques to identify common fungal and bacterial pathogens.",
    duration: "22:35",
    instructor: "Prof. Michael Carter",
    category: "Advanced Diagnostics",
    image: "https://images.unsplash.com/photo-1516728778615-2d590ea1855e",
  },
];

const downloadables = [
  {
    id: 1,
    title: "Crop Disease Field Guide",
    description: "Printable guide with high-quality images of common crop diseases for field reference.",
    fileType: "PDF",
    fileSize: "8.5 MB",
    category: "Field Guide",
  },
  {
    id: 2,
    title: "Seasonal Disease Calendar",
    description: "Monthly calendar showing which diseases are most likely to appear throughout the growing season.",
    fileType: "PDF",
    fileSize: "3.2 MB",
    category: "Planning",
  },
  {
    id: 3,
    title: "Fungicide Application Calculator",
    description: "Spreadsheet tool to calculate proper fungicide application rates based on crop and area.",
    fileType: "Excel",
    fileSize: "1.8 MB",
    category: "Tool",
  },
  {
    id: 4,
    title: "Disease Identification Flashcards",
    description: "Printable flashcards to help learn and identify the most common crop diseases.",
    fileType: "PDF",
    fileSize: "5.6 MB",
    category: "Learning Material",
  },
];

const courses = [
  {
    id: 1,
    title: "Comprehensive Crop Disease Management",
    description: "A complete course covering detection, identification, and management of major crop diseases.",
    lessons: 12,
    duration: "6 hours total",
    level: "Intermediate",
    instructor: "Dr. Robert Miller",
    category: "Comprehensive",
    image: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95",
  },
  {
    id: 2,
    title: "Advanced Diagnostic Techniques",
    description: "Learn professional-level techniques for accurate crop disease diagnosis in the lab and field.",
    lessons: 8,
    duration: "4.5 hours total",
    level: "Advanced",
    instructor: "Dr. Samantha Peters",
    category: "Diagnostics",
    image: "https://images.unsplash.com/photo-1507668339897-8a035aa9527d",
  },
];

const Education = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGuides, setFilteredGuides] = useState(guides);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = guides.filter(guide => 
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGuides(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-r from-agrogreen-600 to-agrogreen-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-3">
              <GraduationCap className="h-8 w-8 mr-2" />
              <h1 className="text-3xl md:text-4xl font-bold">Agricultural Education Center</h1>
            </div>
            <p className="text-agrogreen-50 text-lg mb-6">
              Expand your knowledge about crop diseases, prevention methods, and sustainable farming practices
            </p>
            
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search guides, videos, and resources..."
                className="w-full pl-10 py-6 text-foreground bg-white border-0 focus-visible:ring-2 focus-visible:ring-agrogreen-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Button 
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-agrogreen-700 hover:bg-agrogreen-800"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="flex-grow py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="guides" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="guides">Guides & Articles</TabsTrigger>
                <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
                <TabsTrigger value="downloads">Downloadable Resources</TabsTrigger>
                <TabsTrigger value="courses">Online Courses</TabsTrigger>
              </TabsList>
              
              <TabsContent value="guides">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Popular Guides</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredGuides
                      .filter(guide => guide.popular)
                      .map((guide) => (
                        <Card key={guide.id} className="overflow-hidden hover:shadow-md transition-shadow">
                          <div className="aspect-video relative overflow-hidden">
                            <img 
                              src={guide.image} 
                              alt={guide.title}
                              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge className="bg-amber-500">Popular</Badge>
                            </div>
                          </div>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg line-clamp-2">{guide.title}</CardTitle>
                            <CardDescription className="flex items-center text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{guide.duration}</span>
                              <span className="mx-2">•</span>
                              <Tag className="h-3 w-3 mr-1" />
                              <span>{guide.category}</span>
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <p className="text-muted-foreground text-sm line-clamp-3">
                              {guide.description}
                            </p>
                          </CardContent>
                          <CardFooter>
                            <Button variant="ghost" className="w-full justify-between text-agrogreen-600 hover:text-agrogreen-700 p-0">
                              <span>Read guide</span>
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-6">All Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGuides.map((guide) => (
                    <Card key={guide.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={guide.image} 
                          alt={guide.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className={
                            guide.level === "Beginner" ? "bg-green-500" : 
                            guide.level === "Intermediate" ? "bg-blue-500" : 
                            "bg-purple-500"
                          }>
                            {guide.level}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg line-clamp-2">{guide.title}</CardTitle>
                        <CardDescription className="flex items-center text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{guide.duration}</span>
                          <span className="mx-2">•</span>
                          <Tag className="h-3 w-3 mr-1" />
                          <span>{guide.category}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-muted-foreground text-sm line-clamp-3">
                          {guide.description}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" className="w-full justify-between text-agrogreen-600 hover:text-agrogreen-700 p-0">
                          <span>Read guide</span>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                {filteredGuides.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No guides found matching your search.</p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchTerm("");
                        setFilteredGuides(guides);
                      }}
                      className="mt-2"
                    >
                      Reset search
                    </Button>
                  </div>
                )}
                
                <div className="mt-8 text-center">
                  <Button variant="outline">Load More Guides</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="videos">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Video Tutorials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videos.map((video) => (
                      <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={video.image} 
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="bg-white/80 backdrop-blur-sm rounded-full p-3">
                              <PlayCircle className="h-10 w-10 text-agrogreen-600" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-xs rounded">
                            {video.duration}
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{video.title}</CardTitle>
                          <CardDescription className="flex items-center justify-between text-xs">
                            <span>By {video.instructor}</span>
                            <Badge className="bg-blue-500">{video.category}</Badge>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-muted-foreground text-sm">
                            {video.description}
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" className="w-full justify-between text-agrogreen-600 hover:text-agrogreen-700 p-0">
                            <span>Watch video</span>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-8 text-center">
                  <FileVideo className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Video Library Access</h3>
                  <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
                    Get access to our complete library of over 100 educational videos covering all aspects of crop disease management.
                  </p>
                  <Button className="bg-agrogreen-600 hover:bg-agrogreen-700 text-white">
                    Explore Full Video Library
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="downloads">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Downloadable Resources</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {downloadables.map((resource) => (
                      <Card key={resource.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{resource.title}</CardTitle>
                              <CardDescription>{resource.category}</CardDescription>
                            </div>
                            <Badge variant="outline" className="border-muted-foreground">
                              {resource.fileType} • {resource.fileSize}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-muted-foreground text-sm">
                            {resource.description}
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-agrogreen-600 hover:bg-agrogreen-700 text-white">
                            <Download className="h-4 w-4 mr-2" />
                            Download Resource
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <Card className="border-dashed border-2 bg-muted/50 hover:bg-muted/80 transition-colors">
                  <CardContent className="p-8 text-center">
                    <BookMarked className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Looking for something specific?</h3>
                    <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
                      We have hundreds of downloadable resources available in our complete library. Request specific resources or browse the full collection.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <Button variant="outline">Request Resource</Button>
                      <Button className="bg-agrogreen-600 hover:bg-agrogreen-700 text-white">
                        View All Resources
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="courses">
                <div className="bg-gradient-to-r from-agrogreen-50 to-agrogreen-100 rounded-lg p-6 mb-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="md:w-1/3">
                      <GraduationCap className="h-16 w-16 text-agrogreen-600 mx-auto md:mx-0" />
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                      <h3 className="text-xl font-bold mb-2 text-foreground">AgroGuard Learning Path</h3>
                      <p className="text-muted-foreground mb-4">
                        Follow our structured learning path to become an expert in crop disease identification, prevention, and management. Earn certificates as you progress.
                      </p>
                      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <div className="flex items-center bg-white px-3 py-1 rounded-full text-sm">
                          <CheckCircle className="h-4 w-4 text-agrogreen-600 mr-1" />
                          <span>5 Comprehensive Courses</span>
                        </div>
                        <div className="flex items-center bg-white px-3 py-1 rounded-full text-sm">
                          <CheckCircle className="h-4 w-4 text-agrogreen-600 mr-1" />
                          <span>25+ Hours of Content</span>
                        </div>
                        <div className="flex items-center bg-white px-3 py-1 rounded-full text-sm">
                          <CheckCircle className="h-4 w-4 text-agrogreen-600 mr-1" />
                          <span>Expert Instructors</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {courses.map((course) => (
                    <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className={
                            course.level === "Beginner" ? "bg-green-500" : 
                            course.level === "Intermediate" ? "bg-blue-500" : 
                            "bg-purple-500"
                          }>
                            {course.level}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>By {course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-muted-foreground text-sm mb-4">
                          {course.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="bg-muted rounded p-2 flex items-center">
                            <BookOpen className="h-4 w-4 text-muted-foreground mr-2" />
                            <span>{course.lessons} Lessons</span>
                          </div>
                          <div className="bg-muted rounded p-2 flex items-center">
                            <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                            <span>{course.duration}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="flex items-center text-amber-500">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm text-muted-foreground">(42)</span>
                        </div>
                        <Button className="bg-agrogreen-600 hover:bg-agrogreen-700 text-white">
                          Enroll Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-b from-green-50 to-green-100 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-800">Beginner Track</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center text-green-800">
                          <Leaf className="h-4 w-4 mr-2" />
                          <span>Crop Disease Basics</span>
                        </li>
                        <li className="flex items-center text-green-800">
                          <Leaf className="h-4 w-4 mr-2" />
                          <span>Visual Identification</span>
                        </li>
                        <li className="flex items-center text-green-800">
                          <Leaf className="h-4 w-4 mr-2" />
                          <span>Introduction to Prevention</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-green-300 text-green-800 hover:bg-green-200">
                        <span>View Beginner Courses</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card className="bg-gradient-to-b from-blue-50 to-blue-100 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-800">Intermediate Track</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center text-blue-800">
                          <Leaf className="h-4 w-4 mr-2" />
                          <span>Advanced Diagnosis</span>
                        </li>
                        <li className="flex items-center text-blue-800">
                          <Leaf className="h-4 w-4 mr-2" />
                          <span>Treatment Strategies</span>
                        </li>
                        <li className="flex items-center text-blue-800">
                          <Leaf className="h-4 w-4 mr-2" />
                          <span>Integrated Pest Management</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-blue-300 text-blue-800 hover:bg-blue-200">
                        <span>View Intermediate Courses</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card className="bg-gradient-to-b from-purple-50 to-purple-100 border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-purple-800">Advanced Track</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center text-purple-800">
                          <Leaf className="h-4 w-4 mr-2" />
                          <span>Molecular Diagnostics</span>
                        </li>
                        <li className="flex items-center text-purple-800">
                          <Leaf className="h-4 w-4 mr-2" />
                          <span>Disease Modeling</span>
                        </li>
                        <li className="flex items-center text-purple-800">
                          <Leaf className="h-4 w-4 mr-2" />
                          <span>Advanced Management Systems</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-purple-300 text-purple-800 hover:bg-purple-200">
                        <span>View Advanced Courses</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Education;
