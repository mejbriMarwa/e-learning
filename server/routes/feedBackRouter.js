const express = require("express");
const router = express.Router();
const {
  AddFeedBack,
  GetFeedBack,
  RemouveFeedBack,
} = require("../controllers/feedBackController");
const adminCheckMiddleware = require("../middlewares/adminCheck");
const authMiddleware = require("../middlewares/authMiddleware");
router.post("/addFeedBack", AddFeedBack);
router.get("/getFeedBack", GetFeedBack);
router.delete("/remouveFeedBack/:feedBackId",authMiddleware,adminCheckMiddleware, RemouveFeedBack);
module.exports = router;
