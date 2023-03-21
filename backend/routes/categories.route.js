const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/categories.controller');
const Auth = require('../middleware/auth');

router.post('/', Auth.verifyToken, CategoryController.createCategory);
router.get('/', Auth.verifyToken, CategoryController.getCategories);
router.delete('/', Auth.verifyToken, CategoryController.deleteCategory);

module.exports = router;