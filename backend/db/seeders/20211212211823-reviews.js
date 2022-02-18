"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Cocktail_Reviews",
      [
        // 1. Blood Orange Rosemary Cocktail
        {
          id: 1,
          reviewRating: 5,
          reviewBody:
            "I just made this cocktail for the first time, and I really enjoyed it. The balance of bourbon and citrus works quite well–no one flavor is overpowering. If you like your drinks a bit less sour, you’re probably not thinking of trying this recipe, but if you were, I would imagine you could reduce the lemon juice to 1/2 oz or maybe cut 1/4 oz off both the lemon and lime juice.",
          cocktailId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          reviewRating: 4,
          reviewBody: "LOVE! Easy to make. Its the adult version of sour candy",
          cocktailId: 1,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          reviewRating: 2,
          reviewBody:
            "This was undrinkably sweet. I ran out of blood oranges or would have tried it again with a half ounce of simple syrup, or maybe even less.",
          cocktailId: 1,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          reviewRating: 4,
          reviewBody:
            "Blood oranges in at Whole Foods so I came right home and mixed up this cocktai",
          cocktailId: 1,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          reviewRating: 5,
          reviewBody: "This thing is addictive.",
          cocktailId: 1,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 2. Shiitake Mushroom Cocktail
        {
          id: 6,
          reviewRating: 3,
          reviewBody:
            "Solid thought, but I just can't get on board with the mushrooms.",
          cocktailId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          reviewRating: 4,
          reviewBody:
            "Since I am one of those people who loves to drink adventurous cocktails, finding this was great.",
          cocktailId: 2,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          reviewRating: 1,
          reviewBody: "Never again.",
          cocktailId: 2,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 3. Blackberry Lemon Smash Cocktail
        {
          id: 9,
          reviewRating: 4,
          reviewBody:
            "I love blackberries but have never tried a blackberry cocktail. This one sounds lovely, tart and fruity is my jam.",
          cocktailId: 3,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          reviewRating: 4,
          reviewBody:
            "Such a great color for this cocktail! It was delicious and refreshing--blackberries are the underdog of it, but oh so good.",
          cocktailId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          reviewRating: 4,
          reviewBody: "This is gorgeous! And, I just bought blackberries.",
          cocktailId: 3,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          reviewRating: 5,
          reviewBody:
            "I make these all the time and serve them to my guests they are always amazed with this drink.",
          cocktailId: 3,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 4. Rosemary Mezcal Negroni
        {
          id: 13,
          reviewRating: 5,
          reviewBody:
            "The Rosemary Mezcal Negroni is a flavorful libation worth the experience. The 'subtle' smokiness imparted by the Mezcal coupled with the rosemary infused Campari (83 herb & fruit aperitif created by Gaspari Campari, liquorista extraordinaire), mixed with sweet vermouth of choice, and finished with a grapefruit twist for zest, is a remarkably satisfying sipper.",
          cocktailId: 4,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // 5. Paloma Cucumber Mojito Mule Punch
        {
          id: 14,
          reviewRating: 4,
          reviewBody:
            "I love drinking anything with cucumbers, they are so refreshing.",
          cocktailId: 5,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          reviewRating: 4,
          reviewBody:
            "This is my new favorite cocktail. I adore cucumber vodka.",
          cocktailId: 5,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // 6. Authentic Mojito
        {
          id: 16,
          reviewRating: 5,
          reviewBody:
            "Good recipe as is. If I'm going to make several of these, I will make a simple syrup (1 cup white sugar and 1/2 cup water, simmered for a few minutes and cooled) and use a few tablespoons of that instead of the sugar. This helps to ensure that the sugar is fully dissolved into the drink. Adds another step, but worth it for company.",
          cocktailId: 6,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          reviewRating: 3,
          reviewBody:
            "I think the recipe is great but keep in mind that not all varieties of mint work well. The original recipe (that is, the one served in CUBA) calls for Yerba Buena, which is completely different from other species.",
          cocktailId: 6,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          reviewRating: 4,
          reviewBody:
            "This recipe is almost the same as the one we use at my bar. We use simple syrup (equal parts sugar in the raw and water, boiled down) instead of granulated sugar because it mixes with more ease. We also just muddle one half of a lime with the mint (exactly 11 leaves), add ice, measure your rum (we use 2 ounces) and simple syrup, then shake that bad boy to death. Pour into a glass, and top with a splash of soda water.",
          cocktailId: 6,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // 7. Blackberry-Mint Julep
        {
          id: 19,
          reviewRating: 5,
          reviewBody:
            "Not only do the tastes totally work together here, but I love the color of the blackberries in the glass before I mix everything else in. Totally stunning.",
          cocktailId: 7,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 8. Strawberry Whiskey Smash
        {
          id: 20,
          reviewRating: 4,
          reviewBody:
            "I would love to try a non-alcoholic version of this. The flavors are so good – strawberry, mint and lemon. Will be great for summer.",
          cocktailId: 8,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 9. Winter White Cosmo
        // 10. Fig Thyme Shrub Cocktail
        // 11. Electric Lemonade Cocktail
        {
          id: 21,
          reviewRating: 4,
          reviewBody:
            "I always like to have a few new (to me) cocktail recipes on hand for the summer months. Looks like I stumbled upon this one just in time.",
          cocktailId: 11,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 12. Spicy Grapefruit Paloma
        // 13. Watermelon Mint Cocktail
        {
          id: 22,
          reviewRating: 3,
          reviewBody: "Very refreshing!",
          cocktailId: 13,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 14. Plum Blossom Cobbler Champagne
        // 15. Blueberry Lavender Vodka Spritze
        // 16. Strawberry Rosé Sangria
        {
          id: 23,
          reviewRating: 4,
          reviewBody:
            "A tip: Arrange watermelon in a single layer on a baking sheet; freeze 2 hours or until completely frozen. Combine frozen watermelon, sparkling water, rum, mint, and limeade in a blender; process until smooth.",
          cocktailId: 16,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          reviewRating: 5,
          reviewBody:
            "Still pretty hot here, so I'm looking for refreshing coolers! And we happen to have some watermelon on hand.",
          cocktailId: 16,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cocktail_Reviews", null, {});
  },
};
