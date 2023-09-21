const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const db = new PrismaClient();

//GET - pull all app contact
router.get('/', async (req, res) => {
    try {
        const contacts = await db.contact.findMany({});
        return res.status(200).json(contacts);
    } catch (error) {
        console.log(error);
    }
});

// POST - post contact info to save to DB
router.post('/', async (req, res) => {
    try {
        const {
            fullName,
            phoneNumber,
            gender,
            emailAddress,
            picture,
            biography } = req.body;
        if (!(fullName && phoneNumber && emailAddress && gender)) {
            return res.status(400).json({
                success: false,
                message: "Incomplete information"
            });
        }

        const contact = await db.contact.create({
            data: {
                fullName,
                phoneNumber,
                gender,
                emailAddress,
                picture,
                biography
            }
        });

        return res.status(201).json({
            success: true,
            message: "Contact added successfully",
            contact
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error
        });
    }
});

// GET - Get a single contact details from the DB
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await db.contact.findFirst({
            where: {
                id: id
            },
        });

        return res.status(200).json({
            success: true,
            contact
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const {
            fullName,
            phoneNumber,
            gender,
            emailAddress,
            picture,
            biography } = req.body;
        if (!(fullName && phoneNumber && emailAddress && gender)) {
            return res.status(400).json({
                success: false,
                message: "Incomplete information"
            });
        }

        const contact = await db.contact.update({
            where: {
                id: parseInt(id)
            },
            data: {
                fullName,
                phoneNumber,
                gender,
                emailAddress,
                picture,
                biography
            }
        });

        return res.status(200).json({
            success: true,
            contact
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await db.contact.delete({
            where: {
                id: parseInt(id)
            },
        });

        return res.status(205).json({
            success: true,
            message: "Contact deleted successfully",
            contact
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error
        });
    }
});



module.exports = router;