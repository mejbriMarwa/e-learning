const express = require("express");
const {
  AddChat,
  getChat,
  DeleteChat,
} = require("../controllers/chatController");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
router.post("/addChat", authMiddleware, AddChat);
router.get("/getChat", authMiddleware, getChat);
router.delete("/deleteChat/:chatId", authMiddleware, DeleteChat);

module.exports = router;
