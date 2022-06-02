const mongoose = require("mongoose");
const feedBackSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    message: { type: String },
    image: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("feedBack", feedBackSchema);
