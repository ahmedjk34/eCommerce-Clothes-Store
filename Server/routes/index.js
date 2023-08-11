const { Router } = require("express");
const {
  fetchMenClothes,
  fetchWomenClothes,
} = require("../controllers/shopController");

const router = Router();

router.get("/men-clothes", fetchMenClothes);
router.get("/women-clothes", fetchWomenClothes);
module.exports = router;
