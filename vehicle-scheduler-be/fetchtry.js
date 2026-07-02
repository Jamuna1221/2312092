import axios from "axios";
import {log} from "../logging-middleware/logger.js";
const API_BASE="http://4.224.186.213/evaluation-service";
let accessToken = null;
export async function getAuthToken() {
  try {
    const response = await axios.post(`${API_BASE}/auth`, 
    {
    "email": process.env.EMAIL,
    "name": process.env.NAME,
    "rollNo": process.env.ROLL,
    "accessCode":process.env.AC,
    "clientID":process.env.CI,
    "clientSecret": process.env.CS
    });
    //console.log("Auth response:",response.data);
    accessToken = response.data.access_token;
    await log("Backend","info","controller","AuthToken received successfully",accessToken);
    return accessToken;

  } catch (error) {
    console.error("Auth error details:", error.response?.data || error.message);
    await log("Backend","error","controller","Authentication failed: " + error.message);
    throw new Error("Authentication failed");
  }
}
export const fetchdepots=async(req,res)=> {
    const aToken = await getAuthToken();
   const response =await axios.get(
    `${API_BASE}/depots`,
    {
      headers: {
        Authorization:`Bearer ${aToken}`,
      }
    }
  );
  await log("Backend","info","controller","depots fetched succesfully",accessToken);
  res.status(200).json({
    message:"success",
    data:response.data
  })
    
}
export const fetchVehicles= async(req,res)=>{
    const aToken = await getAuthToken();
    const response =await axios.get(
        `${API_BASE}/vehicles`,
        {headers:{
            Authorization:`Bearer ${aToken}`
        }}
    );
    await log("Backend","info","controller","vehicles fetched succesfully",accessToken);
    res.status(200).json({
        message:"success",
        data:response.data
    })
}