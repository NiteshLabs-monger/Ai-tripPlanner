import { useCurrentItinerary } from "@/context/useItineraryStore";
import { useState } from "react";
import TripMap from "@/components/mapcomponent.jsx";

export default function Collaborationcenter(){
    // const {itinerary,setItinerary} = useCurrentItinerary()
    const [itinerary, setItinerary] = useState([
    { 
      name: "Eiffel Tower", 
      position: [48.8584, 2.2945], 
      description: "Day 1: Morning Visit" 
    },
    { 
      name: "Louvre Museum", 
      position: [48.8606, 2.3376], 
      description: "Day 1: Afternoon Art Tour" 
    }
  ]);

  return (
    <div>
    
      
      
    
      <TripMap coordinates={[48.8566, 2.3522]} initialZoom={12} places={itinerary} />
    </div>
  );

}