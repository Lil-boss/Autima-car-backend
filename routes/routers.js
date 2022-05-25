const router = require('express').Router();
const productController = require('../controller/ProductController');
const userController = require('../controller/UserController');
const orderController = require('../controller/OrdersController');
const authHeader = require('../Authentication/auth');
const authentication = require('../Middleware/middleware');
const paymentController = require('../controller/PaymentsController');
const reviewController = require('../controller/ReviewsController');

//auth
router.get("/auth", authHeader.auth);

//payments
router.post("/create-payment-intent", paymentController.createPayment);

//Products
router.get("/products", productController.getProducts);
router.get("/product/:id", productController.getProductById);
router.post("/products", productController.createProduct);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

//Users
router.get("/users", userController.getAllUsers);
router.get("/user/:email", userController.getUserByEmail);
router.post("/users", userController.createUser);
router.get("/user/:id", userController.getUserById);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);


//orders
router.get("/orders", orderController.getOrders);
router.get("/order/:id", orderController.getOrderById);
router.post("/orders", orderController.createOrder);
router.put("/order/:id", orderController.updateOrder);
router.delete("/order/:id", orderController.deleteOrder);

//reviews
router.get("/reviews", reviewController.getReviews);
router.get("/review/:id", reviewController.getReviewById);
router.post("/reviews", reviewController.addReview);
router.delete("/review/:id", reviewController.deleteReview);
module.exports = router;