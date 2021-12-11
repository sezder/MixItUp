const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Cocktail, Cocktail_Review, User } = require("../../db/models");

const router = express.Router();

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
    .isURL({ require_protocol: false, require_host: false })
    .withMessage("Must be a valid recipe url."),
  check("userId").exists({ checkFalsy: true }),
  handleValidationErrors,
];

// EDIT COCKTAIL
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

router.post(
  "/:cocktailId/reviews",
  // validateReview,
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

router.put(
  `/:cocktailId(\\d+)/reviews/:reviewId(\\d+)/edit`,
  // requireAuth,
  // validateReview,
  asyncHandler(async (req, res, next) => {
    // console.log('reached put route')
    // do I need the cocktailId as well as the reviewId??
    const { reviewId } = req.params;
    // console.log(cocktailId, "put cocktailId edit review");
    // console.log(reviewId, "put cocktailId edit review");

    const { reviewRating, reviewBody, cocktailId, userId } = req.body;
    console.log('reviewRating', reviewRating);
    console.log('reviewBody,', reviewBody,);
    console.log('cocktailId', cocktailId);
    console.log('userId ', userId );

    const review = await Cocktail_Review.findByPk(reviewId);
    console.log(review, 'backend review in /edit');
    console.log(Number(userId) !== Number(review.userId), 'userId is review UserId')
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

router.delete(
  `/:cocktailId(\\d+)/reviews/:reviewId(\\d+)/edit`,
  // requireAuth,
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

router.get(
  "/:cocktailId/reviews",
  asyncHandler(async (req, res) => {
    const cocktailId = parseInt(req.params.cocktailId);
    const reviews = await Cocktail_Review.findAll({
      where: { cocktailId },
      include: [User],
    });
    // console.log(reviews, "backend db result");
    return res.json(reviews);
  })
);

// REVIEW FEED ROUTER
// router.get(
//   "reviews",
//   // validateReview,
//   asyncHandler(async (req, res, next) => {
//     const reviews = await Cocktail_Review.findAll();
//     return res.json({ reviews });
//   })
// );

//CREATE NEW COCKTAIL
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

router.get(
  "/:cocktailId",
  asyncHandler(async (req, res) => {
    const cocktailId = parseInt(req.params.cocktailId);
    const cocktail = await Cocktail.findByPk(cocktailId);
    return res.json(cocktail);
  })
);

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const cocktails = await Cocktail.findAll();
    return res.json({ cocktails });
  })
);

// ----------------------- REVIEWS --------------------

module.exports = router;
