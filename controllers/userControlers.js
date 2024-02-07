import User from "../models/userModels.js";


export const register = async (req, res) => {
    // Spliting data from req.bady to multiple varibles
    const { name, email, password } = req.body;
  
    //   Chicking all fields entered or not
    if (!name || !email || !password) {
      res.sendStatus(400);
      throw new Error("please enter all the fields");
    }
    //  Chicking the user already exists or not
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("user already exists");
    }

    //   Creating user
    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        // token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("failed to create");
    }
  };