import express from "express";
const router = express.Router();
// importing all controlles
import { register } from "../controllers/userControlers.js";
// Get method 


// post method
router.post("/register", register);



export default router;