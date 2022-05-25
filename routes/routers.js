const router = require('express').Router();
const productController = require('../controller/ProductController');
const userController = require('../controller/UserController');
const orderController = require('../controller/OrdersController');
const authHeader = require('../Authentication/auth');
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