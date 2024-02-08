import express from "express";
const router = express.Router();
// importing all controlles
import { register,login } from "../controllers/userControlers.js";
// Get method 

router.get("/login",login);
// post method
router.post("/register", register);



export default router;