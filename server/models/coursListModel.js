const mongoose = require("mongoose");
const coursListSchema = mongoose.Schema(
  {
    title: { type: String },
    coursAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("coursList", coursListSchema);
