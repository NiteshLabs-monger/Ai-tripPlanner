import React from 'react';
import { 
  Plane, 
  Calendar, 
  Map, 
  Settings, 
  Plus, 
  Search, 
  Bell, 
  MapPin, 
  Clock, 
  CloudSun 
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* 1. SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col p-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Plane className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">TripPal AI</span>
        </div>

        <nav className="space-y-1 flex-1">
          <NavItem icon={<Map className="w-5 h-5" />} label="Dashboard" active />
          <NavItem icon={<Calendar className="w-5 h-5" />} label="My Itineraries" />
          <NavItem icon={<MapPin className="w-5 h-5" />} label="Saved Places" />
          <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" />
        </nav>

        <div className="mt-auto p-4 bg-blue-50 rounded-xl">
          <p className="text-xs font-semibold text-blue-600 uppercase mb-2">AI Credits</p>
          <div className="w-full bg-blue-200 h-2 rounded-full mb-2">
            <div className="bg-blue-600 h-2 rounded-full w-2/3"></div>
          </div>
          <p className="text-xs text-blue-800">12/20 plans remaining</p>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* 2. TOP NAV */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search trips or destinations..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 bg-blue-100 rounded-full border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs">
              JD
            </div>
          </div>
        </header>

        {/* 3. SCROLLABLE DASHBOARD CONTENT */}
        <div className="p-8 overflow-y-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, John!</h1>
              <p className="text-slate-500">Ready for your next adventure?</p>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-200">
              <Plus className="w-5 h-5" />
              Plan New Trip
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN: TRIPS */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* ACTIVE TRIP HERO */}
              <section>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Coming Up Next</h3>
                <div className="relative group overflow-hidden rounded-2xl h-64 bg-slate-900 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1000" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                    alt="Tokyo"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white w-full">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-blue-300 text-sm font-medium mb-1">In 12 days • April 14 - 21</p>
                        <h2 className="text-3xl font-bold">Tokyo & Kyoto Cherry Blossom</h2>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 text-center">
                          <CloudSun className="w-5 h-5 mx-auto mb-1" />
                          <span className="text-xs">18°C</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* DRAFTS GRID */}
              <section>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Drafts & Saved Ideas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TripCard city="Paris" date="Flexible" image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600" />
                  <TripCard city="Bali" date="July 2026" image="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600" />
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN: AI INSIGHTS */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  AI Travel Assistant
                </h4>
                <div className="space-y-4">
                  <div className="p-3 bg-slate-50 rounded-lg text-sm border-l-4 border-blue-500">
                    <p className="font-medium">Price Drop Alert!</p>
                    <p className="text-slate-600">Flights to your saved destination "Bali" are 15% cheaper today.</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg text-sm border-l-4 border-amber-500">
                    <p className="font-medium">Visa Requirement</p>
                    <p className="text-slate-600">Don't forget to apply for your Japan EVisa at least 7 days before.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 rounded-2xl text-white">
                <h4 className="font-bold mb-2">Upgrade to Pro</h4>
                <p className="text-blue-100 text-sm mb-4">Get unlimited AI itineraries and offline maps access.</p>
                <button className="w-full bg-white text-blue-600 py-2 rounded-xl font-bold text-sm">
                  Go Pro
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

/* Helper Components for clean code */
const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${active ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
    {icon}
    <span className="font-medium">{label}</span>
  </a>
);

const TripCard = ({ city, date, image }: { city: string, date: string, image: string }) => (
  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
    <div className="h-32 relative overflow-hidden">
      <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={city} />
    </div>
    <div className="p-4">
      <h5 className="font-bold text-lg">{city} Trip</h5>
      <p className="text-slate-500 text-sm">{date}</p>
    </div>
  </div>
);

export default Dashboard;