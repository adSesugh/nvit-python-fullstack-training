const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Lab 5');
})

app.post('/', (req, res) => {
    res.json({"data": req.body});
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})