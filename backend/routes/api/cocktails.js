const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Cocktail, Cocktail_Review, User } = require("../../db/models");

const router = express.Router();
// TO DO: 
// - Extract out /reviews into another nested router
// - Extract out validations?
// - Regex validations for digits in url
const validateCocktail = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Provide a name.")
    .isLength({ max: 100 })
    .withMessage("Name must be less than 100 characters"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Provide a description."),
  check("imageUrl")
    .exists({ checkFalsy: true })
    .withMessage("Provide an image url.")
    .isURL({ require_protocol: false, require_host: false })
    .withMessage("Must be a valid image url."),
  check("recipeUrl")
    .exists({ checkFalsy: true })
    .withMessage("Provide a recipe url.")
    .isURL({ require_protocol: false, require_host: false })
    .withMessage("Must be a valid recipe url."),
  check("userId").exists({ checkFalsy: true }),
  handleValidationErrors,
];

// Edit a cocktail:
router.put(
  `/:cocktailId(\\d+)/edit`,
  requireAuth,
  validateCocktail,
  asyncHandler(async (req, res, next) => {
    const cocktailId = parseInt(req.params.cocktailId);
    const { name, description, imageUrl, recipeUrl, userId } = req.body;

    const cocktail = await Cocktail.findByPk(cocktailId);
    if (!cocktail || Number(userId) !== Number(cocktail.userId)) {
      const err = new Error("Cocktail not found");
      err.status = 404;
      err.title = "Cocktail not found";
      err.errors = ["Could not find cocktail."];
      return next(err);
    } else {
      const updatedCocktail = await cocktail.update({
        name,
        description,
        imageUrl,
        recipeUrl,
        userId,
      });
      return res.json(updatedCocktail);
    }
  })
);

// Delete a cocktail:
router.delete(
  `/:cocktailId(\\d+)/edit`,
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const cocktailId = parseInt(req.params.cocktailId);
    const { userId } = req.body;
    const cocktail = await Cocktail.findByPk(cocktailId);

    if (!cocktail || Number(userId) !== Number(cocktail.userId)) {
      const err = new Error("Cocktail not found");
      err.status = 404;
      err.title = "cocktail not found";
      err.errors = ["Could not find cocktail."];
      return next(err);
    } else {
      await cocktail.destroy();
      return res.json(cocktailId);
    }
  })
);

const validateReview = [
  check("reviewRating")
    .exists({ checkFalsy: true })
    .withMessage("Provide a rating.")
    .custom((value) => {
      if (value > 5 || value < 1) {
        throw new Error("Rating must be between 1 and 5 stars.");
      }
      return true;
    }),
  check("reviewBody")
    .exists({ checkFalsy: true })
    .withMessage("Provide a comment with your review.")
    .isLength({ min: 1 })
    .withMessage("Provide a comment with your review."),
  check("cocktailId")
    .exists({ checkFalsy: true })
    .withMessage("Review must be affiliated with a cocktail."),
  check("userId")
    .exists({ checkFalsy: true })
    .withMessage("Review must be affiliated with a user."),
];

// Create a review for a particular cocktail: 
router.post(
  "/:cocktailId/reviews",
  validateReview,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { reviewRating, reviewBody, cocktailId, userId } = req.body;
    const review = await Cocktail_Review.create({
      reviewRating,
      reviewBody,
      cocktailId,
      userId,
    });
    return res.json(review);
  })
);

// Edit a review for a particular cocktail: 
router.put(
  `/:cocktailId(\\d+)/reviews/:reviewId(\\d+)/edit`,
  requireAuth,
  validateReview,
  asyncHandler(async (req, res, next) => {
    const { reviewId } = req.params;
    const { reviewRating, reviewBody, cocktailId, userId } = req.body;
    const review = await Cocktail_Review.findByPk(reviewId);

    if (!review || Number(userId) !== Number(review.userId)) {
      const err = new Error("Review not found");
      err.status = 404;
      err.title = "Review not found";
      err.errors = ["Could not find review."];
      return next(err);
    } else {
      const updatedReview = await review.update({
        reviewRating,
        reviewBody,
        cocktailId,
        userId,
      });
      return res.json(updatedReview);
    }
  })
);

// Edit a review for a particular cocktail: 
router.delete(
  `/:cocktailId(\\d+)/reviews/:reviewId(\\d+)/edit`,
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const reviewId = parseInt(req.params.reviewId);
    const { userId } = req.body;
    const review = await Cocktail_Review.findByPk(reviewId);

    if (!review || Number(userId) !== Number(review.userId)) {
      const err = new Error("Review not found");
      err.status = 404;
      err.title = "Review not found";
      err.errors = ["Could not find review."];
      return next(err);
    } else {
      await review.destroy();
      return res.json(reviewId);
    }
  })
);

// Get all the reviews for a particular cocktail: 
router.get(
  "/:cocktailId/reviews",
  asyncHandler(async (req, res) => {
    const cocktailId = parseInt(req.params.cocktailId);
    const reviews = await Cocktail_Review.findAll({
      where: { cocktailId },
      include: [User],
    });
    return res.json(reviews);
  })
);

// Create a new cocktail: 
router.post(
  "/",
  validateCocktail,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { name, description, imageUrl, recipeUrl, userId } = req.body;
    const cocktail = await Cocktail.create({
      name,
      description,
      imageUrl,
      recipeUrl,
      userId,
    });
    return res.json(cocktail);
  })
);

// Get a particular cocktail: 
router.get(
  "/:cocktailId",
  asyncHandler(async (req, res) => {
    const cocktailId = parseInt(req.params.cocktailId);
    const cocktail = await Cocktail.findByPk(cocktailId);
    return res.json(cocktail);
  })
);

// Get all cocktails: 
router.get(
  "/",
  asyncHandler(async function (req, res) {
    const cocktails = await Cocktail.findAll();
    return res.json({ cocktails });
  })
);

module.exports = router;
