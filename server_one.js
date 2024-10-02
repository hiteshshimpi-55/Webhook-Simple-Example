const express = require('express');
const axios = require('axios');


const app = express();

const PORT = 8000;

app.use(express.json());

app.post('/add_data', async (req, res) => {
    try{
        const data = req.body;
        const response = await axios.post('http://localhost:8080/webhook/add_data',data);
        res.json({
            message:"Data added successfully",
            axiosResponse: response.body
        })
    }catch (error){
        res.status(500);
        res.json({
            message: 'Failed to send data',
            error: error.message,
        });; 
    }
     
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
