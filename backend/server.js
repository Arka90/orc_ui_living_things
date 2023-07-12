// const express = require("express");
import express from "express";
const app = express();
import cors from "cors";

app.use(cors());

app.post("/upload", (req, res) => {
  setTimeout(() => {
    console.log("file uploaded");
    return res.status(200).json({ path: `/cloud/google/${Date.now()}` });
  }, 4000);
});

app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});
