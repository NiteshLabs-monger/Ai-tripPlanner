import Itinerary from '../models/itenary.model.js';
import { GoogleGenAI } from "@google/genai"
import {asyncHandler} from '../utils/AsyncHandler.js';



const ai = new GoogleGenAI({});


const generateItinerary = asyncHandler(async (req, res) => {


  
    const { destination, duration, budget, preferences } = req.body;

    if (!destination || !duration) {
      return res.status(400).json({ error: "Destination and duration are required." });
    }
    const prompt = `
      Generate a ${duration}-day itinerary for ${destination}.
      Budget level: ${budget}. Interests: ${preferences?.join(', ') || 'General'}.
      
      Respond ONLY with a valid JSON object matching this schema structure:
      {
        "destination": "${destination}",
        "durationDays": ${duration},
        "budget": "${budget}",
        "preferences": ${JSON.stringify(preferences)},
        "schedule": [
          {
            "dayNumber": 1,
            "theme": "Day theme description",
            "activities": [
              { "time": "09:00 AM", "activity": "Activity description", "location": "Location name", "cost": 0 }
            ]
          }
        ]
      }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    // Parse the strict JSON string returned by the AI
    const itineraryData = JSON.parse(response.text);

    // Save the generated itinerary to MongoDB
    // const savedItinerary = await Itinerary.create(itineraryData);

    return res.status(201).json(itineraryData);

})
// Fetch a saved itinerary by ID
const getItineraryById = asyncHandler(async (req, res) => {
  
    const itinerary = await Itinerary.findById(req.params.id);
    if (!itinerary) return res.status(404).json({ error: "Itinerary not found" });
    return res.status(200).json(itinerary);
  
})

export { generateItinerary, getItineraryById };