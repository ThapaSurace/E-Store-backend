import express from "express";
import { dbConnection } from "./config/dbConnection.js";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js"
import cors from "cors"
const app = express();

//d connection
dbConnection()

app.use(cors({origin: ['http://localhost:3000'], credentials:true}))

//body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello page");
});

//auth route
app.use('/api', userRoute)

mongoose.connection.once("open",()=>{
  console.log('Connected to mongo db')
  app.listen(4000, () => console.log("Server running on port 4000"));
})


