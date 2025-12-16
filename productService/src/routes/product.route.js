const express = require("express");
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');

const {createProduct, getProduct } = require('../controller/product.controller');

router.post('/cretaeProduct',authMiddleware, createProduct);
router.get('/getProduct', authMiddleware, getProduct);

module.exports = router;