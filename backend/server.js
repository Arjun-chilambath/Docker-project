import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./Routes/userRoutes.js";
import { ConnectDB } from "./lib/db.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
await ConnectDB();
app.get("/api/check", (req, res) => {
  res.send("server is live");
});
app.use("/api/users", userRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
