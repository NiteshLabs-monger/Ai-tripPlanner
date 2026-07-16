import { Card, CardContent,CardHeader } from "./ui/card";
import { CheckCircle2,FileText,Sparkles } from "lucide-react";
export default function TodayItinarary(){
    return (
    
        <Card>
            <CardHeader>
                <div className="flex justify-between">
                    <h4>Today"s Track Flow</h4>
                    <p> 2 july 2026</p>
                </div>
            </CardHeader>
            <CardContent>
                 <div className="p-4 relative before:absolute before:left-7 before:top-6 before:bottom-6 before:w-0.5 before:bg-slate-100">

                <div className="relative pl-8 pb-6">
                  <div className="absolute left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 ring-4 ring-white">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                  </div>
                  <div className="text-xs font-mono text-slate-400">09:00 - 10:30</div>
                  <h4 className="text-sm font-medium text-slate-400 line-through">Croissant Tasting at Boulangerie Utopie</h4>
                </div>

                {/* Item 2: Active */}
                <div className="relative pl-8 pb-6">
                  <div className="absolute left-[7px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 ring-4 ring-indigo-50 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  </div>
                  <div className="text-xs font-mono font-bold text-indigo-600">11:00 - 13:35</div>
                  <h4 className="text-sm font-semibold text-slate-900 mt-0.5">Explore Notre-Dame & Île de la Cité</h4>
                  <p className="text-xs text-slate-500 mt-1">Current zone. 12 mins walk to next location.</p>
                </div>

        
                <div className="relative pl-8 pb-6">
                  <div className="absolute left-[11px] top-1.5 h-3 w-3 rounded-full bg-slate-300 ring-4 ring-white" />
                  <div className="text-xs font-mono text-slate-400">14:30 - 17:00</div>
                  <h4 className="text-sm font-medium text-slate-800 mt-0.5">Louvre Museum Guided Entry</h4>
                  <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-amber-100 bg-amber-50/60 text-amber-800 text-[11px]">
                    <FileText className="h-3 w-3" /> Digital pass required at door
                  </div>
                </div>

            
                <div className="relative pl-8">
                  <div className="absolute left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-violet-100 ring-4 ring-white">
                    <Sparkles className="h-2.5 w-2.5 text-violet-600" />
                  </div>
                  <div className="text-xs font-mono text-violet-600 font-semibold">17:30 - 19:00</div>
                  <div className="p-3 rounded-lg bg-violet-50/40 border border-violet-100/80 mt-1">
                    <h4 className="text-xs font-bold text-violet-900 flex items-center gap-1">
                      AI Gap Filler: Café Verlet
                    </h4>
                    <p className="text-[11px] text-violet-700/90 mt-0.5 leading-relaxed">
                      Matches your interest in traditional Parisian espresso culture. Perfectly bridges your timeline to dinner.
                    </p>
                  </div>
                </div>
              </div>
            
          
            </CardContent>

        </Card>
    )


}