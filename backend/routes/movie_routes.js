const express = require('express');
const {showWishList,
    showContinueWatching,
    IncreaseClickCount,
    recommendMovie } = require('../controllers/movieController');

const router = express.Router();

router.get('/showWishList/:userId',showWishList);
router.get('/showContinueWatching/:userId',showContinueWatching);
router.put('/clickCount/:movieId',IncreaseClickCount);
router.get('/recommend/:id',recommendMovie);

module.exports = {
    routes :router
}