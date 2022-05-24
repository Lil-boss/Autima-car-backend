const ordersModel = require("../models/OrdersModel")

//GET /orders
const getOrders = async (req, res) => {
    try {
        await ordersModel.find()
            .then(orders => {
                res.status(200).json({
                    status: 200,
                    data: orders
                })
            })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
}

//Get /orders/:id
const getOrderById = async (req, res) => {
    try {
        await ordersModel.findById(req.params.id)
            .then(order => {
                res.status(200).json({
                    status: 200,
                    data: order
                })
            })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
}

//POST /orders
const createOrder = async (req, res) => {
    try {
        const order = new ordersModel({
            name: req.body.name,
            email: req.body.email,
            productName: req.body.productName,
            price: req.body.price,
            qty: req.body.qty,
            phone: req.body.phone,
            address: req.body.address,
            isDeliver: req.body.isDeliver,
            isPay: req.body.isPay
        })
        await order.save();
        res.status(201).json({
            status: 201,
            data: order
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
}

//PUT /orders/:id
const updateOrder = async (req, res) => {
    try {
        await ordersModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            .then(order => {
                res.status(200).json({
                    status: 200,
                    data: order
                })
            })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
}

//DELETE /orders/:id
const deleteOrder = async (req, res) => {
    try {
        await ordersModel.findByIdAndDelete(req.params.id)
            .then(order => {
                res.status(200).json({
                    status: 200,
                    data: order
                })
            })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
}