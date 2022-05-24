const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const createPayment = async (req, res) => {
    try {
        const payment = {
            amount: req.body.amount * 100,
            currency: 'usd',
            payment_method: ['card'],
        };
        const paymentIntent = await stripe.paymentIntents.create(payment);
        req.send({ client_secret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
}

module.exports = {
    createPayment
}