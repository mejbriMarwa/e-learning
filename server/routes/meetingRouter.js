const express = require("express");
const {
  AddMeeting,
  GetMeeting,
  updateMeeting,
  RemouveMeeting,
} = require("../controllers/meetingController");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/addMeeting", authMiddleware, AddMeeting);
router.get("/getMeeting", authMiddleware, GetMeeting);
router.put("/updateMeeting/:meetingId", authMiddleware, updateMeeting);
router.delete("/RemouveMeeting/:meetingId", authMiddleware, RemouveMeeting);
module.exports = router;
