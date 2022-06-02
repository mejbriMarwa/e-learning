const express = require("express");
const {
  AddCours,
  GetCours,
  RemouveCours,
  updateCours,
} = require("../controllers/coursController");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/addCours", authMiddleware, AddCours);
router.get("/getCours", authMiddleware, GetCours);
router.put("/updateCours/:coursId", authMiddleware, updateCours);
router.delete("/RemouveCours/:coursId", authMiddleware, RemouveCours);
module.exports = router;
