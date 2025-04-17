
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
  AlertTriangle,
  Globe,
  Calendar,
  MapPin,
  Search,
  ChevronRight,
  BookOpen,
  Bell,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock data for news articles
const newsArticles = [
  {
    id: 1,
    title: "Wheat Rust Outbreak in Southern Region",
    summary: "A severe wheat rust outbreak has been reported across several counties in the Southern agricultural region, affecting over 5,000 hectares of crops.",
    date: "April 12, 2025",
    location: "Southern Region",
    category: "Alert",
    image: "https://images.unsplash.com/photo-1574943320219-5630423d03ce",
    readingTime: "4 min read",
  },
  {
    id: 2,
    title: "New Potato Blight Strain Identified",
    summary: "Researchers have identified a new strain of potato blight that shows resistance to commonly used fungicides. Farmers are advised to implement integrated management practices.",
    date: "April 10, 2025",
    location: "Northern Plains",
    category: "Research",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    readingTime: "6 min read",
  },
  {
    id: 3,
    title: "Rice Blast Disease Spreads in Eastern Provinces",
    summary: "Rice farmers in the Eastern provinces are facing significant challenges as rice blast disease continues to spread, threatening this season's harvest.",
    date: "April 8, 2025",
    location: "Eastern Provinces",
    category: "Alert",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6",
    readingTime: "5 min read",
  },
  {
    id: 4,
    title: "Success Story: Community-Based Approach Controls Tomato Virus",
    summary: "A coordinated community approach has successfully contained the spread of tomato yellow leaf curl virus in the Western Valley, saving an estimated $2 million in crop value.",
    date: "April 5, 2025",
    location: "Western Valley",
    category: "Success Story",
    image: "https://images.unsplash.com/photo-1592841200221-a6c4c4e855a6",
    readingTime: "7 min read",
  },
  {
    id: 5,
    title: "Climate Change Increasing Fungal Disease Pressure",
    summary: "New research suggests climate change is expanding the range and severity of fungal crop diseases, with implications for global food security.",
    date: "April 2, 2025",
    location: "Global",
    category: "Research",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a",
    readingTime: "8 min read",
  },
  {
    id: 6,
    title: "Government Launches Emergency Response to Corn Smut Outbreak",
    summary: "The Agricultural Ministry has announced emergency measures to combat a widespread corn smut outbreak, including subsidized fungicide distribution.",
    date: "March 30, 2025",
    location: "Central Heartlands",
    category: "Policy",
    image: "https://images.unsplash.com/photo-1551516594-56cb78394645",
    readingTime: "5 min read",
  }
];

// Mock data for alerts
const alertsData = [
  {
    id: 1,
    disease: "Wheat Leaf Rust",
    severity: "High",
    locations: ["Southern Region", "Central Plains"],
    date: "April 15, 2025",
    recommendations: "Apply recommended fungicides. Monitor fields closely."
  },
  {
    id: 2,
    disease: "Potato Late Blight",
    severity: "Moderate",
    locations: ["Northern Highlands", "Eastern Valleys"],
    date: "April 14, 2025",
    recommendations: "Preventive spraying recommended. Increase field monitoring frequency."
  },
  {
    id: 3,
    disease: "Rice Blast",
    severity: "High",
    locations: ["Eastern Provinces", "Coastal Areas"],
    date: "April 12, 2025",
    recommendations: "Immediate fungicide application required. Consider harvest acceleration where possible."
  }
];

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNews, setFilteredNews] = useState(newsArticles);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = newsArticles.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNews(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-agrogreen-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Crop Disease News & Alerts</h1>
            <p className="text-agrogreen-50 text-lg mb-6">
              Stay informed about the latest disease outbreaks, research findings, and control measures
            </p>
            
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search news by keyword, location, or disease..."
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
            <Tabs defaultValue="all-news" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="all-news">All News</TabsTrigger>
                <TabsTrigger value="alerts">Alerts</TabsTrigger>
                <TabsTrigger value="research">Research & Insights</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all-news">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNews.map((article) => (
                    <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-video relative">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge 
                          className={`absolute top-2 right-2 
                            ${article.category === 'Alert' ? 'bg-red-500' : 
                              article.category === 'Research' ? 'bg-blue-500' : 
                              article.category === 'Success Story' ? 'bg-green-500' : 
                              'bg-amber-500'}`}
                        >
                          {article.category}
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-muted-foreground line-clamp-3 text-sm">
                          {article.summary}
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{article.location}</span>
                        </div>
                        <span>{article.readingTime}</span>
                      </CardFooter>
                      <div className="py-3 px-6 border-t">
                        <Button variant="ghost" className="w-full justify-between text-agrogreen-600 hover:text-agrogreen-700 p-0">
                          <span>Read full article</span>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
                
                {filteredNews.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No news articles found matching your search.</p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchTerm("");
                        setFilteredNews(newsArticles);
                      }}
                      className="mt-2"
                    >
                      Reset search
                    </Button>
                  </div>
                )}
                
                <div className="mt-6 text-center">
                  <Button variant="outline">Load More News</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="alerts">
                <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-red-800">Active Alerts</h3>
                      <p className="text-red-700 text-sm">
                        These alerts represent current disease outbreaks that require immediate attention.
                        Please review any alerts in your region.
                      </p>
                    </div>
                  </div>
                </div>
                
                {alertsData.map((alert) => (
                  <Card key={alert.id} className="mb-4 border-l-4 border-l-red-500">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{alert.disease}</CardTitle>
                          <CardDescription>Reported on {alert.date}</CardDescription>
                        </div>
                        <Badge 
                          className={
                            alert.severity === "High" ? "bg-red-500" : 
                            alert.severity === "Moderate" ? "bg-amber-500" : 
                            "bg-yellow-500"
                          }
                        >
                          {alert.severity} Severity
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium mb-1">Affected Locations:</h4>
                          <div className="flex flex-wrap gap-2">
                            {alert.locations.map((location, index) => (
                              <div key={index} className="flex items-center text-sm bg-muted px-2 py-1 rounded">
                                <MapPin className="h-3 w-3 mr-1 text-muted-foreground" />
                                <span>{location}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1">Recommendations:</h4>
                          <p className="text-muted-foreground text-sm">{alert.recommendations}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full justify-between text-red-600 hover:text-red-700 hover:bg-red-50">
                        <span>View detailed alert information</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
                
                <div className="flex items-center justify-between mt-8 p-4 bg-agrogreen-50 rounded-lg">
                  <div className="flex items-center">
                    <Bell className="h-5 w-5 text-agrogreen-600 mr-2" />
                    <span className="font-medium">Get Alerts For Your Area</span>
                  </div>
                  <Button className="bg-agrogreen-600 hover:bg-agrogreen-700 text-white">
                    Subscribe to Alerts
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="research">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {newsArticles
                    .filter(article => article.category === "Research")
                    .map((article) => (
                      <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-video relative">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                          <Badge className="absolute top-2 right-2 bg-blue-500">
                            {article.category}
                          </Badge>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle>{article.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-muted-foreground">
                            {article.summary}
                          </p>
                        </CardContent>
                        <CardFooter className="flex justify-between text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Globe className="h-4 w-4 mr-1" />
                            <span>{article.location}</span>
                          </div>
                          <span>{article.readingTime}</span>
                        </CardFooter>
                        <div className="py-3 px-6 border-t">
                          <Button variant="ghost" className="w-full justify-between text-blue-600 hover:text-blue-700 p-0">
                            <span>Read research paper</span>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                    
                  <Card className="flex flex-col justify-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-800">Research Resources</CardTitle>
                      <CardDescription>
                        Access the latest scientific papers and research findings on crop diseases
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-2">
                        <Button variant="outline" className="justify-start border-blue-200 text-blue-700 hover:bg-blue-50">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Scientific Journals
                        </Button>
                        <Button variant="outline" className="justify-start border-blue-200 text-blue-700 hover:bg-blue-50">
                          <Globe className="h-4 w-4 mr-2" />
                          Academic Databases
                        </Button>
                        <Button variant="outline" className="justify-start border-blue-200 text-blue-700 hover:bg-blue-50">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          Disease Tracking Studies
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Browse All Research
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

export default News;
