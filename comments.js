// Create web server with express
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log('Server is running on port', port);
});

// Respond to GET requests at /comments
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});