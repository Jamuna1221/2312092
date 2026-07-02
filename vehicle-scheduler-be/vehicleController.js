import { fetchVehicles, fetchdepots } from "./fetchtry.js";
import { log } from "../logging-middleware/logger.js";
export const getSchedulingData = async (req, res) => {
  try {
    await log("Backend", "info", "controller", "Fetching scheduling data");
    const depotsResponse =await fetchdepots(req, res);
    const vehiclesResponse =await fetchVehicles(req, res);
    res.status(200).json({
      message: "Scheduling data fetched",
      data: {
        depots:depotsResponse,
        vehicles:vehiclesResponse,
      },
    });
  } catch (error) {
    await log("Backend", "error", "controller", `Data fetch error: ${error.message}`);
    res.status(500).json({
      message: "Error fetching scheduling data",
      error: error.message,
    });
  }
};
