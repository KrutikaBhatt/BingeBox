const express = require('express');
const {getUser} = require('../controllers/userController');

const router = express.Router();

router.get('/getUser/:id',getUser);

module.exports = {
    routes :router
}