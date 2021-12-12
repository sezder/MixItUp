"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Cocktails",
      [
        {
          name: "Blood Orange Rosemary Cocktail",
          description:
            "With the sweet tang of blood orange and aromatic rosemary, this is the perfect cocktail with vodka, even if you’re more of a bourbon fan at heart!",
          imageUrl: "https://source.unsplash.com/JjGLEN7T8xI/1920x1080",
          recipeUrl:
            "https://samanthaseeley.com/blood-orange-rosemary-cocktail/",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shiitake Mushroom Cocktail",
          description:
            "This mushroom cocktail was created by Tomo, an overwhelmingly creative mixologist in Kyoto. Step in his well-lit eight-person bar and take a seat.",
          imageUrl: "https://source.unsplash.com/fsI-_MRsic0/1920x1080",
          recipeUrl:
            "https://www.sunset.com/recipe/shiitake-mushroom-cocktail-recipe",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blackberry Lemon Smash Cocktail",
          description:
            "Looking for a sweet and tart fruity cocktail with the refreshing taste of citrus? Try this blackberry lemon smash recipe.",
          imageUrl: "https://source.unsplash.com/0eNtGDz8Ols/1920x1080",
          recipeUrl:
            "https://www.yayforfood.com/recipes/blackberry-lemon-smash-cocktail/",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rosemary Mezcal Negroni",
          description:
            "The Negroni was stirred to life in the early 20th century, but it wasn’t until the early 21st century that seemingly every bartender with a mixing glass and bar spoon began to create their own version of the classic cocktail.",
          imageUrl: "https://source.unsplash.com/VXIpXxpZ5ms/1920x1080",
          recipeUrl: "https://www.liquor.com/recipes/rosemary-mezcal-negroni/",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paloma Cucumber Mojito Mule Punch",
          description:
            "When you’re craving a Moscow Mule. And Mojito. And Paloma. Of course you make a mix of all three.",
          imageUrl: "https://source.unsplash.com/t7wg7BJU2-s/1920x1080",
          recipeUrl:
            "http://brookelark.com/blog/2017/2/6/paloma-cucumber-mojito-mule",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Authentic Mojito",
          description:
            "This is an authentic recipe for mojito: a very refreshing drink for hot summer days. Tonic water can be substituted instead of the soda water for a less sweet taste.",
          imageUrl: "https://source.unsplash.com/YNMjGIPgD_c/1920x1080",
          recipeUrl: "https://www.allrecipes.com/recipe/147363/the-real-mojito",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blackberry-Mint Julep",
          description:
            "Adding blackberries to a mint julep adds fruity flavor to the classic warm-weather cocktail.",
          imageUrl: "https://source.unsplash.com/bxT82IUY_H8/1920x1080",
          recipeUrl:
            "https://www.foodandwine.com/recipes/blackberry-mint-julep",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Strawberry Whiskey Smash",
          description:
            "An easy and fast riff on a classic – a Strawberry Whiskey Smash. Add in strawberry flavor to the simple syrup and muddle fresh strawberries.",
          imageUrl: "https://source.unsplash.com/z1qlqPj80qQ",
          recipeUrl:
            "https://www.cocktailcontessa.com/strawberry-whiskey-smash/",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Winter White Cosmo",
          description:
            "Winter White Cosmo, a classic winter-favorite drink. Mixed with Icelandic Reyka Vodka, white cranberry juice, and fresh lime, this sweet cocktail is the perfect way to kick-off the holidays.",
          imageUrl: "https://source.unsplash.com/hXg4gGjIfhw/",
          recipeUrl:
            "https://www.thedailymeal.com/recipes/winter-white-cosmo-recipe",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fig Thyme Shrub Cocktail",
          description:
            "This Fig Thyme Shrub Cocktail is a perfect way to celebrate the late summer figs and the beginning of fall! It’s the perfect mix of tangy and sweet, and the fresh thyme adds an unexpected, but delicious note of herby flavor.",
          imageUrl: "https://source.unsplash.com/3x2cFCoBeEQ/1920x1080",
          recipeUrl: "https://www.spicesinmydna.com/fig-thyme-shrub-cocktail/",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Electric Lemonade Cocktail",
          description:
            "A bright blue summer cocktail. A hot-weather favorite vodka drinks because it's sweetly tropical with a little sparkle. The perfect party punch.",
          imageUrl: "https://source.unsplash.com/Y7za9e40Luk",
          recipeUrl: "https://www.restlesschipotle.com/electric-lemonade/",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spicy Grapefruit Paloma",
          description:
            "This traditional Mexican cocktail made with fresh grapefruit juice and tequila is given a spicy kick from a chili-infused simple syrup.",
          imageUrl: "https://source.unsplash.com/F7HkGy4U0fo",
          recipeUrl: "https://thelemonbowl.com/spicy-grapefruit-paloma/",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Watermelon Mint Cocktail",
          description:
            "Cool off this summer with a refreshing Watermelon Mint Cocktail with vodka. It’s made with 5 simple ingredients that come together quickly, so in no time you’ll be happy hour ready.",
          imageUrl: "https://source.unsplash.com/_xeoL8CqRvE",
          recipeUrl:
            "https://www.forkinthekitchen.com/watermelon-mint-cocktail/",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Plum Blossom Cobbler Champagne",
          description:
            "Another easy-drinking concoction perfect for spring, this drink makes use of readily available fresh cumquats and umeshu, a plum wine from Japan.",
          imageUrl: "https://source.unsplash.com/3syTDiVAc7w",
          recipeUrl:
            "https://www.goodfood.com.au/recipes/plum-blossom-cobbler-champagne-cocktail-recipe-20161030-gsecmf",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blueberry Lavender Vodka Spritze",
          description:
            "Made with a blueberry-lavender simple syrup, lime juice, and vodka, this refreshing soda spritzer is an easy happy hour cocktail that everyone will enjoy.",
          imageUrl: "https://source.unsplash.com/3BGiFpQibTQ",
          recipeUrl:
            "https://www.thespruceeats.com/blueberry-lavender-vodka-spritzer-4133980",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Strawberry Rosé Sangria",
          description:
            "Quick and simple sangria made with fresh strawberries, rosé wine, and kicked up with some vodka.",
          imageUrl: "https://source.unsplash.com/W9bDbSuqW8k",
          recipeUrl: "https://jennifermeyering.com/strawberry-rose-sangria/",
          userId: 5,
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
