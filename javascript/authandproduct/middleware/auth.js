const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const { TOKEN_SECRET } = process.env;

// Generate User Access Token
const generateAccessToken = (payload) => {
    const accessToken = jwt.sign(payload, TOKEN_SECRET, { expiresIn: '2h' });

    return accessToken;
};

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({
        success: false,
        message: 'Invalid Token'
    });

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({
            success: false,
            message: "Access Forbidden"
        });

        req.user = user;

        next();
    });
};

module.exports = {
    generateAccessToken,
    verifyToken
};
