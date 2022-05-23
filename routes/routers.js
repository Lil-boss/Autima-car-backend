const router = require('express').Router();
const productController = require('../controller/ProductController');
const userController = require('../controller/UserController');
const authHeader = require('../Authentication/auth');
const authentication = require('../Middleware/middleware');
//auth
router.get("/auth", authHeader.auth);

//Products
router.get("/products", productController.getProducts);
router.post("/products", productController.createProduct);

//Users
router.get("/users", userController.getAllUsers);
router.post("/users", userController.createUser);

module.exports = router;