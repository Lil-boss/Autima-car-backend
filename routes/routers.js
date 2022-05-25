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
router.post("/create-payment-intent", authentication, paymentController.createPayment);

//Products
router.get("/products", authentication, productController.getProducts);
router.get("/product/:id", authentication, productController.getProductById);
router.post("/products", authentication, productController.createProduct);
router.put("/product/:id", authentication, productController.updateProduct);
router.delete("/product/:id", authentication, productController.deleteProduct);

//Users
router.get("/users", authentication, userController.getAllUsers);
router.get("/user/:email", authentication, userController.getUserByEmail);
router.post("/users", authentication, userController.createUser);
router.get("/user/:id", authentication, userController.getUserById);
router.put("/user/:id", authentication, userController.updateUser);
router.delete("/user/:id", authentication, userController.deleteUser);


//orders
router.get("/orders", authentication, orderController.getOrders);
router.get("/order/:id", authentication, orderController.getOrderById);
router.post("/orders", authentication, orderController.createOrder);
router.put("/order/:id", authentication, orderController.updateOrder);
router.delete("/order/:id", authentication, orderController.deleteOrder);

//reviews
router.get("/reviews", authentication, reviewController.getReviews);
router.get("/review/:id", authentication, reviewController.getReviewById);
router.post("/reviews", authentication, reviewController.addReview);
router.delete("/review/:id", authentication, reviewController.deleteReview);

module.exports = router;