const router = require('express').Router();
const productController = require('../controller/ProductController');
const userController = require('../controller/UserController');
const authHeader = require('../Authentication/auth');
const authentication = require('../Middleware/middleware');
//auth
router.get("/auth", authHeader.auth);

//Products
router.get("/products", authentication, productController.getProducts);
router.post("/products", authentication, productController.createProduct);

//Users
router.get("/users", authentication, userController.getAllUsers);
router.post("/users", authentication, userController.createUser);

module.exports = router;