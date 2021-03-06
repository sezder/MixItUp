const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Bar, Checkin, User, Cocktail } = require("../../db/models");

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
      userId,
    } = req.body;
    const bar = await Bar.create({
      name,
      description,
      location,
      imageUrl,
      menuUrl,
      reservationUrl,
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

    const {
      // barId,
      name,
      description,
      location,
      imageUrl,
      menuUrl,
      reservationUrl,
      userId,
    } = req.body;

    const bar = await Bar.findByPk(barId);
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
        userId,
      });
      return res.json(updatedBar);
    }
  })
);

// // Get checkins by bar
router.get(
  "/:barId/checkins",
  asyncHandler(async (req, res) => {
    const barId = parseInt(req.params.barId);

    const checkIn = await Checkin.findAll({
      where: { barId: barId },
      include: [Cocktail, User],
    });

    return res.json(checkIn);
  })
);

// Get individual bar
router.get(
  "/:barId",
  asyncHandler(async (req, res) => {
    const barId = parseInt(req.params.barId);

    const bar = await Bar.findByPk(barId);
    return res.json(bar);
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
