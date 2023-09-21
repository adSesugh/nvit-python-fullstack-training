const express = require('express');
const cors = require('cors');

const contactRouter = require('./routes/contact.routes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/api/contacts', contactRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});