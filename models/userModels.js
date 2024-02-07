// Importing mongoose 
import mongoose from "mongoose";
// Importing bcrypt for hashing password 
import bcrypt from "bcryptjs";

// Creating schema
const userSchema = mongoose.Schema(
  // Adding the fielleds and their type
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: { type: String },
    firstName: { type: String},
    lastName: { type: String},
    mobile : { type : Number},
    address: { type: String},
    profile: { type: String},
    databaseName: { type : Array },
    tableName: { type : Array },
    collectionName : { type : Array }
  },
  // Adding time stramps which used save datas timings entered in DB
  {
    timestamps: true,
  }
);
// Hashing 
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Exporting schema
const User = mongoose.model("User", userSchema);
export default User;