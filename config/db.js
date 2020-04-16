const mongoose = require("mongoose");

const db = process.env.MONGOURI;

const connectDB = async () => {
  try {
    console.log("in config folder...");
    console.log(process.env);
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log("failing");
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
