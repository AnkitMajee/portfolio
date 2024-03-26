const express = require('express');
const app = express();
require('dotenv').config();
import path from 'path';

const dbConfig = require('./config/dbConfig');

const portfolioroute = require('./routes/portfolioRoute')
app.use(express.json());
app.use("/api/portfolio", portfolioroute);

const __dirname = path.resolve();

const port =process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});   
