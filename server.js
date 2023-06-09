import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server is up and running");
});
