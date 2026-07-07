import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
  time: String, // e.g., "09:00 AM"
  activity: { type: String, required: true },
  location: String,
  cost: Number
});

const DaySchema = new mongoose.Schema({
  dayNumber: { type: Number, required: true },
  theme: String, // e.g., "Exploring Old Town"
  activities: [ActivitySchema]
});

const ItinerarySchema = new mongoose.Schema({
  destination: { type: String, required: true },
  durationDays: { type: Number, required: true },
  budget: { type: String, enum: ['Budget', 'moderate', 'Luxury'] },
  preferences: [String], // e.g., ['Adventure', 'Foodie', 'History']
  schedule: [DaySchema],
  createdAt: { type: Date, default: Date.now }
});

const Itinerary = mongoose.model('Itinerary', ItinerarySchema);

export default Itinerary;