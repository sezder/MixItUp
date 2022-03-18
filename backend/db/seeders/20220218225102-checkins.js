"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Checkins",
      [
        {
          content:
            'Love that you can book your reservation on opentable and they just recently opened up a more "bar area" for mainly drinks. Had a Rosemary Mezcal Negroni and it was fantastic.',
          rating: 5,
          barId: 1,
          userId: 6,
          cocktailId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Waited forever for a table, but the drinks were amazing.",
          rating: 3,
          barId: 1,
          userId: 3,
          cocktailId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content:
            "Went with a group of friends, and we had a blast. The winter white cosmo was the right amount of sweet and seasonal.",
          rating: 5,
          barId: 1,
          userId: 2,
          cocktailId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content:
            "Strawberry Rosé Sangria was fantastic, but our waitor was clearly too busy.",
          rating: 4,
          barId: 2,
          userId: 3,
          cocktailId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content:
            "The Electric Lemondade was sickenly sweet, and it took forever to get a replacement. Food was great though.",
          rating: 3,
          barId: 2,
          userId: 4,
          cocktailId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content:
            "Loved the view from the windows. Great service, great food.",
          rating: 5,
          barId: 3,
          userId: 2,
          cocktailId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "The cobbler champagne didn't do it for me. ",
          rating: 2,
          barId: 4,
          userId: 3,
          cocktailId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Watermelon Mint cocktail was great, bar was too noisy.",
          rating: 4,
          barId: 5,
          userId: 4,
          cocktailId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //   {
        //     content: "",
        //     rating: ,
        //     barId: ,
        //     userId: ,
        //     cocktailId: ,
        // createdAt: new Date(),
        // updatedAt: new Date()
        // },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Checkins", null, {});
  },
};
