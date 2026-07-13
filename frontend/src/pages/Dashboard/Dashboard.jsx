import React, { useState } from 'react';
import { 
  Calendar, MapPin, Wallet, Sparkles, Navigation, 
  CloudRain, Clock, Users, CheckCircle2, AlertCircle, 
  ChevronRight, Search, FileText, Briefcase, ThumbsUp, 
  Activity, ArrowRight, Sun, MessageSquare, Info
} from 'lucide-react';

export default function UpgradedAITravelDashboard() {
  const [votedItems, setVotedItems] = useState({});

  const toggleVote = (id) => {
    setVotedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- SHADCN NAV / COMMAND BAR --- */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-6 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-100">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r bg-clip-text text-transparent from-indigo-600 to-violet-600">
                Vagabond.ai
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
              <span className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-900 font-semibold">Dashboard</span>
              <span className="px-3 py-1.5 rounded-md hover:bg-slate-50 transition cursor-pointer">Explore</span>
              <span className="px-3 py-1.5 rounded-md hover:bg-slate-50 transition cursor-pointer">Expenses</span>
            </nav>
          </div>
          
          {/* AI Global Search Input (shadcn input pattern) */}
          <div className="relative w-full max-w-md mx-4 hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Ask AI: 'Find a lunch spot near our 2 PM stop'..." 
              className="w-full h-9 rounded-lg bg-slate-100 pl-10 pr-4 text-sm border border-transparent focus:border-slate-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 outline-none transition"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium shadow-sm">
              <Users className="h-3.5 w-3.5" />
              <span>Eurotrip Crew (3)</span>
            </div>
            <div className="flex -space-x-2">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="User 1" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="User 2" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="User 3" />
            </div>
          </div>
        </div>
      </header>

      {/* --- DASHBOARD CONTAINER --- */}
      <main className="p-4 sm:p-6 max-w-[1600px] mx-auto space-y-6">
        
        {/* HERO LIVE SUMMARY CARD */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white p-6 shadow-xl border border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 pointer-events-none" />
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Tracker: Day 2 of 5
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Summer Romance in Paris</h1>
              <p className="text-slate-400 text-sm mt-1 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-rose-400" /> Latin Quarter, 5th Arrondissement
              </p>
            </div>
            
            {/* Context Widget Hub */}
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 min-w-[150px]">
                <CloudRain className="h-5 w-5 text-sky-400" />
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-medium">Weather Alert</div>
                  <div className="text-sm font-semibold">Rain starting at 15:00</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 min-w-[180px]">
                <Clock className="h-5 w-5 text-amber-400" />
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-medium">Next Fixed Entry</div>
                  <div className="text-sm font-semibold truncate max-w-[130px]">Louvre Museum</div>
                  <div className="text-xs text-slate-400">14:30 Entry Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- DYNAMIC AI PIVOT / ALERT MODULE --- */}
        <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-4 shadow-sm backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1 lg:flex items-center justify-between gap-6">
              <div>
                <h5 className="font-semibold text-amber-900 text-sm flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-600" /> 
                  AI Proactive Re-Route
                </h5>
                <p className="text-xs text-amber-800/90 mt-1 leading-relaxed">
                  Heavy rain predicted at 15:00 will disrupt your open-air **Tuileries Garden Walk**. The AI found an open indoor gallery pathway nearby to save your afternoon footprint without wasting transit time.
                </p>
              </div>
              <div className="mt-3 lg:mt-0 flex items-center gap-2 shrink-0">
                <button className="px-3 py-1.5 hover:bg-amber-100 text-amber-900 rounded-lg text-xs font-medium transition">
                  Dismiss
                </button>
                <button className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-medium transition shadow-sm shadow-amber-600/10 flex items-center gap-1">
                  Optimize Schedule <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- THREE COLUMN LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* COLUMN 1: TRACK & PACE (Width 4/12) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* FATIGUE & PACING METER (NEW UPGRADE MODULE) */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-3.5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2 font-semibold text-slate-800 text-sm">
                  <Activity className="h-4 w-4 text-indigo-600" />
                  <span>AI Pacing & Exhaustion Meter</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                  Moderate Pace
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Estimated Steps: **16,500**</span>
                  <span className="font-medium text-slate-700">68% Capacity</span>
                </div>
                {/* Custom shadcn-like progress track */}
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full rounded-full" style={{ width: '68%' }} />
                </div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                **AI Insight:** Day 2 has compressed walking zones. Total active duration is manageable, but the 90-minute gap between your museum trip and dinner is ideal for a rest stop.
              </p>
            </div>

            {/* ITINERARY TIMELINE CARD */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2 font-semibold text-slate-800 text-sm">
                  <Calendar className="h-4 w-4 text-indigo-600" />
                  <span>Today's Track Flow</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">July 2, 2026</span>
              </div>
              
              <div className="p-4 relative before:absolute before:left-7 before:top-6 before:bottom-6 before:w-0.5 before:bg-slate-100">
                {/* Item 1: Complete */}
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

                {/* Item 3: Pending Entry */}
                <div className="relative pl-8 pb-6">
                  <div className="absolute left-[11px] top-1.5 h-3 w-3 rounded-full bg-slate-300 ring-4 ring-white" />
                  <div className="text-xs font-mono text-slate-400">14:30 - 17:00</div>
                  <h4 className="text-sm font-medium text-slate-800 mt-0.5">Louvre Museum Guided Entry</h4>
                  <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-amber-100 bg-amber-50/60 text-amber-800 text-[11px]">
                    <FileText className="h-3 w-3" /> Digital pass required at door
                  </div>
                </div>

                {/* Item 4: AI Smart Injected Gap Recovery */}
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
            </div>
          </div>

          {/* COLUMN 2: GEOGRAPHY & GROUP VOTING (Width 5/12) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* ROUTE CANVAS INTERFACE */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2 font-semibold text-slate-800 text-sm">
                  <Navigation className="h-4 w-4 text-indigo-600" />
                  <span>Dynamic Geographic Clustering</span>
                </div>
                <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  0.8 Miles Max Separation
                </span>
              </div>
              
              {/* Mock Map Canvas space */}
              <div className="h-[230px] bg-slate-50 relative p-4 flex items-center justify-center overflow-hidden border-b border-slate-100">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]" />
                
                <div className="relative w-full max-w-sm p-4 bg-white/95 border border-slate-200 shadow-sm rounded-xl space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400 tracking-wide mb-1">
                    <Sun className="h-3 w-3 text-amber-500" /> Neighborhood Matrix Map
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-500">
                    <span className="h-4 w-4 rounded bg-slate-100 flex items-center justify-center text-[10px] font-bold">1</span>
                    <span>Boulangerie Utopie (11th Arr.)</span>
                  </div>
                  <div className="h-3 w-0.5 bg-slate-300 ml-2 border-l border-dashed"></div>
                  <div className="flex items-center gap-2.5 text-indigo-900 font-medium">
                    <span className="h-4 w-4 rounded bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold">2</span>
                    <span>Île de la Cité (4th Arr.)</span>
                  </div>
                  <div className="h-3 w-0.5 bg-indigo-300 ml-2"></div>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <span className="h-4 w-4 rounded bg-slate-200 flex items-center justify-center text-[10px] font-bold">3</span>
                    <span>Louvre Museum (1st Arr.)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* UPGRADE MODULE: COLLABORATIVE GROUP POLL & VOTE BUCKET */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2 font-semibold text-slate-800 text-sm">
                  <Users className="h-4 w-4 text-indigo-600" />
                  <span>Group Strategy & Vote Bucket</span>
                </div>
                <span className="text-[11px] text-slate-400">Tonight's Late Options</span>
              </div>
              
              <div className="space-y-2.5">
                {[
                  { id: 1, title: 'Seine Evening Jazz Cruise', votes: 2, tag: 'Scenic' },
                  { id: 2, title: 'Cocktails at Le Syndicat', votes: 1, tag: 'Nightlife' },
                  { id: 3, title: 'Speakeasy Search near Marais', votes: 0, tag: 'Adventure' }
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:border-slate-200 transition bg-slate-50/30">
                    <div className="space-y-0.5 max-w-[70%]">
                      <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        {item.tag}
                      </span>
                      <h5 className="text-xs font-semibold text-slate-800 truncate">{item.title}</h5>
                    </div>
                    
                    <button 
                      onClick={() => toggleVote(item.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition ${
                        votedItems[item.id] 
                          ? 'bg-indigo-600 text-white shadow-sm' 
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <ThumbsUp className="h-3 w-3" />
                      <span>{item.votes + (votedItems[item.id] ? 1 : 0)}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* COLUMN 3: UTILITY & LEDGERS (Width 3/12) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* LEDGER BUDGET TRACKER */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2 font-semibold text-slate-800 text-sm">
                  <Wallet className="h-4 w-4 text-indigo-600" />
                  <span>Real-time Budget Split</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Group Usage Matrix</span>
                  <span className="font-semibold text-slate-800">$1,420 / $2,500</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full rounded-full" style={{ width: '56%' }} />
                </div>
              </div>
              
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between p-2 rounded bg-slate-50">
                  <span className="text-slate-500">Shared Rooms</span>
                  <span className="font-medium text-slate-800">$850.00</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-50">
                  <span className="text-slate-500">Culinary / Dining</span>
                  <span className="font-medium text-slate-800">$320.00</span>
                </div>
              </div>
            </div>

            {/* DOCUMENT SECURE STORAGE */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-3">
              <div className="flex items-center gap-2 font-semibold text-slate-800 text-sm border-b border-slate-100 pb-2">
                <Briefcase className="h-4 w-4 text-indigo-600" />
                <span>Document Vault</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Louvre_Passes.pdf', size: '1.2 MB', color: 'text-rose-500' },
                  { name: 'AirFrance_Baggage.pdf', size: '420 KB', color: 'text-sky-500' }
                ].map((doc, index) => (
                  <a key={index} href="#" className="flex items-center justify-between p-2 rounded-lg border border-slate-100 hover:bg-slate-50/80 group transition">
                    <div className="flex items-center gap-2 text-xs min-w-0">
                      <FileText className={`h-4 w-4 shrink-0 ${doc.color}`} />
                      <span className="font-medium text-slate-700 truncate">{doc.name}</span>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-600 shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* HYPER-LOCAL CHEAT SHEET (NEW UPGRADE MODULE) */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-3">
              <div className="flex items-center gap-2 font-semibold text-slate-800 text-sm border-b border-slate-100 pb-2">
                <Info className="h-4 w-4 text-indigo-600" />
                <span>Local Smart Guide</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                <div className="p-2 border border-slate-100 rounded-lg bg-slate-50/50">
                  <div className="text-slate-400 font-medium">Tipping Policy</div>
                  <div className="font-bold text-slate-800 mt-0.5">Service Compris</div>
                </div>
                <div className="p-2 border border-slate-100 rounded-lg bg-slate-50/50">
                  <div className="text-slate-400 font-medium">Metro App</div>
                  <div className="font-bold text-slate-800 mt-0.5">Bonjour RATP</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}