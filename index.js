import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
const __dirname = path.resolve();
const app = express();

app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(
  process.env.PORT,
  console.log(`Server listening on port ${process.env.PORT}`)
);
