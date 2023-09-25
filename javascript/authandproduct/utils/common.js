const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const db = new PrismaClient();
dotenv.config();
const { TOKEN_SECRET } = process.env;

const errorMessage = (error, res) => res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error
});

const currentUser = (req) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    var userd;

    if (!token) throw new Error("Invalid user");

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) throw new Error("Invalid user");
        userd = user;
    });

    return userd;
};

module.exports = {
    db,
    errorMessage,
    currentUser
};