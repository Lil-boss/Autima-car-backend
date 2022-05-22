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

module.exports = authentication;