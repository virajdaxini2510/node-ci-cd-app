const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('CI/CD Node.js App is Running!');
});
app.get('/home', (req, res) => {
    res.send('CI/CD Node.js App is Running from Home!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});