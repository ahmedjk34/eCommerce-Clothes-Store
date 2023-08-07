const mongoose = require("mongoose");
const shopSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  category: {
    type: String,
    enum: ["Women", "Men"],
  },
});

module.exports = mongoose.model("Shop", shopSchema);
