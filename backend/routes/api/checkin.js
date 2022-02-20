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
