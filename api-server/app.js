const createError = require("http-errors");
const express = require("express");
const session = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");

var debug = require("debug")("api:server");

// const fs = require("fs");
// const pdfPath = "./public/pdf";

// fs.access(pdfPath, (error) => {
//   // To check if the given directory
//   // already exists or not
//   if (error) {
//     // If current directory does not exist
//     // then create it
//     fs.mkdir(pdfPath, (error) => {
//       if (error) {
//         debug(error);
//       } else {
//         debug("New Directory created successfully !!");
//       }
//     });
//   } else {
//     debug("Given Directory already exists !!");
//   }
// });

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

//SECTION - Set up routes
const indexRouter = require("./routes/index");
const healthcheckRouter = require("./routes/healthcheck");

app.use("/", indexRouter);
app.use("/healthcheck", healthcheckRouter);
//!SECTION - Set up routes

//SECTION - Set up error handler
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
//!SECTION - Set up error handler

module.exports = app;
