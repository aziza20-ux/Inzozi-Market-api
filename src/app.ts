import express from "express";
import v1Routes from "./routes/v1/index.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", v1Routes);

export default app;
