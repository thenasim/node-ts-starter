import express from "express";
import "dotenv/config";

const DEFAULT_PORT = 3000;
const APP = express();
const PORT = process.env["PORT"] || DEFAULT_PORT;

APP.get("/", (_, res) => {
  res.send("Hello World!");
});

APP.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
