import TripPreferenceWizard from "@/components/tripform";
import { Card, CardHeader, CardTitle, CardFooter, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function AskAi() {
  const [hasItinerary, setHasItinerary] = useState(false);
  const [activeTrip, setActiveTrip] = useState(null);

  const handleTripSuccess = (data) => {
    console.log(data)
    setHasItinerary(true);
    setActiveTrip(data);
  };

  return (
    <div className="flex items-center justify-center gap-4 p-4 bg-slate-100 min-h-screen">
      <Card 
  className={`w-1/2 min-h-[80vh] flex ${
    hasItinerary ? 'flex-col justify-start items-stretch p-6' : 'justify-center items-center'
  }`}
>
        {hasItinerary && activeTrip ? (
          <>
            <CardHeader>
              <CardTitle>{activeTrip?.destination || "Trip Title"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* BUG FIX: Changed itinerary.schedule to activeTrip.schedule */}
                {activeTrip.schedule?.map((day) => (
                  <div
                    key={day.dayNumber}
                    className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
                  >
                    <h2 className="text-xl font-bold text-indigo-600 mb-1">
                      Day {day.dayNumber}
                    </h2>
                    <p className="text-sm font-medium text-slate-700 mb-4 italic">
                      "{day.theme}"
                    </p>

                    {/* Activities Nested Loop */}
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
                ))}
              </div>
            </CardContent>
          </>
        ) : (
          <div className="m-auto w-full">
            <TripPreferenceWizard onSuccess={handleTripSuccess} />
          </div>
        )}
      </Card>

      <Card className="w-1/2 h-screen relative">
        <CardFooter className="absolute bottom-2 w-full pr-8">
          <Input disabled placeholder="Ask AI for suggestions..." />
        </CardFooter>
      </Card>
    </div>
  );
}