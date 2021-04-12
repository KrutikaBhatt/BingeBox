'use strict';

const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();

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

module.exports ={
    getUser
}