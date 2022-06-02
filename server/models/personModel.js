const mongoose = require("mongoose");
const personSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin", "instructor", "learner"],
      default: "user",
    },
    profilePic: {
      type: String,
      default:
        "https://cdn3.vectorstock.com/i/thumb-large/32/12/default-avatar-profile-icon-vector-39013212.jpg",
    },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("person", personSchema);
