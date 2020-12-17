const mongoose = require("mongoose");
const MONGOURI = "mongodb+srv://cluster0.5uewh.mongodb.net/plant_db";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to the cloud database");
  } catch(error) {
    console.log(error);
  }
};

module.exports = InitiateMongoServer;


