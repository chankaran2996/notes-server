// Importing express
import express from "express";
// Improting cors which handile cors policies
import cors from "cors";

import router from "./routers/userrouters.js";
// Importing dotenv
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./database/connetion.js";

const app = express();
// For allowing other orgin
app.use(cors());
//  It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());

// creating responce for home routs
app.get("/", (req, res) => {
    res.status(200).json("Sucessfully connected");
});

// connecting with api route
app.use("/api", router);

// connnection
const startserver = async () => {
    await connectDB();
    //  starting server
    app.listen(process.env.PORT, () => {
        console.log(`Server Rur at ${process.env.PORT}`);
    });
};
startserver();