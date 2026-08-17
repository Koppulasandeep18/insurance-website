const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/User");

const createUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    const existingUser = await User.findOne({
      email: "admin@padma.com",
    });

    if (existingUser) {
      console.log("User already exists");
      process.exit();
    }

    const user = new User({
      email: "admin@padma.com",
      password: "admin123",
    });

    await user.save();

    console.log("Admin user created successfully!");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createUser();