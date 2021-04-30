import React, { useContext ,useState,useEffect} from 'react';
import {FirebaseContext} from '../context/firebase';
import * as ROUTES from '../Routes_System/routes';
import axios from 'axios';
import {Header,Card,Player} from '../components';
import { SelectProfileContainer } from '../Container/profiles';
import '../styles/mylist.css';
import '../styles/Row.css'
import { NotificationManager } from 'react-notifications';

export default function MyList(){

    const {firebase} =useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    const [content,setcontent] = useState([]);
    const [movieId, setmovieId] = useState('')

    const getList = async () =>{
      try{
        const userPosts = await axios.get( 'http://localhost:8080/movie/showWishList/'+user.uid)
        setcontent(userPosts.data); 
      }catch(error){
        console.log("The error is Mylist function");
      }
    }

    useEffect(()=>{

      getList()
      const interval=setInterval(()=>{
        getList ()
       },3000)
         
         
       return()=>clearInterval(interval)
  },[])
    // useEffect(()=>{
            
    //     const api = 'http://localhost:8080/movie/showWishList/'+user.uid;
    //     console.log(api);
    //     axios.get(api).then((res) =>{
    //         setcontent(res.data);
    //         //console.log(res.data);
    //     })
    //     .catch((error)=>{
    //         console.log("Error occurred due to Continue Watching");
    //         console.log(error.message);
    //     });
    // },[]);

    console.log("The user Info :",content);
    const category = 'films';
    return(
        <>
        <div className="header_title">
            <h1>Hello {user.displayName}!</h1>
        </div>
        {content.length ===0 ?(<h2></h2>):(
            <>
           <Card.Group> 
        {content.map((item1) => (   
        item1.series.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} onClick={() =>  setmovieId(item.docId)} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Card.AlignSide>
              <Player>
                <Player.Button />
                {/* <Player.Button onClick={() =>{
                  console.log("Adding to continue Watching");
                  if(movieId === ''){
                    console.log("Its an empty string");
                  }
                  else{
                    const body ={
                      "userId" :user.uid,
                      "movieid" :movieId,
                    }
                    axios.post("http://localhost:8080/api/continueWatching",body).then(res =>{
                      console.log(res);
                    })
                  }
                }} /> */}
                <Player.Video src="/videos/frozen2.mp4" />
              </Player>
              <Card.WatchList category={category} onClick={() =>{
                if(movieId === ''){
                  console.log("Its an empty string");
                }
                else{
                  const body ={
                    "userId" :user.uid,
                    "movieid" :movieId,
                  }
                  console.log(body);
                  axios.post("http://localhost:8080/api/removeWishList",body).then(res =>{
                    console.log(res);
                    NotificationManager.success('', 'Removed from watchlist',3000);
                  })
                }
                console.log(user.uid);
                console.log(movieId);
              }}>Remove from List</Card.WatchList>
              </Card.AlignSide>
            </Card.Feature>
          </Card>
        ))
        ))} 
      </Card.Group>
            </>
        )}
        </>
    );
}