const express = require('express');

const {
    CallBack,
    Payment
} = require('../controllers/paymentController');

const router = express.Router();
router.post('/callback',CallBack);
router.post('/payment',Payment);
module.exports = {
    routes:router,
}