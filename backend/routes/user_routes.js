const express = require('express');
const {getUser,
    addToWishlist,
    removeFromWishList,
    addToContinueWatching,
    send_mail
} = require('../controllers/userController');

const router = express.Router();

router.get('/getUser/:id',getUser);
router.post('/addToWishList',addToWishlist);
router.post('/continueWatching',addToContinueWatching);
router.post('/removeWishList',removeFromWishList);
router.get('/send_mail',send_mail);
module.exports = {
    routes :router
}