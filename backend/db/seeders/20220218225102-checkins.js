"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Checkins",
      [
        {
          // id: 1,
          content:
            'Love that you can book your reservation on opentable and they just recently opened up a more "bar area" for mainly drinks. Had a Rosemary Mezcal Negroni and it was fantastic.',
          rating: 5,
          barId: 1,
          userId: 6,
          cocktailId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //   {id: ,
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
