import { create } from "zustand";

export const useCurrentItinerary = create((set) =>{
    itinerary : null;
    setItinerary : set((data)=> {
        itinerary:data

    })

})