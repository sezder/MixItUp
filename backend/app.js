const express = require("express"); // Node.js framework for servers/APIs
const morgan = require("morgan"); // HTTP request logger middleware
const cors = require("cors"); // Cross-origin Resource Sharing: Connect/Express middleware
const csurf = require("csurf"); // Protects against cross-site request forgery (e.g. phishing site creates AJAX button/form that creates a request to your site)
const helmet = require("helmet"); // Connect-style middleware, helps secure Express apps via setting HTTP headers
const cookieParser = require("cookie-parser"); // Parse Cookie header and populate req.cookies w/ cookie obj
const { ValidationError } = require("sequelize"); // Extends Error -> BaseError -> ValidationError: thrown when sequelize validation failed 
const { environment } = require("./config"); 
const routes = require("./routes");

const isProduction = environment === "production";

// init express app
const app = express();


app.use(morgan("dev")); // connect morgan for logging info about req/res
app.use(cookieParser()); // parsing cookies
app.use(express.json()); // parsing JSOn bodies (for "Content-Type": "application/json")

//Security middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}
// helmet helps set a variety of headers to better secure app
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

app.use(routes);

// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});


// Process sequelize errors
app.use((err, _req, _res, next) => {
    // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
      err.errors = err.errors.map((e) => e.message);
      err.title = 'Sequelize Validation error';
  }
  next(err);
});


// Error Formatter
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
