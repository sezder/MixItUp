const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Cocktail } = require("../../db/models");

const router = express.Router();

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



router.put(
  `/:cocktailId/edit`, 
  requireAuth,
  validateCocktail,
  asyncHandler(async (req, res, next) => {
    const cocktailId = parseInt(req.params.cocktailId);
    // console.log(cocktailId, 'backend cocktailId')
    const { name, description, imageUrl, recipeUrl } = req.body;

    const cocktail = await Cocktail.findByPk(cocktailId);
    if (!cocktail) {
      const err = new Error("Cocktail not found");
      err.status = 404;
      err.title = "cocktail not found";
      err.errors = ["Could not find cocktail."];
      return next(err);
    } else {
      const updatedCocktail = await cocktail.update({name, description, imageUrl, recipeUrl});
      return res.json({updatedCocktail});
    }
  })
);


// router.delete(`/:cocktailId(\\d+)/`, requireAuth, asyncHandler(async (req, res) => {
// const 
// }))
module.exports = router;
