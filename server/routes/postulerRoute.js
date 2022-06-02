const express = require("express");
const {
  Addpostuler,
  GetPostulation,
  DeletePostulation,
} = require("../controllers/postulerController");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// storage engine for multer
// const storage = multer.diskStorage({
//   destination: (req, res, cb) => {
//     cb(null, path.join("./uploadsFile/"));
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     const uniqueSuffix = Date.now() + "-" + file.originalname;
//     cb(null, uniqueSuffix);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "application/pdf" ||
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/png"
//   ) {
//     cb(null, true);
//   } else {
//     cb(new Error("Not an image! Please upload a file.", 400), false);
//   }
// };
// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
// });

// router file
router.post("/addPostulation", Addpostuler);

router.get("/getPostulation", GetPostulation);

router.delete("/deletePostulation/:postId", DeletePostulation);

module.exports = router;
