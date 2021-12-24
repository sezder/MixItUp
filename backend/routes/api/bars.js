const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Cocktail, Cocktail_Review, User, Bar } = require("../../db/models");

const router = express.Router();
// TO DO: 
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
  check("menuUrl")
    .exists({ checkFalsy: true })
    .withMessage("Provide a menu url.")
    .isURL({ require_protocol: false, require_host: false })
    .withMessage("Must be a valid menu url."),
  check("userId").exists({ checkFalsy: true }),
  handleValidationErrors,
];


// router.get(
//   "/",
//   asyncHandler(async function (req, res) {
//     const cocktails = await Cocktail.findAll();
//     return res.json({ cocktails });
//   })
// );

module.exports = router;
