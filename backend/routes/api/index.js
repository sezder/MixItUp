// backend/routes/api/index.js
const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const cocktailsRouter = require("./cocktails");
const reviewFeedRouter = require("./reviewFeed");
const asyncHandler = require("express-async-handler");
const { User } = require("../../db/models");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/reviews", reviewFeedRouter);
router.use("/cocktails", cocktailsRouter);

module.exports = router;
