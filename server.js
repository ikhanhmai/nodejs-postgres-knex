const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const userRoutes = require('./api/routes/users');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/v1/users', userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('[Server] online ' + new Date()));
