
/**
 * Service to handle communication with the AI model API
 */

export interface DiseaseAnalysisResult {
  disease: string;
  confidence: number;
  scientificName: string;
  severity: "Low" | "Moderate" | "High";
  description: string;
  symptoms: string[];
  causes: string[];
  treatments: string[];
  impact: string;
}

/**
 * Analyzes an image for crop diseases
 * @param imageFile The image file to analyze
 * @param cropType The type of crop in the image
 * @returns Promise resolving to analysis results
 */
export const analyzeCropImage = async (
  imageFile: File,
  cropType: string
): Promise<DiseaseAnalysisResult> => {
  try {
    // Create form data to send the image
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('cropType', cropType);

    // REPLACE WITH YOUR ACTUAL API ENDPOINT
    const API_URL = 'https://your-model-api-endpoint.com/predict';
    
    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData,
      // Add headers if needed (e.g., authentication)
      // headers: {
      //   'Authorization': 'Bearer YOUR_API_KEY'
      // }
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const result = await response.json();
    return result;

    // COMMENT OUT THIS FALLBACK ONCE YOUR API IS CONNECTED
    // Fallback to mock data for testing
    // return {
    //   disease: "Wheat Leaf Rust",
    //   confidence: 95.7,
    //   scientificName: "Puccinia triticina",
    //   severity: "Moderate",
    //   description: "Wheat leaf rust is a fungal disease that affects wheat crops. It appears as small, round, orange-brown pustules on the leaves, which can reduce photosynthesis and yield.",
    //   symptoms: [
    //     "Orange-brown pustules on leaf surfaces",
    //     "Circular or oval-shaped lesions",
    //     "Yellowing of leaf tissue around pustules",
    //     "Premature leaf death in severe cases"
    //   ],
    //   causes: [
    //     "Fungal pathogen Puccinia triticina",
    //     "Warm temperatures (60-80°F)",
    //     "High humidity",
    //     "Extended leaf wetness periods"
    //   ],
    //   treatments: [
    //     "Apply fungicide treatments (e.g., propiconazole, tebuconazole)",
    //     "Rotate crops to reduce disease pressure",
    //     "Plant resistant wheat varieties",
    //     "Remove volunteer wheat to break disease cycle",
    //     "Optimize planting dates to avoid peak disease conditions"
    //   ],
    //   impact: "Yield losses can range from 5-30% in moderate to severe infections. Quality of grain may also be affected."
    // };
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
};
