const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Cocktail } = require("../../db/models");

const router = express.Router();

router.get('/', asyncHandler(async function(req, res) {
  const cocktails = await Cocktail.findAll();
  return res.json({cocktails});
}));

router.get('/:cocktailId', asyncHandler(async (req, res) => {
  const cocktailId = parseInt(req.params.cocktailId);
  const cocktail = await Cocktail.findByPk(cocktailId);
  return res.json({cocktail});
}))
   
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

  handleValidationErrors,
];

//CREATE NEW COCKTAIL
router.post(
  "/",
  validateCocktail,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { name, description, imageUrl, recipeUrl } = req.body;
    const cocktail = await Cocktail.create({
      name,
      description,
      imageUrl,
      recipeUrl,
    });
   return res.json(cocktail);
    // return res.redirect(`${req.baseUrl}/${cocktail.id}`);
  })
);

module.exports = router;
