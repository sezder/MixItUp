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

// Delete a bar
router.delete(
  "/:barId(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const barId = req.params.barId;
    const { userId } = req.body;
    const bar = await Bar.findByPk(barId);

    if (!bar || userId !== bar.userId) {
      const err = new Error("Cocktail not found");
      err.status = 404;
      err.title = "cocktail not found";
      err.errors = ["Could not find cocktail."];
      return next(err);
    } else {
      await bar.destroy();
      return res.json(barId);
    }
  })
);

// Edit a bar
router.put(
  "/:barId(\\d+)/edit",
  requireAuth,
  // validateBar,
  asyncHandler(async (req, res, next) => {
    const barId = parseInt(req.params.barId);
    console.log(barId, "barId backend useparams");

    const {
      // barId,
      name,
      description,
      location,
      imageUrl,
      menuUrl,
      reservationUrl,
      mapsUrl,
      userId,
    } = req.body;

    console.log("barId backend", barId);

    const bar = await Bar.findByPk(barId);
    console.log(bar.userId, "bar.userId");
    console.log(userId, "userId");
    if (!bar || Number(userId) !== Number(bar.userId)) {
      const err = new Error("Bar not found.");
      err.status = 404;
      err.title = "Bar not found.";
      err.errors = ["Could not find bar."];
      return next(err);
    } else {
      const updatedBar = await bar.update({
        name,
        description,
        location,
        imageUrl,
        menuUrl,
        reservationUrl,
        mapsUrl,
        userId,
      });
      return res.json(updatedBar);
    }
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
