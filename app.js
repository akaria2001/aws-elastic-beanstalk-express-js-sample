const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome to IT HowTo, my name is Amit and I am learning AWS DevOps! Full pipeline test manual review'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
