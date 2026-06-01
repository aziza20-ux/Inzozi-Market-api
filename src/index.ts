import express from "express";
import cors from "cors";
import helmet from "helmet";
import v1Routes from "./routes/v1/index.js";
import { setupSwagger } from "../src/config/swagger";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api/v1", v1Routes);
setupSwagger(app);

export default app;
app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});