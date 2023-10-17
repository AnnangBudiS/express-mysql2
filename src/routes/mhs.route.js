const mhsRouter = require("express").Router();
const { addMahasiswa } = require("../controller/mhs.controllers");

mhsRouter.get("/mahasiswa", (req, res) => {
  res.send("daftar mahasiswa");
});

mhsRouter.post("/add", addMahasiswa);

module.exports = mhsRouter;
