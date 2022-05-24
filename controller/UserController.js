const userModel = require('../models/UserModel');

//GET //api/v1/users

const getAllUsers = async (req, res) => {
    try {
        await userModel.find()
            .then(users => {
                res.status(200).json({
                    status: 200,
                    data: users
                })
            })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
}

//GET //api/v1/users/:id
const getUserById = async (req, res) => {
    try {
        await userModel.findById(req.params.id)
            .then(user => {
                res.status(200).json({
                    status: 200,
                    data: user
                })
            })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
}

//Get //api/v1/users/:email

const getUserByEmail = async (req, res) => {
    try {
        await userModel.find({ email: req.params.email })
            .then(user => {
                res.status(200).json({
                    status: 200,
                    data: user
                })
            })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
}


//POST //api/v1/users

const createUser = async (req, res) => {
    try {
        const user = new userModel({
            name: req.body.name,
            email: req.body.email,
            education: req.body.education,
            address: req.body.address,
            phone: req.body.phone,
            socialLinks: req.body.socialLinks,
            isAdmin: req.body.isAdmin
        })
        await user.save();
        res.status(201).json({
            status: 201,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
}

//PUT //api/v1/users/:id
const updateUser = async (req, res) => {
    try {
        await userModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            .then(user => {
                res.status(200).json({
                    status: 200,
                    data: user
                })
            })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
}

//delete //api/v1/users/:id
const deleteUser = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id)
            .then(user => {
                res.status(200).json({
                    status: 200,
                    data: user
                })
            })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
}