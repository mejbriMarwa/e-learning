const mongoose = require("mongoose");
const chatSchema = mongoose.Schema(
  {
    mesagge: { type: String, require: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "person" },
    createAt: { type: Date },
  },
  { timestamps: true }
);
module.exports = mongoose.model("chat", chatSchema);
