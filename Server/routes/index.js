const { Router } = require("express");
const {
  fetchMenClothes,
  fetchWomenClothes,
} = require("../controllers/shopController");

const router = Router();

/* GET index page. */
// router.get("/men-clothes", fetchMenClothes);
// router.get("/women-clothes", fetchWomenClothes);
module.exports = router;
