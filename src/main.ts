import express from "express";
import "dotenv/config";
import { getAllPosts } from "$services/postService";

const DEFAULT_PORT = 3000;
const app = express();
const port = process.env["PORT"] || DEFAULT_PORT;

app.get("/", async (_, res) => {
  res.send("Hello Bangladesh");
});

app.get("/all-posts", async (_, res) => {
  const posts = await getAllPosts();
  res.send(posts);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
