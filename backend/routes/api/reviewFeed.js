const express = require("express");
const asyncHandler = require("express-async-handler");
const { Cocktail, Cocktail_Review, User } = require("../../db/models");

const router = express.Router();

// REVIEW FEED ROUTER
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    // would be nice to include a cocktail model, maybe also user model
    // would be nice to sort by most recent
    const reviews = await Cocktail_Review.findAll({limit: 15, order: [['createdAt', 'DESC']], include: [User, Cocktail]});
    console.log('reviews in get route for feed', reviews)
    return res.json(reviews);
  })
);

module.exports = router;
