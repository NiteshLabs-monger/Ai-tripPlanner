import { generateItinerary} from "../Controllers/itenary.controller.js";
import { Router } from "express";

const router = Router()

router.route("/generate").post(
     generateItinerary
)

export default router;