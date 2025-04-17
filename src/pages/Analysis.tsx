import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Image, Scan, AlertCircle, Leaf, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { analyzeCropImage, DiseaseAnalysisResult } from "@/services/aiModelService";

const Analysis = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<DiseaseAnalysisResult | null>(null);
  const [cropType, setCropType] = useState("wheat");
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image smaller than 10MB",
          variant: "destructive"
        });
        return;
      }
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please select an image file (JPEG, PNG, or WebP)",
          variant: "destructive"
        });
        return;
      }
      
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setAnalysisResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      toast({
        title: "No image selected",
        description: "Please upload an image first",
        variant: "destructive"
      });
      return;
    }
    
    setIsAnalyzing(true);
    
    try {
      const result = await analyzeCropImage(selectedFile, cropType);
      setAnalysisResult(result);
      
      toast({
        title: "Analysis Complete",
        description: `Detected: ${result.disease} with ${result.confidence.toFixed(1)}% confidence`,
        variant: "default"
      });
    } catch (error) {
      console.error("Analysis failed:", error);
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing your image. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setAnalysisResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-10 bg-agrogreen-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2 text-foreground">Crop Disease Analyzer</h1>
            <p className="text-muted-foreground mb-8">
              Upload an image of your crop to analyze and identify potential diseases
            </p>

            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="upload">Upload Image</TabsTrigger>
                <TabsTrigger value="camera">Use Camera</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload">
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <Label className="mb-2 block">Select Crop Type</Label>
                      <RadioGroup 
                        value={cropType} 
                        onValueChange={setCropType}
                        className="flex flex-wrap gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="wheat" id="wheat" />
                          <Label htmlFor="wheat">Wheat</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="rice" id="rice" />
                          <Label htmlFor="rice">Rice</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="corn" id="corn" />
                          <Label htmlFor="corn">Corn</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="potato" id="potato" />
                          <Label htmlFor="potato">Potato</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="tomato" id="tomato" />
                          <Label htmlFor="tomato">Tomato</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    {!previewUrl ? (
                      <div 
                        className="border-2 border-dashed border-border rounded-lg h-64 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => document.getElementById('fileInput')?.click()}
                      >
                        <input 
                          type="file" 
                          id="fileInput" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={handleFileChange} 
                        />
                        <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-lg font-medium text-foreground">Upload an image</p>
                        <p className="text-sm text-muted-foreground">Drag and drop or click to browse</p>
                        <p className="text-xs text-muted-foreground mt-2">JPEG, PNG or WebP, max 10MB</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="relative rounded-lg overflow-hidden">
                          <img 
                            src={previewUrl} 
                            alt="Crop preview" 
                            className="w-full h-auto max-h-96 object-contain bg-black/5 rounded-lg"
                          />
                          <Button 
                            variant="secondary" 
                            size="sm" 
                            onClick={handleReset}
                            className="absolute top-2 right-2"
                          >
                            Change Image
                          </Button>
                        </div>
                        
                        {!isAnalyzing && !analysisResult && (
                          <Button 
                            className="w-full bg-agrogreen-600 hover:bg-agrogreen-700 text-white"
                            onClick={handleAnalyze}
                          >
                            <Scan className="mr-2 h-5 w-5" /> 
                            Analyze Image
                          </Button>
                        )}
                        
                        {isAnalyzing && (
                          <div className="p-4 bg-agrogreen-50 rounded-lg text-center">
                            <div className="animate-pulse flex flex-col items-center">
                              <Scan className="h-8 w-8 text-agrogreen-600 mb-2" />
                              <p className="text-foreground font-medium">Analyzing your image...</p>
                              <p className="text-muted-foreground text-sm">This may take a few moments</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="camera">
                <Card>
                  <CardContent className="p-6">
                    <div className="border-2 border-dashed border-border rounded-lg h-64 flex flex-col items-center justify-center">
                      <Image className="h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-lg font-medium text-foreground">Use Device Camera</p>
                      <p className="text-sm text-muted-foreground mb-4">Take a clear photo of the affected crop</p>
                      <Button className="bg-agrogreen-600 hover:bg-agrogreen-700 text-white">
                        Open Camera
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            {analysisResult && (
              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-border">
                <div className="flex items-center mb-6">
                  <div className="bg-agrogreen-100 p-2 rounded-full mr-4">
                    <Leaf className="h-6 w-6 text-agrogreen-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {analysisResult.disease}
                    </h2>
                    <div className="flex items-center">
                      <span className="text-sm text-muted-foreground mr-2">Scientific name:</span>
                      <span className="text-sm italic">{analysisResult.scientificName}</span>
                    </div>
                  </div>
                  <div className="ml-auto flex items-center bg-agrogreen-50 px-3 py-1 rounded-full">
                    <CheckCircle className="h-4 w-4 text-agrogreen-600 mr-1" />
                    <span className="text-sm font-medium">
                      {analysisResult.confidence.toFixed(1)}% confidence
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Description</h3>
                    <p className="text-muted-foreground">
                      {analysisResult.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Severity & Impact</h3>
                    <div className="flex items-center mb-2">
                      <div className={`
                        w-3 h-3 rounded-full mr-2
                        ${analysisResult.severity === "Low" ? "bg-green-500" : 
                          analysisResult.severity === "Moderate" ? "bg-yellow-500" : 
                          "bg-red-500"}
                      `}></div>
                      <span className="font-medium">{analysisResult.severity} Severity</span>
                    </div>
                    <p className="text-muted-foreground">
                      {analysisResult.impact}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Symptoms</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {analysisResult.symptoms.map((symptom: string, index: number) => (
                        <li key={index}>{symptom}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Causes</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {analysisResult.causes.map((cause: string, index: number) => (
                        <li key={index}>{cause}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Treatment</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {analysisResult.treatments.map((treatment: string, index: number) => (
                        <li key={index}>{treatment}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <Button variant="outline" className="mr-2" onClick={handleReset}>
                    Analyze another image
                  </Button>
                  <Button className="bg-agrogreen-600 hover:bg-agrogreen-700 text-white">
                    Save Report
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Analysis;
