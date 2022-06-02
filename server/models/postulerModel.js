const mongoose = require("mongoose");
const postulerSchema = mongoose.Schema({
  curriculumVitae: { type: String },
});
module.exports = mongoose.model("postuler", postulerSchema);
