import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();
connectDB();

 const app = express();

 app.use(cors());
 app.use(express.json());

 app.get("/", (req, res) => res.send("My To-Do API Running..."));
 app.use("/api/todos", todoRoutes);

 const PORT = process.env.PORT || 2025;
 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
