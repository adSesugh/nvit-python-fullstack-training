const express = require('express');
const cors = require('cors');
const { verifyToken } = require('./middleware/auth');
const productRouter = require('./routes/product.routes');
const userRouter = require('./routes/user.routes');
const authRouter = require('./routes/auth.routes');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('./images'));

// Register routes
app.use('/api/products', verifyToken, productRouter);
app.use('/api/users', verifyToken, userRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.send('<h1>Welcome to product management solution!</h1>');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});