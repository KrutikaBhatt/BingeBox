const express = require('express');
const {getUser,
    addToWishlist,
    removeFromWishList,
    addToContinueWatching} = require('../controllers/userController');

const router = express.Router();

router.get('/getUser/:id',getUser);
router.post('/addToWishList',addToWishlist);
router.post('/continueWatching',addToContinueWatching);
router.post('/removeWishList',removeFromWishList);
module.exports = {
    routes :router
}