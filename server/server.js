const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.get('/api', (req, res) => {
    res.json({ message: 'The server started!' });
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

