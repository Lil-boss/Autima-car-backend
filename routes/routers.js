const router = require('express').Router();
const productController = require('../controller/ProductController');
const userController = require('../controller/UserController');
const authHeader = require('../Authentication/auth');
const authentication = require('../Middleware/middleware');
//auth
router.get("/auth", authHeader.auth);

//Products
router.get("/products", productController.getProducts);
router.get("/product/:id", productController.getProductById);
router.post("/products", productController.createProduct);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

//Users
router.get("/users", userController.getAllUsers);
router.post("/users", userController.createUser);

module.exports = router;