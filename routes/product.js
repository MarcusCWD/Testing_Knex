const express = require("express");
const router = express.Router();

const Product = require('../models/Product');


router.get("/getAll", async (req, res) => {
    try {
        const products = await Product.getAllProducts();
        res.json(products);
      } catch (error) {
        res.status(500).json(error.toString());
      }
})

router.get("/getId", async (req, res) => {
  try {
      const productId = req.query.id
      const products = await Product.getProductById(productId);
      res.json(products);
    } catch (error) {
      res.status(500).json(error.toString());
    }
})


module.exports = router

