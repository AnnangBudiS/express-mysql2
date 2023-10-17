require("dotenv").config();
const express = require("express");
const PORT = process.env.SERVER_PORT || 5600;
const mhsRouter = require("./routes/mhs.route");
const app = express();

app.use(mhsRouter);
app.use(express.urlencoded({ extended: true }));
app.use = express.json();

app.get("/", (req, res) => {
  res.send("individual Harisenin");
});
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
