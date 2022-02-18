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
          cockaitlId: 4,
        },
        //   {
        //     content: "",
        //     rating: ,
        //     barId: ,
        //     userId: ,
        //     cockaitlId: ,
        // },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Checkins", null, {});
  },
};
