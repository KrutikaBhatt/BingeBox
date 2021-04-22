'use strict';

const firebase = require('../db');
const Movie = require('../models/movie');
const firestore = firebase.firestore();
const firebase1 = require('firebase');
const auth = firebase.auth();

const showWishList = async(req,res,next) =>{
    try{
        const id = req.params.userId
        const user = await firestore.collection('users').doc(id);
        const data = await user.get()

        if(!data.exists){
            res.status(404).send('User not found')
        }else{
            //console.log(data.data().wishList);
            const wishList = data.data().wishList;

            const send_data=[]
            let promise = new Promise(function (resolve, reject) {
                wishList.forEach(async show=>{
                    let data1 = await firestore.collection('films').doc(show).get();
                    console.log(show);
                    if(!data1.exists){
                        data1 = await firestore.collection('series').doc(show).get();
                    }
                    //console.log(data1.data());
                   const FA={
                       ...data1.data(),
                       docId:show,
                   }
                    send_data.push(FA);
                })
                setTimeout(() => resolve(send_data), 1000)
            }).then(send_data =>{
                const Array1 = []
                const Final_array = {
                    "series":[{
                        title:'Your Watch List',
                        data :[...send_data],
                    },
                ]
                }
                Array1.push(Final_array);
                Array1.map((item) =>{
                    console.log("Slide Item title :",item.series);
                    item.series.map((slide) =>{
                        console.log(slide.title);
                    })
                    console.log("Data :",item.data);
                })
                
                res.send(Array1);
            })
           
        }


    }catch(error){
        console.log(error);
    }
}
const showContinueWatching = async(req,res,next) =>{
    try{
        const id = req.params.userId
        if(typeof id === 'undefined' || id === ''){
            res.send(null);
        }
        if(id !== null && id !== undefined){
            const user = await firestore.collection('users').doc(id);
            const data = await user.get()

            if(!data.exists){
                res.status(404).send('User not found')
            }else{
                //console.log(data.data().wishList);
                const continueWatching = data.data().continueWatching;

                const send_data=[]
                let promise = new Promise(function (resolve, reject) {
                    continueWatching.forEach(async show=>{
                        try{
                            let data1 = await firestore.collection('films').doc(show).get();
                            console.log(show);
                            if(!data1.exists){
                                data1 = await firestore.collection('series').doc(show).get();
                            }
                            //console.log(data1.data());
                            const FA={
                                ...data1.data(),
                                docId:show,
                            }
                            send_data.push(FA);
                        }catch(error){
                            console.log(error);
                        }
                    })
                    setTimeout(() => resolve(send_data), 1000)
                }).then(send_data =>{
                   
                    res.send(send_data);
                })
            
            }
        }

    }catch(error){
        console.log(error);
    }
}

const IncreaseClickCount = async(req,res,next)=>{
    const id =req.params.movieId
    let type = 'films' ;
    let data1 = await firestore.collection('films').doc(id).get();
    if(!data1.exists){
        type = 'series';
        data1 = await firestore.collection('series').doc(id).get();
    }
    const current = data1.data().count;
    console.log(current);
    const data ={
        count:current+1
    }
    console.log(type);
    let movie = await firestore.collection(type).doc(id)
    
    await movie.update(data)
    res.send('Movie count increased !')
}



const recommendMovie = async(req,res,next) =>{
    try{
        const id = req.params.id;
        const user = await firestore.collection('users').doc(id);
        const data = await user.get()

        if(!data.exists){
            res.status(404).send('User not found')
        }else{
            const continueWatching = data.data().continueWatching;

            const movie_title=[]
            const movie_genre =[]
            const movie_tags1 = []
            const final_Id =[]

            let promise = new Promise(function (resolve, reject) {
                continueWatching.forEach(async show=>{
                    let data1 = await firestore.collection('films').doc(show).get();
                    if(!data1.exists){
                        data1 = await firestore.collection('series').doc(show).get();
                    }
                    if(!movie_genre.includes(data1.data().genre)){
                        movie_genre.push(data1.data().genre);
                    }
                    movie_tags1.push(...data1.data().tags);
                    if(!movie_title.includes(data1.data().title)){
                        movie_title.push(data1.data().title);
                    }
                   
                })
                setTimeout(() => resolve(movie_title), 1000)
            }).then(async movie_title =>{
                let movie_tags = [];
    
                // loop through array
                for(let i of movie_tags1) {
                    if(movie_tags.indexOf(i) === -1) {
                        movie_tags.push(i);
                    }
                }
                console.log("Movie Genre :",movie_genre);
                console.log("Movie Title :",movie_title);
                console.log("Movie Tags :",movie_tags);

                let promise = new Promise(function (resolve, reject){
                    movie_genre.forEach(async function (item){
                        movie_tags.forEach( async tag =>{
        
                            const ShowData = await firestore.collection('films').where('genre','==',item).where('tags', 'array-contains', tag).get();
                            
                            if(ShowData.empty){
                                console.log("Pata nahi .. Kuch nahi aa raha");
                                
                            }else{
                                ShowData.forEach(doc =>{
                                    if(continueWatching.includes(doc.id) || final_Id.includes(doc.data()) || final_Id.includes(doc.uid)){
                                        console.log("Similar ID");
                                    }
                                    else{
                                        
                                        final_Id.push(doc.data());

                                    }
                                })
                            }
                        } )
                        
                    })
                    setTimeout(() => resolve(final_Id), 1000);
                }).then(final_Id =>{
                    let check = {};
                    let result = [];
                    for(let i=0; i<final_Id.length; i++) {
                        if(!check[final_Id[i].id]){
                            check[final_Id[i].id] = true;
                            result.push(final_Id[i]);
                        }
                    }
                   res.send(result);
                }
                )
            })
        }
    }catch(error){
        console.log(error);
    }
    

}

module.exports ={
    showWishList,
    showContinueWatching,
    IncreaseClickCount,
    recommendMovie

}