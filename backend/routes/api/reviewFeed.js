const express = require("express");
const asyncHandler = require("express-async-handler");
const { Cocktail, Cocktail_Review, User } = require("../../db/models");

const router = express.Router();

// REVIEW FEED ROUTER
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const reviews = await Cocktail_Review.findAll({limit: 15, order: [['createdAt', 'DESC']], include: [User, Cocktail]});
    console.log('reviews in get route for feed', reviews)
    return res.json(reviews);
  })
);

module.exports = router;
