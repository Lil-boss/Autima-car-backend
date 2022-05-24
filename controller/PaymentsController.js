const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const createPayment = async (req, res) => {
    try {
        const price = req.body.amount;
        const amount = Number(price)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            payment_method_types: ['card'],
        })
        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
        });
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