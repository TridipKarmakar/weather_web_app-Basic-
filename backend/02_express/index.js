import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello from Tridip ");
});

app.get("/ice-tea", (req, res) => {
  res.send("what ice tea would you prefer");
});

app.get("/twitter", (req, res) => {
  res.send("tridip.com");
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}...`);
});
