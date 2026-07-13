import TripPreferenceWizard from "@/components/tripform";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function AskAi() {
  const [hasItinerary, setHasItinerary] = useState(false);
  const [activeTrip, setActiveTrip] = useState(null);

  const handleTripSuccess = (data) => {
    setHasItinerary(true);
    setActiveTrip(data);
  };

  return (
    // FIX 1: Max height constraint layout with consistent interior screen padding
    <div className="flex gap-6 bg-slate-100 h-screen w-screen p-6 box-border overflow-hidden">
      
      {/* LEFT SIDE PANEL: WIZARD / ITINERARY */}
      <Card className="flex-1 flex flex-col h-full overflow-hidden bg-white shadow-sm">
        {hasItinerary && activeTrip ? (
          <>
            <CardHeader className="flex-shrink-0">
              <CardTitle className="text-xl font-bold text-indigo-600">
                {activeTrip?.destination || "Trip Title"}
              </CardTitle>
            </CardHeader>
            
            {/* FIX 2: Dynamic Scroll Box & Content Centering for Carousel */}
            <CardContent className="flex-1 overflow-y-auto flex items-center justify-center p-6">
              <div className="w-4/5 relative"> 
                <Carousel className="w-full">
                  <CarouselContent>
                    {activeTrip?.schedule?.map((day) => (
                      <CarouselItem key={day.dayNumber}>
                        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm max-h-[60vh] overflow-y-auto">
                          <h2 className="text-xl font-bold text-indigo-600 mb-1">
                            Day {day.dayNumber}
                          </h2>
                          <p className="text-sm font-medium text-slate-700 mb-4 italic">
                            "{day.theme}"
                          </p>

                          <div className="border-l-2 border-slate-100 pl-4 space-y-4">
                            {day.activities?.map((act, idx) => (
                              <div key={idx} className="relative">
                                <div className="text-xs font-bold text-slate-400">
                                  {act.time}
                                </div>
                                <div className="text-base font-semibold text-slate-900">
                                  {act.activity}
                                </div>
                                <div className="text-xs text-slate-500">
                                  {act.location}
                                </div>
                                <div className="text-xs font-medium text-emerald-600 mt-0.5">
                                  {act.cost === 0 ? "Free" : `$${act.cost}`}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-12" />
                  <CarouselNext className="-right-12" />
                </Carousel>
              </div>
            </CardContent>
          </>
        ) : (
          // Centered Form layout alignment wrapper
          <CardContent className="flex-1 flex items-center justify-center overflow-y-auto p-6">
            <div className="w-full max-w-md">
              <TripPreferenceWizard onSuccess={handleTripSuccess} />
            </div>
          </CardContent>
        )}
      </Card>

      {/* RIGHT SIDE PANEL: CHAT INTERFACE */}
      {/* FIX 3: Flex-Column container strategy so input naturally claims bottom area without breaking margins */}
      <Card className="flex-1 flex flex-col h-full overflow-hidden bg-white shadow-sm p-6 box-border">
        
        {/* Chat message content box streams here - takes up remaining automatic space */}
        <div className="flex-1 overflow-y-auto text-sm text-slate-400 p-2">
          {hasItinerary ? "AI Assistant loaded. Ask questions about your itinerary!" : "Complete the wizard to chat with your itinerary assistant."}
        </div>

        {/* Clean, stable input footprint docking */}
        <CardFooter className="pt-4 p-0 flex-shrink-0">
          <Input disabled={!hasItinerary} placeholder="Ask AI for suggestions..." className="w-full" />
        </CardFooter>
      </Card>

    </div>
  );
}