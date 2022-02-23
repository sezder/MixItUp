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
  "/",
  requireAuth,
  validateCheckin,
  asyncHandler(async (req, res, next) => {
    const { id, content, rating, cocktailId, userId, barId } = req.body;
    const checkin = await Checkin.findByPk(id);

    if (checkin && Number(userId) === Number(checkin.userId)) {
      const updatedCheckin = await checkin.update({
        id,
        content,
        rating,
        cocktailId,
        userId,
        barId,
      });
      return res.json(updatedCheckin);
    } else {
      const err = new Error("Checkin not found.");
      err.status = 404;
      err.title = "Checkin not found.";
      err.errors = ["Could not find checkin."];
      return next(err);
    }
  })
);

// Update a checkin
router.delete(
  "/:checkinId",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { checkinId, userId } = req.body;
    const selector = { where: { id: checkinId } };
    const checkin = await Checkin.findOne(selector);
    if (checkin && Number(userId) === Number(checkin.userId)) {
      await checkin.destroy();
      return res.json(checkinId);
    } else {
      const err = new Error("Checkin not found.");
      err.status = 404;
      err.title = "Checkin not found.";
      err.errors = ["Could not find checkin."];
      return next(err);
    }
  })
);

// Get individual checkin
router.get(
  "/:checkinId",
  asyncHandler(async (req, res) => {
    const checkinId = parseInt(req.params.checkinId);
    const checkin = await Checkin.findByPk(checkinId);
    return res.json(checkin);
  })
);

module.exports = router;
