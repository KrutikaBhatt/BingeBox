'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('./routes/user_routes');
const movieRoutes = require('./routes/movie_routes');
const paymentRoute = require('./routes/paymentRoute');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api',userRoutes.routes);
app.use('/movie',movieRoutes.routes);
app.use('/pay',paymentRoute.routes)

const server = app.listen(config.port, () => console.log("App is listening on url http://localhost:" + config.port))
