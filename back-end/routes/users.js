const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils/utils");
const { getUserToken, requireAuth } = require("../utils/auth");
const router = express.Router();
const db = require("../db/models");

const { User, List } = db;

const validateUsernameAndPassword = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid username."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  handleValidationErrors,
];

router.post(
  "/", 
  validateUsernameAndPassword,
  asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, hashedPassword });

    const token = getUserToken(user);
    res.status(201).json({
      user: { id: user.id },
      token,
    });
  })
);

router.post(
  "/token",
  validateUsernameAndPassword,
  asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user || !user.validatePassword(password)) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }
    const token = getUserToken(user);
    res.json({ token, user: { id: user.id }});
  })
);

// lists getter should go in lists routes??

// router.get(
//   "/:id/lists",
//   requireAuth,
//   asyncHandler(async (req, res, next) => {
//     const userId = parseInt(req.params.id, 10);
//     const lists = await List.findAll({
//       where: { userId },
//     });
//     res.json({ lists });
//   })
// );

router.get(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    const user = await User.findByPk(userId);
    res.json({ user });
  })
);

module.exports = router;
