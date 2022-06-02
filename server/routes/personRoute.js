const express = require("express");
const {
  register,
  login,
  loadPersonInfo,
  updateProfile,
  FindAllProfiles,
  DeleteProfile,
  updateProfilePic,
} = require("../controllers/personController");
const authMiddleware = require("../middlewares/authMiddleware");
const personValidation = require("../middlewares/personValidation");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./img-uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

router.put(
  "/profilePic",
  authMiddleware,
  upload.single("profilePicture"),
  updateProfilePic
);
router.post("/register", personValidation, register);
router.post("/login", personValidation, login);
router.get("/personInfo", authMiddleware, loadPersonInfo);
router.get("/allProfile", authMiddleware, FindAllProfiles);
router.delete("/deleteProfile/:id", authMiddleware, DeleteProfile);
router.put("/updateProfile/:personId", authMiddleware, updateProfile);
module.exports = router;
