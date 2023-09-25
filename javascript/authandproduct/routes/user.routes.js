const { errorMessage } = require('../utils/common');
const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

// GET - retrieve all users
router.get('/', async (req, res) => {
    try {
        const users = await db.user.findMany({
            select: { id: true, name: true, email: true, username: true }
        });
        return res.status(200).json({
            success: true,
            users
        });
    } catch (error) {
        errorMessage(error, res);
    }
});

router.post('/', async (req, res) => {
    try {
        const {
            email,
            name,
            password,
            username
        } = req.body;

        // encrypt password
        const encryptedPassword = await bcrypt.hash(password, parseInt(process.env.PASSWORD_SALT));

        // create a user
        await db.user.create({
            data: {
                email,
                name,
                password: encryptedPassword,
                username
            }
        });

        return res.status(201).json({
            success: true,
            message: "User created!"
        });
    } catch (error) {
        errorMessage(error, res);
    }
});

module.exports = router;