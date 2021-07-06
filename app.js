
const express = require('express');
const app = express();
const Joi = require('joi');
const genres = require('./routes/genres');


app.use(express.json());
app.use('/api/genres', genres);

app.listen(3000);