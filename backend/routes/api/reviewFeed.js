const express = require("express");
const asyncHandler = require("express-async-handler");
const { Cocktail, Cocktail_Review, User } = require("../../db/models");

const router = express.Router();

// Get review feed: aggregated reviews of all cocktails: 
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    // Query db for all cocktails, limiting to the most recent 15, displayed in most recent order.
    // Include User and Cocktail model to enable displaying photo of cocktail/link to it and username
    const reviews = await Cocktail_Review.findAll({limit: 15, order: [['createdAt', 'DESC']], include: [User, Cocktail]});
    return res.json(reviews);
  })
);

module.exports = router;
