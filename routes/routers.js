const router = require('express').Router();
const productController = require('../controller/ProductController');
const userController = require('../controller/UserController');
const orderController = require('../controller/OrdersController');
const authHeader = require('../Authentication/auth');
const authentication = require('../Middleware/middleware');
const paymentController = require('../controller/PaymentsController');
const reviewController = require('../controller/ReviewsController');

//auth
router.post("/auth", authHeader.auth);

//payments
router.post("/create-payment-intent", authentication.authentication, paymentController.createPayment);

//Products
router.get("/products", authentication.authentication, productController.getProducts);
router.get("/product/:id", authentication.authentication, productController.getProductById);
router.post("/products", authentication.authentication, productController.createProduct);
router.put("/product/:id", authentication.authentication, productController.updateProduct);
router.delete("/product/:id", authentication.authentication, productController.deleteProduct);

//Users
router.get("/users", authentication.authentication, userController.getAllUsers);
router.get("/user/:email", authentication.authentication, userController.getUserByEmail);
router.post("/users", authentication.authentication, userController.createUser);
router.get("/user/:id", authentication.authentication, userController.getUserById);
router.put("/user/:id", authentication.authentication, userController.updateUser);
router.delete("/user/:id", authentication.authentication, userController.deleteUser);


//orders
router.get("/orders", authentication.authentication, orderController.getOrders);
router.get("/order/:id", authentication.authentication, orderController.getOrderById);
router.post("/orders", authentication.authentication, orderController.createOrder);
router.put("/order/:id", authentication.authentication, orderController.updateOrder);
router.delete("/order/:id", authentication.authentication, orderController.deleteOrder);

//reviews
router.get("/reviews", authentication.authentication, reviewController.getReviews);
router.get("/review/:id", authentication.authentication, reviewController.getReviewById);
router.post("/reviews", authentication.authentication, reviewController.addReview);
router.delete("/review/:id", authentication.authentication, reviewController.deleteReview);

module.exports = router;