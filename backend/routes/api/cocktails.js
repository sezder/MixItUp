const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
// const { Cocktail } = require("../../db/models/Cocktail");

const router = express.Router();

// router.get('/')

const validateCocktail = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Provide a name.")
    .length({ max: 100 })
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

  handleValidationErrors,
];

//CREATE NEW COCKTAIL
router.post(
  "/",
  validateCocktail,
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { name, description, imageUrl, recipeUrl } = req.body;
    const cocktail = await Cocktail.create({
      name,
      description,
      imageUrl,
      recipeUrl,
    });
    return res.redirect(`${req.baseUrl}/${id}`);
  })
);

module.exports = router;
