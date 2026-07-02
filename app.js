import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import vehicleroutes from "./vehicle-scheduler-be/vehicleroutes.js";
dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());

app.use("/", vehicleroutes);
// app.get("/", (req, res) => {
//     res.status(200).json({
//         message: "working",
//         success: true
//     });
// });


export default app;