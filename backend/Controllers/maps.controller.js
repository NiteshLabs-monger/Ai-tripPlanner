import Itenary from "../Models/itenary.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { getItineraryById } from "./itenary.controller.js";

const maps = asyncHandler(async (req, res) => {
  const locations = await Itenary.distinct("days.activities.location", {
    _id: req.params.id,
  });
  if (!locations) {
    return res.status(404).json({ error: "Itinerary not found." });
  }
});
