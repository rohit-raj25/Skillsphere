import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { MongooseError } from "mongoose";
import { Course } from "./models/courseModel.js";
import coursesRoutes from "./routes/coursesRoutes.js";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//Middleware for parsing request body
app.use(express.json());
app.use("/images", express.static("./images"));

//Middleware for handling CORS POLICY
//opt1:Allow all origins with default of cors(*)
// app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Replace * with your client's domain in production
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});
//opt2:Allow Cuztom origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["content-Type"],
//   })

// );

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", userId);

    socket.on("disconnect", () => {
      socket.to(roomId).broadcast.emit("user-disconnected", userId);
    });
  });
});

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
