// backend/routes/api/index.js
const router = require("express").Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

const { User } = require("../../db/models");

router.use('/session', sessionRouter);
router.use('/users', usersRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});



// TESTING MIDDLEWARE REMOVE LATER
// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (_req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "Demo-lition",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

// router.post("/test", function (req, res) {
//   res.json({ requestBody: req.body });
// });

// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
module.exports = router;
