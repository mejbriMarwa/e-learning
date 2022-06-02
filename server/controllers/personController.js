const Person = require("../models/personModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

// const nodemailer = require("nodemailer");
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
// var transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "????",
//     pass: "????",
//   },
// });
// register
const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, email, password } = req.body;
    const existPerson = await Person.findOne({ email });
    if (existPerson) {
      return res.status(400).json({ msg: "you have already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const newPerson = await Person.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    
    res.status(201).json({ msg: "user create" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: `something went wrong` });
  }
};
// login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // test for validate email
    const existPerson = await Person.findOne({ email });
    if (!existPerson)
      return res.status(400).json({ msg: "you have  register first." });
    // test for validate password
    const validatePassword = await bcrypt.compare(
      password,
      existPerson.password
    );
    if (!validatePassword)
      return res.status(400).json({ msg: " wrong password." });
    const token = await jwt.sign(
      { sub: existPerson._id },
      process.env.SECRET_KEY,
      { expiresIn: "30d" }
    );
    res.json({ token, role: existPerson.role });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// userInfo
const loadPersonInfo = async (req, res) => {
  try {
    const personInfo = await Person.findById(req.personId).select("-password");
    res.json(personInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};
// show list of user
const FindAllProfiles = async (req, res) => {
  try {
    const data = await Person.find().select("-password");
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

// update Profile
const updateProfile = async (req, res) => {
  try {
    const personInfo = await Person.findByIdAndUpdate(
      req.personId,
      { ...req.body },
      { new: true }
    );
    res.json(personInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};
// delete Profile

const DeleteProfile = async (req, res) => {
  try {
    await Person.findOneAndRemove({ _id: req.params.id });
    res.status(200).json({ message: "deleted profile" });
  } catch (error) {
    res.status(404).json(error.message);
  }
};

//  update user profile picture

const updateProfilePic = async (req, res) => {
  try {
    console.log(req.file);
    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    await Person.findByIdAndUpdate(req.personId, { profilePic: imageUrl });
    res.json({ msg: "profile picture update" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};
module.exports = {
  register,
  login,
  loadPersonInfo,
  updateProfile,
  FindAllProfiles,
  DeleteProfile,
  updateProfilePic,
};
