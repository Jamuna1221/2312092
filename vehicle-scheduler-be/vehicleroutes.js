import express from "express";
import { fetchdepots, fetchVehicles } from "./fetchtry.js";
import { getSchedulingData } from "./vehicleController.js";

const router = express.Router();

router.get("/depots", fetchdepots);
router.get("/vehicles", fetchVehicles);
router.get("/scheduling-data", getSchedulingData);

export default router; 