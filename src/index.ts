
import express from "express";
import dotenv from "dotenv";
import v1Routes from "./routes/v1/index.js";



const app = express();
const PORT = Number(process.env.PORT) || 3000;
app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Hello World!");
})

app.use("/api/v1", v1Routes);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});