const express = require("express");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;
console.log("in root folder...");
console.log(process.env);
connectDB();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.send("API Running"));

// Define Routes. Requires routers to handle any kind of
// HTTP request @ /api/users as long as that type of router
// exists in users.js (for get request on /api/user/thispage,
// there must be a corresponding router at /thispage)
app.use("/api/users", require("./routes/api/users"));

// Define Routes. ""
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/recipes", require("./routes/api/recipes"));

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "client", "build")));

  // Serve index.html on all routes except the api routes above
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
