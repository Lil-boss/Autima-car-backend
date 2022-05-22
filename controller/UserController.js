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


//POST //api/v1/users

const createUser = async (req, res) => {
    try {
        const user = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
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


module.exports = {
    getAllUsers,
    createUser
}