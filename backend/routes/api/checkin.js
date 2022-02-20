const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Checkin } = require("../../db/models");

const router = express.Router();

const validateCheckin = [
  check("content").exists({ checkFalsy: true }).withMessage("Provide content."),
  check("rating")
    .exists({ checkFalsy: true })
    .withMessage("Provide a rating")
    .isNumeric()
    .withMessage("Rating must be a number."),
  check("barId")
    .exists({ checkFalsy: true })
    .withMessage("Provide a bar id.")
    .isNumeric()
    .withMessage("Bar id must be a number."),
  check("userId")
    .exists({ checkFalsy: true })
    .withMessage("Provide a user id.")
    .isNumeric()
    .withMessage("User id must be a number."),
  check("cocktailId")
    .exists({ checkFalsy: true })
    .withMessage("Provide a cocktail id.")
    .isNumeric()
    .withMessage("Cocktail id must be a number."),
  handleValidationErrors,
];

router.post(
  "/",
  requireAuth,
  validateCheckin,
  asyncHandler(async (req, res) => {
    const { content, rating, barId, userId, cocktailId } = req.body;
    const checkin = await Checkin.create({
      content,
      rating,
      barId,
      userId,
      cocktailId,
    });
    return res.json(checkin);
  })
);

// Update a checkin
router.put(
  "/:checkinId(\\d+)",
  requireAuth,
  validateCheckin,
  asyncHandler(async (req, res, next) => {
    const checkinId = parseInt(req.params.checkinId);

    const { checkinId, content, rating, cocktailId, userId, barId } = req.body;

    const checkin = await Checkin.findByPk(checkinId);
    if (!checkin || Number(userId) !== Number(checkin.userId)) {
      const err = new Error("Checkin not found.");
      err.status = 404;
      err.title = "Checkin not found.";
      err.errors = ["Could not find checkin."];
      return next(err);
    } else {
      const updatedCheckin = await Checkin.update({
        checkinId,
        content,
        rating,
        cocktailId,
        userId,
        barId,
      });
      return res.json(updatedCheckin);
    }
  })
);

// Get individual checkin
router.get(
  "/:checkinId",
  asyncHandler(async (req, res) => {
    const checkinId = parseInt(req.params.checkinId);
    console.log(checkinId, "checkinId in backend get route");
    const checkin = await Checkin.findByPk(checkinId);
    return res.json(checkin);
  })
);

module.exports = router;
