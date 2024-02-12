// Importing mongoose 
import mongoose from "mongoose";

// Creating schema
const notes = mongoose.Schema(
  // Adding the fielleds and their type
  {
    title : { type: String },
    date : {type : Date },
    note : { type: String },
    email: { type : String }
  },
  // Adding time stramps which used save datas timings entered in DB
  {
    timestamps: true,
  }
);

// Exporting schema
const Notes = mongoose.model("notes", notes);
export default Notes;