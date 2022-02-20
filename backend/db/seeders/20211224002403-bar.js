"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Bars",
      [
        {
          // id: 1,
          name: "LA Cha Cha Chá",
          description:
            "LA Cha Cha Chá is bringing a distinctly Mexican flavor to an Arts District rooftop from March 19. Being the sister location of the popular Terraza Cha Cha Cha in Mexico City's Colona Tabacalera neighborhood, it will combine traditional dishes with Mexico City-born, LA-raised chef Alejandro Guzman signature touch. Design-wise, you'll find sleek timbers, eclectic tiles in turquoise with a substantial amount of foliage (about 150 plants) enclosing the space, all accented with fairy lights for ambiance.",
          location: "820 E 3rd St, Los Angeles, CA 90013",
          imageUrl: "https://source.unsplash.com/yhn4okt6ci0",
          menuUrl: "https://chachacha.la/menu-ccc",
          reservationUrl:
            "https://www.opentable.com/r/la-cha-cha-cha-los-angeles?corrid=713efe8c-4856-4c34-93c2-b5ffe0b75138&avt=eyJ2IjoyLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2021-12-24T19%3A00%3A00",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 2,
          name: "Margot LA",
          description:
            "This Culver City hotspot channels the very best of the Mediterranean with Spanish-style tapas, seasonal craft cocktails, a beautiful blend of natural furnishings, contrasted with bold centerpieces, accented with vibrant tiles and dotted with sun-loving plants. With nothing but the blue skies as your ceiling, you can imagine yourself on a quaint, Balearic coastal terrace. The greenhouse-like indoor section is also a cute spot to migrate to if things heat up or cool down.",
          location: "8820 Washington Blvd., Suite 301, Culver City, CA 90232",
          imageUrl: "https://source.unsplash.com/GXXYkSwndP4",
          menuUrl: "https://www.margot.la/menus",
          reservationUrl:
            "https://resy.com/cities/la/margot?date=2021-12-23&seats=2",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 3,
          name: "Merois",
          description:
            "Chef Wolfgang Puck has gifted L.A. with two incredible new restaurants, exciting new restaurants, Merois and Ospero. Merois, located on the rooftop of Pendry West Hollywood, combines the striking views of the city (which can be enjoyed through floor-to-ceiling windows with a menu that weaves Japanese, Southeast Asian flavors with French-California cuisine.",
          location: "8430 Sunset Blvd., West Hollywood, CA 90069",
          imageUrl: "https://source.unsplash.com/S6atLH5Rf0U",
          menuUrl: "https://wolfgangpuck.com/dining/merois-west-hollywood/",
          reservationUrl:
            "https://www.sevenrooms.com/reservations/meroiswesthollywood",

          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 4,
          name: "The Highlight Room",
          description:
            "The Highlight Room offers something for every mood, whether it's the wild parties at the rooftop pool, drinks or a brunch at the Grill, you're bound to enjoy yourself at this Hollywood hideaway, perched on the 10th floor of the DREAM Hotel Hollywood.",
          location: "6417 Selma Ave, Los Angeles, CA 90028",
          imageUrl: "https://source.unsplash.com/pIO8zFpgL_s",
          menuUrl:
            "https://taogroup.com/wp-content/uploads/2021/12/HIG_Menus_Grill_Drink_8.5x11_1221-1.pdf",
          reservationUrl:
            "https://taogroup.com/venues/the-highlight-room-los-angeles/reservations/",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 5,
          name: "The Roof at Edition",
          description:
            "Edition hotels have mastered the art of creating exclusive oases while making you feel as though you're still fully immersed in the city. You can sip on cocktails on one of the loungers under a lush canopy of foliage or get cozy at one of the intimate, candlelit tables perched on the patio along the side. of the rooftop. Enjoy tequila cocktails and tostadas with 360-degree views of the sun setting over the city.",
          location: "9040 Sunset Blvd, West Hollywood, CA 90069",
          imageUrl: "https://source.unsplash.com/xItqLcw8HDo",
          menuUrl:
            "https://www.editionhotels.com/weho/restaurants-and-bars/the-roof/",
          reservationUrl:
            "https://www.editionhotels.com/weho/restaurants-and-bars/the-roof/",
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 6,
          name: "L.P. Rooftop Bar",
          description:
            "The hotspot, located on Melrose and La Cienega, offers some of the best views of West Hollywood. The insanely popular rooftop is the first section of the multistorey dining and drinking haven to reopen. You'll have to wait for the main dining room to open over the next few weeks. You might also want to check out their more tropical sister space, Las Palmas.",
          location: "603 N La Cienega Blvd, Los Angeles, CA 90069",
          imageUrl: "https://source.unsplash.com/jR767RMS8jY",
          menuUrl: "https://www.eplosangeles.com/lp-rooftop",
          reservationUrl: "https://www.opentable.com/ep-lp",

          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 7,
          name: "Perch",
          description:
            "Perch LA, the Downtown rooftop hotspot, and its breathtaking 360-degree views are yours to enjoy once again! Head up to the 15th floor and waltz through the eclectic interior of the bar and restaurant filled with vintage oddities and colorful textiles. Then, step through the arches and out onto the outdoor terrace covered with lush greenery and fire pits to take in the sunsets over the city. On the 16th floor, you'll find an open rooftop terrace for more all-encompassing views of the city.",
          location: "448 S Hill St, Los Angeles, CA 90013",
          imageUrl: "https://source.unsplash.com/bq4I_3cOf1s",
          menuUrl: "https://www.perchla.com/from-the-bar",
          reservationUrl: "https://www.perchla.com/reservations",

          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 8,
          name: "Catch LA",
          description:
            "Walking under this canopy of white wisterias and exotic blooms will make you feel like wandering through the Enchanted Forest. At Catch, you're likely to rub shoulders with the rich and famous, a crowd that's glammed up to the gills, while you work your way through a decadent seafood tower. The unique cocktails will make the chandeliers and moody fairy lights at this hotspot twinkle just that little bit extra.",
          location: "8715 Melrose Avenue, West Hollywood 90069",
          imageUrl: "https://source.unsplash.com/oCsaxvGCehM",
          menuUrl: "https://www.catchrestaurants.com/location/catch-la/#menus/",
          reservationUrl: "https://www.opentable.com/r/catch-la-west-hollywood",

          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 9,
          name: "Mama Shelter",
          description:
            "The vibrant escape six floors up are filled with tropical plants, colorful prints and draped fairy lights that will make you feel like you've stepped into an exotic hideaway. Until, of course, you get the head-on view of the Hollywood sign and remember where you are. You'll have an eclectic mix of drinks and decor to lose yourself in as you leave the hustle and bustle below.",
          location: "6500 Selma Ave, Los Angeles, 90028",
          imageUrl: "https://source.unsplash.com/TzlERxVhGfc",
          menuUrl: "https://mamashelter.com/los-angeles/#menu",
          reservationUrl:
            "https://www.opentable.com/r/mama-shelter-downstairs-los-angeles?corrid=e7e131f9-78ac-4e4c-9ca9-c4015de915e1&avt=eyJ2IjoyLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2021-09-01T19%3A00%3A00",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 10,
          name: "Élephante",
          description:
            "This Santa Monica beach house seems to float in the sky with the palm trees, the casual-chic atmosphere will make you feel like you've stepped into an old friend's living room—a friend that's not struggling to show up with a new designer bag in tow for weekly brunches. Their Italian-style food seems at odds with the clientele but there are plenty of options that are surprisingly good considering the incredible ocean view—which is notoriously coupled with less than desirable food.",
          location: "1332 2nd St, Santa Monica, 90401",
          imageUrl: "https://source.unsplash.com/YH7KYtYMET0",
          menuUrl: "https://www.elephantela.com/menu",
          reservationUrl: "https://www.elephantela.com/reservations",

          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 11,
          name: "Terra",
          description:
            "The Century City rooftop oasis, Terra, is a little slice of Italian heaven perched atop the mammoth food emporium Eataly LA. You'll ascend a spiral staircase, catching a glimpse of the wood-burning grill where the beautiful seasonal ingredients are brought to life, before stepping out onto the bright terrace with panoramic views of the Hollywood Hills. Terra is centered on seasonal ingredients grilled on open flames to bring out the rich flavors. Of course, nothing pairs better with these earthy dishes than botanical cocktails or a premium Italian wine alongside an L.A. skyline.",
          location: "10250 Santa Monica Boulevard, Roof, Los Angeles, CA 90067",
          imageUrl: "https://source.unsplash.com/VZY6o3Q0EEI",
          menuUrl:
            "https://www.eataly.com/wp/wp-content/uploads/2018/03/ELA_Beverage-Menu_12.20.21_web.pdf",
          reservationUrl:
            "https://www.opentable.com/r/terra-eataly-los-angeles",

          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 12,
          name: "Upstairs at the Ace Hotel DTLA",
          description:
            "This beautiful spot offers views of the city in every direction and is the perfect balance of luxe and casual. White textiles and natural furniture with gorgeous trees dotted around makes this a welcoming haven to end the week off with. Reservations are required and you can book for a maximum of 6 people.",
          location: "929 S Broadway, Los Angeles, CA 90015",
          imageUrl: "https://source.unsplash.com/spZexiKfZTs",
          menuUrl: "https://acehotel.com/los-angeles/eat-drink/upstairs/",
          reservationUrl:
            "https://www.opentable.com/r/upstairs-at-the-ace-hotel-los-angeles",

          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 13,
          name: "SkyBar",
          description:
            "This glamorous rooftop setting is covered in ivy and is perched atop the Mondrian Los Angeles. It's the perfect place to take in panoramic views of the city on a romantic date or to spend your summers occasionally dipping into the pool between drinks. It's currently only open to hotel guests, it could still work out to be a more affordable option.",
          location: "8440 Sunset Blvd, Los Angeles, 90069",
          imageUrl: "https://source.unsplash.com/nmpW_WwwVSc",
          menuUrl: "https://www.sbe.com/nightlife/skybar/los-angeles/menu",
          reservationUrl: "https://www.sbe.com/nightlife/skybar/los-angeles",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Bars", null, {});
  },
};
