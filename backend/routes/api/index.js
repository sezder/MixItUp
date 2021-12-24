const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const barsRouter = require("./bars");
const cocktailsRouter = require("./cocktails");
const reviewFeedRouter = require("./reviewFeed");

// Reference subrouters: order specific, with /cocktails last, as it has the most general routes
router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/bars", barsRouter);
router.use("/reviews", reviewFeedRouter);
router.use("/cocktails", cocktailsRouter);

module.exports = router;
