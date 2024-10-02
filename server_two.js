const express = require('express');

const app = express();

const PORT = 8080;

app.use(express.json());

app.post('/webhook/add_data', (req, res) => {
    const data = req.body;
    console.log(data);
    res.status(200);
    res.json({
        "message":"Data received successfully"
    }) 
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
