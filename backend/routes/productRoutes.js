import express from "express";
import { getProducts, getProductsById } from '../controllers/productController.js';

const router = express();

// @desc Fetch all products
// @route GET /api/products
// @access public
router.route('/').get(getProducts);
router.route('/:id').get(getProductsById);


export default router;