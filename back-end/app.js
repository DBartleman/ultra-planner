const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { ValidationError } = require("sequelize");
const indexRouter = require("./routes/index");
// coming soon:
//const tasksRouter = require("./routes/tasks");
//const listsRouter = require("./routes/lists");
const usersRouter = require("./routes/users");
const { environment } = require("./config/database");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/", indexRouter);
// coming soon:
//app.use("/tasks", tasksRouter);
//app.use("/lists", listsRouter);
app.use("/users", usersRouter);

// Catch unhandled requests
app.use((req, res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});

// catch sequelize errors
app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = "Sequelize Error";
    }
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    const isProduction = environment === "production";
    res.json({
        title: err.title || "Server Error",
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});

module.exports = app;
