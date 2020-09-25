const express = require('express');
const fs = require('fs');

const app = express();

app.get('/download/:filePath', (req, res) => {
    const file = `${req.params.filePath}`;
    res.download(file);
});
  
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});