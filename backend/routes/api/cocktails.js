const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Cocktail } = require("../../db/models");

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
        userId
      });
      return res.json({ updatedCocktail });
    }
  })
);

router.delete(
  `/:cocktailId(\\d+)/edit`,
  requireAuth,
  asyncHandler(async (req, res) => {
    const cocktailId = parseInt(req.params.cocktailId);
    // console.log(cocktailId, 'cocktailId');
    const cocktail = await Cocktail.findByPk(cocktailId);
    // console.log(cocktail, "cocktail");

    if (!cocktail) {
      const err = new Error("Cocktail not found");
      err.status = 404;
      err.title = "cocktail not found";
      err.errors = ["Could not find cocktail."];
      return next(err);
    } else {
      await cocktail.destroy();

      const cocktails = await Cocktail.findAll();
      return res.json({ cocktails });
    }
  })
);

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const cocktails = await Cocktail.findAll();
    return res.json({ cocktails });
  })
);

router.get(
  "/:cocktailId",
  asyncHandler(async (req, res) => {
    const cocktailId = parseInt(req.params.cocktailId);
    const cocktail = await Cocktail.findByPk(cocktailId);
    return res.json({ cocktail });
  })
);
module.exports = router;
