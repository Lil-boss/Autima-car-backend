const reviewModel = require('../models/ReviewsModel');

//Get //reviews
const getReviews = async (req, res) => {
    try {
        await reviewModel.find()
            .then(reviews => {
                res.status(200).json({
                    status: 200,
                    data: reviews
                })
            })
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}

//Get //reviews/:id
const getReviewById = async (req, res) => {
    try {
        await reviewModel.findById(req.params.id)
            .then(review => {
                res.status(200).json({
                    status: 200,
                    data: review
                })
            })
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}

//Post //reviews
const addReview = async (req, res) => {
    const newReview = new reviewModel({
        name: req.body.name,
        email: req.body.email,
        reviewTitle: req.body.reviewTitle,
        reviewDes: req.body.reviewDes,
        rating: req.body.rating
    })
    try {
        await newReview.save()
            .then(review => {
                res.status(200).json({
                    status: 200,
                    data: review
                })
            })
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}

//delete //reviews/:id
const deleteReview = async (req, res) => {
    try {
        await reviewModel.findByIdAndDelete(req.params.id)
            .then(review => {
                res.status(200).json({
                    status: 200,
                    data: review
                })
            })
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}

module.exports = {
    getReviews,
    getReviewById,
    addReview,
    deleteReview
}