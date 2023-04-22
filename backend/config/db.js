const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connReq = process.env.MONGO_URI;
    const conn = await mongoose.connect(connReq, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit;
  }
};

module.exports = connectDB;
