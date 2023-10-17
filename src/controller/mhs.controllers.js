const knex = require("knex");

const addMahasiswa = async (req, res) => {
  try {
    const body = req.body;
    const addData = await knex("mhs").insert({
      nama: body.nama,
      alamat: body.alamat,
      jurusan: body.jurusan,
    });
    return res.status(200).json(addData);
  } catch (err) {
    return res.status(500).send("Ada yang salah nih: " + err.message);
  }
};

const getAllMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await knex("mhs").select("*");
    return res.status(200).json(mahasiswa);
  } catch (err) {
    return res.status(500).send("Ada yang salah nih: " + err.message);
  }
};

const updateMahasiswa = async (req, res) => {
  const mahasiswaId = req.params.id;
  const body = req.body;

  try {
    const updatedData = await knex("mhs").where({ id: mahasiswaId }).update({
      nama: body.nama,
      alamat: body.alamat,
      jurusan: body.jurusan,
    });

    if (updatedData) {
      return res
        .status(200)
        .json({ message: "Mahasiswa updated successfully" });
    } else {
      return res.status(404).json({ message: "Mahasiswa not found" });
    }
  } catch (err) {
    return res.status(500).send("Ada yang salah nih: " + err.message);
  }
};

const deleteMahasiswa = async (req, res) => {
  const mahasiswaId = req.params.id;

  try {
    const deletedData = await db("mhs").where({ id: mahasiswaId }).del();

    if (deletedData) {
      return res
        .status(200)
        .json({ message: "Mahasiswa deleted successfully" });
    } else {
      return res.status(404).json({ message: "Mahasiswa not found" });
    }
  } catch (err) {
    return res.status(500).send("Ada yang salah nih: " + err.message);
  }
};

module.exports = {
  addMahasiswa,
  getAllMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
