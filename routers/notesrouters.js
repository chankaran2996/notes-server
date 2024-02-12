// Importing express
import express from "express";

// importing all controlles


// creating new router object
const notesRoute = express.Router();

// get methods

// Fectch all notes
notesRoute.get("/own/:id");

// Fectch note by ID
notesRoute.get("/:id");

// post methods

// creating notes in DB
notesRoute.post("/");

// delete methods

// delete note by ID
notesRoute.delete("/:id");

// put methods

// Edit note by ID
notesRoute.put("/:id");

export default notesRoute;