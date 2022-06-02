const person = require("../models/personModel");
const adminCheckMiddleware = async (req, res, next) => {
  try {
    const personInfo = await person.findById(req.personId);
    if (personInfo.role !== "admin")
      return res.status(401).json({ msg: "you are not allowed" });
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};
module.exports = adminCheckMiddleware;