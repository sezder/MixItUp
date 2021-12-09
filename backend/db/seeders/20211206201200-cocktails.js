"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Cocktails",
      [
        {
          name: "Blood Orange Rosemary Cocktail",
          description: "With the sweet tang of blood orange and aromatic rosemary, this is the perfect cocktail with vodka, even if you’re more of a bourbon fan at heart!",
          imageUrl: "https://source.unsplash.com/JjGLEN7T8xI/1920x1080",
          recipeUrl: "https://samanthaseeley.com/blood-orange-rosemary-cocktail/",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shiitake Mushroom Cocktail",
          description: "This mushroom cocktail was created by Tomo, an overwhelmingly creative mixologist in Kyoto. Step in his well-lit eight-person bar and take a seat.",
          imageUrl: "https://source.unsplash.com/fsI-_MRsic0/1920x1080",
          recipeUrl: "https://www.sunset.com/recipe/shiitake-mushroom-cocktail-recipe",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blackberry Lemon Smash Cocktail",
          description: "Looking for a sweet and tart fruity cocktail with the refreshing taste of citrus? Try this blackberry lemon smash recipe.",
          imageUrl: "https://source.unsplash.com/0eNtGDz8Ols/1920x1080",
          recipeUrl: "https://www.yayforfood.com/recipes/blackberry-lemon-smash-cocktail/",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rosemary Mezcal Negroni",
          description: "The Negroni was stirred to life in the early 20th century, but it wasn’t until the early 21st century that seemingly every bartender with a mixing glass and bar spoon began to create their own version of the classic cocktail.",
          imageUrl: "https://source.unsplash.com/VXIpXxpZ5ms/1920x1080",
          recipeUrl: "https://www.liquor.com/recipes/rosemary-mezcal-negroni/",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paloma Cucumber Mojito Mule Punch",
          description: "When you’re craving a Moscow Mule. And Mojito. And Paloma. Of course you make a mix of all three.",
          imageUrl: "https://source.unsplash.com/t7wg7BJU2-s/1920x1080",
          recipeUrl: "http://brookelark.com/blog/2017/2/6/paloma-cucumber-mojito-mule",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cocktails", null, {});
  },
};
