const mongoose = require("mongoose");
const shopModel = require("../models/shopModel");

exports.fetchMenClothes = async function (req, res) {
  const data = await shopModel.find({}).where("category").equals("Men");
  res.json(data);
};
exports.fetchWomenClothes = async function (req, res) {
  const data = await shopModel.find({}).where("category").equals("Women");
  res.json(data);
};
