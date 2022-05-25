const router = require('express').Router();
const productController = require('../controller/ProductController');
const userController = require('../controller/UserController');
const orderController = require('../controller/OrdersController');
const authHeader = require('..//auth');
const paymentController = require('../controller/PaymentsController');
const reviewController = require('../controller/ReviewsController');
const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
    const author = req.headers.authorization;
    if (!author) {
        res.status(401).json({ message: 'authorization denied' });
    }
    const token = author.split(' ')[1];
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = decoded
    next();
}
//auth
router.post("/auth", authHeader.auth);

//payments
router.post("/create-payment-intent", paymentController.createPayment);

//Products
router.get("/products", authentication, productController.getProducts);
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