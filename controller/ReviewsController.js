const reviewModel = require('../models/ReviewsModel');

//Get //reviews
const getReviews = async (req, res) => {
    await reviewModel.find((err, reviews) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(reviews);
    });
}

//Get //reviews/:id
const getReviewById = async (req, res) => {
    await reviewModel.findById(req.params.id, (err, review) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(review);
    });
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
    await newReview.save((err, review) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(review);
    });
}

//delete //reviews/:id
const deleteReview = async (req, res) => {
    await reviewModel.findByIdAndRemove(req.params.id, (err, review) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(review);
    });
}

module.exports = {
    getReviews,
    getReviewById,
    addReview,
    deleteReview
}