const productModel = require('../models/ProductModel');


// GET /products
const getProducts = async (req, res) => {
    try {
        await productModel.find()
            .then(products => {
                res.status(200).json({
                    status: 200,
                    data: products
                })
            })
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}

//POST //products
const createProduct = async (req, res) => {
    try {
        const product = new productModel({
            productName: req.body.productName,
            description: req.body.description,
            price: req.body.price,
            qty: req.body.qty,
            image: req.body.image,
            totalPrice: req.body.totalPrice
        });
        await product.save((err, product) => {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            } else {
                res.status(200).send(product);
            }
        });
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}


module.exports = {
    getProducts,
    createProduct
}