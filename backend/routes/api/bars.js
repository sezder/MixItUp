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
const validateBar = [
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

// Create a new bar
router.post(
  "/",
  // validateBar,
  requireAuth,
  asyncHandler(async (req, res) => {
    const {
      name,
      description,
      location,
      imageUrl,
      menuUrl,
      reservationUrl,
      mapsUrl,
      userId,
    } = req.body;
    const bar = await Bar.create({
      name,
      description,
      location,
      imageUrl,
      menuUrl,
      reservationUrl,
      mapsUrl,
      userId,
    });
    return res.json(bar);
  })
);

// Get individual bar
router.get(
  "/:barId(\\d+)",
  asyncHandler(async (req, res) => {
    const barId = parseInt(req.params.barId);
    // eventually, include checkins in this request
    const bar = await Bar.findByPk(barId);
    if (bar) {
      return res.json(bar);
    }
  })
);

// Get all bars
router.get(
  "/",
  asyncHandler(async function (req, res) {
    const bars = await Bar.findAll();
    return res.json(bars);
  })
);

module.exports = router;
