const FeedBack = require("../models/FeedBackModel");
// Add FeddBack
const AddFeedBack = async (req, res) => {
  try {
    const { name, email, message, image } = req.body;
    await FeedBack.create({ name, email, message, image });
    res.status(201).json({ msg: "FeedBack added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// Get FeedBack

const GetFeedBack = async (req, res) => {
  try {
    const feedBack = await FeedBack.find();
    res.status(200).json(feedBack);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

// remouve FeedBack

const RemouveFeedBack = async (req, res) => {
  try {
    await FeedBack.findByIdAndDelete(req.params.feedBackId);
    res.status(200).json({ msg: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

module.exports = { AddFeedBack, GetFeedBack, RemouveFeedBack };
