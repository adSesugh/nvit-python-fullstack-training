const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const multer = require('multer');
const { errorMessage, currentUser } = require('../utils/common');


const db = new PrismaClient();
const upload = multer({ dest: 'images/' });

// GET - Retrieve all products
router.get('/', async (req, res) => {
    try {
        const products = await db.product.findMany({});
        return res.status(200).json({
            success: true,
            products
        });
    } catch (error) {
        errorMessage(error, res);
    }
});

// POST - Create a product
router.post('/', upload.single('picture'), async (req, res) => {
    try {
        // retrieve sent data from request body
        const {
            name,
            price,
            description,
            barcode,
            qty,
            expiry,
            reorder_level,
            qty_sold,
            min_qty
        } = req.body;
        // validate incoming data
        if (!(name && price)) {
            return res.status(400).json({
                success: false,
                message: "Bad Request - Invalid data"
            });
        }

        const { id } = currentUser(req);
        console.log(id);
        const product = await db.product.create({
            data: {
                name,
                price,
                description,
                barcode,
                qty: parseInt(qty),
                expiry,
                reorder_level: parseInt(reorder_level),
                qty_sold: parseInt(qty_sold),
                min_qty: parseInt(min_qty),
                picture: req.file.filename,
                userId: id
            }
        });

        return res.status(201).json({
            success: true,
            product,
            message: "Product created!"
        });
    } catch (error) {
        console.log(error);
        errorMessage(error, res);
    }
});

// GET - retrieve single product
router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await db.product.findFirstOrThrow({
            where: {
                id: productId
            }
        });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found!"
            });
        }

        return res.status(200).json({
            success: true,
            product
        });

    } catch (error) {
        errorMessage(error, res);
    }
});

// PUT - update a product
router.put('/:id', async (req, res) => {
    try {
        // retireve product id from request params
        const productId = req.params.id;

        // retrieve sent data from request body
        const {
            name,
            price,
            description,
            barcode,
            qty,
            expiry,
            reorder_level,
            qty_sold,
            min_qty,
            picture,
            userId,
            status
        } = req.body;
        // validate incoming data
        if (!(name && price && userId)) {
            return res.status(400).json({
                success: false,
                message: "Bad Request - Invalid data"
            });
        }

        const { id } = currentUser;
        const product = await db.product.update({
            where: {
                id: productId
            },
            data: {
                name,
                price,
                description,
                barcode,
                qty: parseInt(qty),
                expiry,
                reorder_level: parseInt(reorder_level),
                qty_sold: parseInt(qty_sold),
                min_qty: parseInt(min_qty),
                picture,
                userId: id,
                updatedAt: new Date.now()
            }
        });

        return res.status(201).json({
            success: true,
            product,
            message: "Product updated!"
        });
    } catch (error) {
        errorMessage(error, res);
    }
});

// DELETE - delete a product
router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;

        await db.product.delete({
            where: {
                id: productId
            }
        });

        return res.status(205).json({
            success: true,
            message: "Product deleted!"
        });

    } catch (error) {
        errorMessage(error, res);
    }
});

router.get('/reorder-level', async (req, res) => {
    try {
        const products = await db.product.findMany({
            where: {
                reorder_level: {
                    lt: 10
                }
            }
        });

        return res.status(201).json({
            success: true,
            products
        });
    } catch (error) {
        errorMessage(error, res);
    }
});

module.exports = router;