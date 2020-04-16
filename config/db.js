const mongoose = require("mongoose");

const db = process.env.MONGOURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log("failing");
    console.log(err);
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
