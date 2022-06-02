const express = require("express");
const path = require("path");
require("dotenv").config();
// database config
const connectDB = require("./config/connectDB");
connectDB();
const app = express();
const cors = require("cors");
app.use(cors("http://localhost:3000"));
// setting
app.use(express.json());
// routes
app.use("/api/user", require("./routes/personRoute"));
app.use("/api/user", require("./routes/feedBackRouter"));
app.use("/api/user", require("./routes/coursRoute"));
app.use("/api/user", require("./routes/chatRoute"));
app.use("/api/user", require("./routes/meetingRouter"));
app.use("/api/user", require("./routes/postulerRoute"));
app.use("/api/user", require("./routes/coursListRoute"));

// images path
app.use("/uploads", express.static(path.join(__dirname, "../", "img-uploads")));

// file path
// app.use("/uploadsFiles", express.static(path.join(__dirname, "../","uploadsFile")));

// config server
app.listen(process.env.PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`server is running on port ${process.env.PORT}`)
);
