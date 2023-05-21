const express = require("express");
const router = express.Router();

const Product = require('../models/categories');


router.get("/getAll", async (req, res) => {
    try {
        const categories = await Product.getAllCategory();
        res.json(categories);
      } catch (error) {
        console.error(error);
        res.status(500).json(error.toString());
      }
})


module.exports = router

