import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { MongooseError } from "mongoose";
import { Course } from "./models/courseModel.js";
import coursesRoutes from "./routes/coursesRoutes.js";
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//opt1:Allow all origins with default of cors(*)
app.use(cors());
//opt2:Allow Cuztom origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["content-Type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("hello mern");
});

app.use("/courses", coursesRoutes);
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
