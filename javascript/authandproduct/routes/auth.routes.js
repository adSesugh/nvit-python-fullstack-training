const router = require('express').Router();
const bcrypt = require('bcrypt');

const { db, errorMessage } = require('../utils/common');
const { generateAccessToken } = require('../middleware/auth');


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await db.user.findFirst({ where: { email: email } });

        if (!(email && password)) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Credentials not found"
            });
        } else if (!bcrypt.compare(password, user.password)) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // prepare payload and generate access token
        const payload = {
            email: user.email,
            id: user.id,
            username: user.username
        };
        const accessToken = await generateAccessToken(payload);
        delete payload.email;

        return res.status(200).json({
            success: true,
            message: `Welcome ${user.username}!`,
            user: payload,
            accessToken
        });
    } catch (error) {
        errorMessage(error, res);
    }
});

module.exports = router;