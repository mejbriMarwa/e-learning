const Person = require("../models/personModel");
const Chat = require("../models/chatModel");
// AddChat
const AddChat = async (req, res) => {
  try {
    const { mesagge } = req.body;
    const chat = await Chat.create({ mesagge, owner: req.personId });
    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
  }
};
// getChat
const getChat = async (req, res) => {
  try {
    const chat = await Chat.find({}).populate("owner", " -password");
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};
// DeleteChat
const DeleteChat = async (req, res) => {
  try {
    await Chat.findByIdAndDelete(req.params.chatTd);
    res.status(200).json({ msg: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};
module.exports = { AddChat, DeleteChat , getChat};
