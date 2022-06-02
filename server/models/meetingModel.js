const mongoose = require("mongoose");
const meetingSchema = mongoose.Schema(
  {
    meeetnigLink: { type: String },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "person",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("meeting", meetingSchema);
