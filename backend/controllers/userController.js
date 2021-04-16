'use strict';

const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();
const firebase1 = require('firebase');
const auth = firebase.auth();

const getUser = async(req,res,next) =>{
    try {
        const id = req.params.id
        const user = await firestore.collection('users').doc(id)
        const data = await user.get()
        if (!data.exists) {
            res.status(404).send('User not found')
        } else {
            res.send(data.data())
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const addToWishlist = async(req,res,next) =>{
    try {
        console.log("Adding to wishlist ...");
        console.log(req.body);
        const userid = req.body.userId
        const movieid = req.body.movieid
        console.log("User id",userid);
        console.log("Movie id",movieid);
        // const data = req.body;
        const user = firestore.collection('users').doc(userid)

        //
        const user1 = await user.update({
            wishList: firebase1.firestore.FieldValue.arrayUnion(movieid),
        })
        console.log(user1)
        res.send('Movie added to wishlist successfully !')
    } catch (error) {
        console.log(error)
    }
}

const removeFromWishList = async(req, res,next)=>{
    try {
        const userid = req.body.userId
        const movieid = req.body.movieid
        // const data = req.body;
        const user = firestore.collection('users').doc(userid)

        //
        const user1 = await user.update({
            wishList: firebase1.firestore.FieldValue.arrayRemove(movieid),
        })
        console.log(user1)
        res.send('Movie removed from wishlist successfully !')
    } catch (error) {
        console.log(error)
    }
}


const addToContinueWatching = async(req,res,next) =>{
    try {
        const userid = req.body.userId
        const movieid = req.body.movieid
        // const data = req.body;
        const user = firestore.collection('users').doc(userid)

        //
        const user1 = await user.update({
            continueWatching: firebase1.firestore.FieldValue.arrayUnion(movieid),
        })
        console.log(user1)
        res.send('Continue watch this movie !')
    } catch (error) {
        console.log(error)
    }
}
module.exports ={
    getUser,
    addToWishlist,
    addToContinueWatching,
    removeFromWishList
}

