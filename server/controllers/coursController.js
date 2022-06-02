const Cours = require("../models/coursModel");
const Person = require("../models/personModel");

// Add cours
const AddCours = async (req, res) => {
  try {
    const { title, coursPdf, coursVideo } = req.body;
    const cours = await Cours.create({
      title,
      coursPdf,
      coursVideo,
      owner: req.personId,
    });
    res.status(201).json(cours);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// Get cours

const GetCours = async (req, res) => {
  try {
    const cours = await Cours.find({}).populate("owner", " -password -role");
    res.status(200).json(cours);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

// update Cours
const updateCours = async (req, res) => {
  try {
    const coursInfo = await Cours.findByIdAndUpdate(
      req.params.coursId,
      { ...req.body },
      { new: true }
    );
    res.json(coursInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// remouve cours

const RemouveCours = async (req, res) => {
  try {
    await Cours.findByIdAndDelete(req.params.coursId);
    res.status(200).json({ msg: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

module.exports = { AddCours, GetCours, RemouveCours, updateCours };
