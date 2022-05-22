
const jwt = require("jsonwebtoken");

const auth = async (req, res) => {
    try {
        const user = req.body;
        const accessToken = jwt.sign(user, process.env.PRIVATE_KEY, { expiresIn: '1d' });
        res.status(200).json({ accessToken });
    } catch {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { auth };