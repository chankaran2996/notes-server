// Importing express
import express from "express";

// importing all controlles


// creating new router object
const notesRoute = express.Router();

// get methods

// Fectch all movies
notesRoute.get("/");

// Fectch movie by ID
notesRoute.get("/:id");

// post methods

// creating movie in DB
notesRoute.post("/");

// delete methods

// delete movie by ID
notesRoute.delete("/:id");

// put methods

// Edit movie by ID
notesRoute.put("/:id");

export default notesRoute;