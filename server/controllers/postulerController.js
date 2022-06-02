const Postuler = require("../models/postulerModel");

// postuler
const Addpostuler = async (req, res) => {
  try {
    const { curriculumVitae } = req.body;
    const apply = await Postuler.create({ curriculumVitae });
    res.status(200).json(apply);
  } catch (error) {
    console.log(error);
  }
};
// showPostulation
const GetPostulation = async (req, res) => {
  try {
    const postuler = await Postuler.find({});
    res.status(200).json(postuler);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};
// DeletePostulation
const DeletePostulation = async (req, res) => {
  try {
    await Postuler.findByIdAndDelete(req.params.postId);
    res.status(200).json({ msg: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};
module.exports = { Addpostuler, GetPostulation, DeletePostulation };
