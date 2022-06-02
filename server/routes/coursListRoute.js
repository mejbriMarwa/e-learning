const express = require("express");
const {
  AddCoursList,
  GetCoursList,
  updateCoursList,
  RemouveCoursList,
} = require("../controllers/coursListController");

const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/addCoursList", authMiddleware, AddCoursList);
router.get("/getCoursList", authMiddleware, GetCoursList);
router.put("/updateCoursList/:coursListId", authMiddleware, updateCoursList);
router.delete(
  "/RemouveCoursList/:coursListId",
  authMiddleware,
  RemouveCoursList
);
module.exports = router;
