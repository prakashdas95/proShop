import express from "express";
import asyncHandler from "express-async-handler";
import Product from '../models/productModel.js';

const router = express();

// @desc Fetch all products
// @route GET /api/products
// @access public
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));


// @desc Fetch single product
// @route GET /api/products:id
// @access public
router.get('/:id', asyncHandler(async (req, res) => {
    console.log(req.params.id);
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
    res.json(product);
}));

export default router;