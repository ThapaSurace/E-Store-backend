import User from "../model/user.model.js";
import bcrypt from "bcryptjs"

export const register = async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;
 
  const existingUsername = await User.findOne({username})
  if(existingUsername) return res.status(400).send("Username already exists")
    
  const existingEmail = await User.findOne({email})
  if(existingEmail) return res.status(400).send("Email already exists")

  try {
    const hashPassword = bcrypt.hashSync(password,10)
    const user = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashPassword,
    });
    await user.save();
    res.status(201).send("User created successfully!");
  } catch (err) {
    res.status(500).send(err)
  }
};
