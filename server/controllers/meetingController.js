const Meeting = require("../models/meetingModel");
const Person = require("../models/personModel");

// Add meeting
const AddMeeting = async (req, res) => {
  try {
    const { meeetnigLink } = req.body;
    const meetingLinks = await Meeting.create({
      meeetnigLink,
      owner: req.personId,
    });
    res.status(201).json(meetingLinks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// Get meeting

const GetMeeting = async (req, res) => {
  try {
    const meetingLink = await Meeting.find({}).populate(
      "owner",
      " -password -role"
    );
    res.status(200).json(meetingLink);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

// update Meeting
const updateMeeting = async (req, res) => {
  try {
    const meetingLink = await Meeting.findByIdAndUpdate(
      req.params.meetingId,
      { ...req.body },
      { new: true }
    );
    res.json(meetingLink);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// remouve meeting

const RemouveMeeting = async (req, res) => {
  try {
    await Meeting.findByIdAndDelete(req.params.meetingId);
    res.status(200).json({ msg: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

module.exports = { AddMeeting, GetMeeting, updateMeeting, RemouveMeeting };
