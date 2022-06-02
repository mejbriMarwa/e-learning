const CoursList = require("../models/coursListModel");

// Add CoursList

const AddCoursList = async (req, res) => {
  try {
    const coursLists = await CoursList.create(req.body);
    res.status(201).json(coursLists);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// Get CoursList

const GetCoursList = async (req, res) => {
  try {
    const coursLists = await CoursList.find({});
    res.status(200).json(coursLists);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

// update CoursList
const updateCoursList = async (req, res) => {
  try {
    const coursListInfo = await CoursList.findByIdAndUpdate(
      req.params.coursListId,
      { coursAvailable: false },
      { new: true }
    );
    res.json(coursListInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// remouve CoursList

const RemouveCoursList = async (req, res) => {
  try {
    await CoursList.findByIdAndDelete(req.params.coursListId);
    res.status(200).json({ msg: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

module.exports = {
  AddCoursList,
  GetCoursList,
  updateCoursList,
  RemouveCoursList,
};
