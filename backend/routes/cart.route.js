const express = require('express');
const router = express.Router();

const CartController = require('../controllers/cart.controller');
const Auth = require('../middleware/auth');

router.post('/addToCart', Auth.verifyToken, CartController.addToCart);
router.post('/getItemsCount', Auth.verifyToken, CartController.getItemsCount);
router.post('/getCart', Auth.verifyToken, CartController.getCart);
router.delete('/deleteFromCart/:id', Auth.verifyToken, CartController.deleteCart);

module.exports = router;