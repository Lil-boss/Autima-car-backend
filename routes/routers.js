const router = require('express').Router();
const productController = require('../controller/ProductController');
const userController = require('../controller/UserController');

//Products
router.get("/products", productController.getProducts);
router.post("/products", productController.createProduct);

//Users
router.get("/users", userController.getAllUsers);
router.post("/users", userController.createUser);

module.exports = router;