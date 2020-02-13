const express = require("express");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../../models/User");

const router = express.Router();

// @route PUT api/recipes
// @description Put user recipe
// @access Private
router.put(
  "/",
  auth,
  [
    check("name", "Recipe name is required")
      .not()
      .isEmpty(),
    check("type", "Please choose a recipe type")
      .not()
      .isEmpty(),
    check("season", "Please choose a recipe season")
      .not()
      .isEmpty(),
    check("description", "Please enter recipe description or steps")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, type, season, description } = req.body;
      const newRecipe = { name, type, season, description };
      const user = await User.findById(req.user.id).select("-password");
      const recipe = await User.find({
        recipes: { $elemMatch: { name, type, season, description } }
      });

      if (recipe.length > 0) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Recipe already exists!" }] });
      }
      user.recipes.unshift(newRecipe);
      await user.save();
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
