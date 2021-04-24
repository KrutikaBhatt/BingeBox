import React, { useContext ,useState,useEffect} from 'react';
import { SelectProfileContainer } from './profiles';
import {FirebaseContext} from '../context/firebase';
import Fuse from 'fuse.js';
import {Loading , Header,Card,Player} from '../components';
import * as ROUTES from '../Routes_System/routes';
import logo from '../BingeBoxLogo.png';
import {FooterContainer} from '../Container/footer';
import { PlayButton } from '../components/Header/styles/header';
import axios from 'axios';
import '../styles/Row.css';
import { useHistory } from 'react-router-dom';

export function BrowseContainer({slides}){

    const history = useHistory();
    const [profile,setProfile] = useState({});
    const [category, setCategory] = useState('films');
    const [loading,setLoading] = useState(true);
    //const [category, setCategory] = useState('series');
    const [searchTerm, setsearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);
    //console.log(slides);
    const [movieId, setmovieId] = useState('')
    const [continueWatch,setContinue] = useState([]);
    const {firebase} =useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    const [content,setcontent] = useState([]);  // By default will be an array
    const [userId,setUserId] = useState('');
    const [recommend,setRecommend] = useState([]);

    useEffect(() =>{
      setUserId(user.uid);
    },[user.uid]);

      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, [profile.displayName]);

      useEffect(() => {
        setSlideRows(slides[category]);
      }, [slides, category]);

      useEffect(()=>{
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);
        //console.log(results);
        if(slideRows.length >0 && searchTerm.length >3 && results.length >0){
          setSlideRows(results);
        }else{
          setSlideRows(slides[category]);
        }
    
        },[searchTerm]);

        const getReccomendationPosts = async () =>{
          try{
            const userPosts = await axios.get('http://localhost:8080/movie/recommend/'+user.uid)
            setRecommend(userPosts.data); 
          }catch(error){
            console.log("The error is main Reccomendation function");
          }
        }

        useEffect(()=>{
    
          getReccomendationPosts()
          const interval=setInterval(()=>{
            getReccomendationPosts()
           },10000)
             
             
           return()=>clearInterval(interval)
      },[])

      const getContinueWatchingPosts = async () =>{
        try{
          const userPosts = await axios.get('http://localhost:8080/movie/showContinueWatching/'+user.uid)
          setcontent(userPosts.data); 
        }catch(error){
          console.log("The error is Continue main function");
        }
      }

      useEffect(()=>{
  
        getContinueWatchingPosts()
        const interval=setInterval(()=>{
          getContinueWatchingPosts()
         },10000)
           
           
         return()=>clearInterval(interval)
    },[])



    return profile.displayName ?(
      
      <>
      {
      loading ?(
        <Loading src ={user.photoURL}  />
      ) :<Loading.ReleaseBody />}
      <Header src="killed_sara" dontShowOnSmallViewPort>
      <Header.Frame>
        <Header.Group>
                <Header.Logo imageLink={ROUTES.HOME} src={logo} alt="Binge Box" />
                <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
              Films
            </Header.TextLink>
            <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>
              Series
            </Header.TextLink>
            <Header.TextLink active={category === 'India' ? 'true' : 'false'} onClick={() => setCategory('India')}>
              India
            </Header.TextLink>
        </Header.Group>
        <Header.Group>
          <Header.SearchBar searchTerm={searchTerm} setsearchTerm ={setsearchTerm} />
          <Header.Profile>
            <Header.Picture src ={user.photoURL} />
            <Header.Dropdown>
              <Header.Group>
                <Header.Picture src ={user.photoURL} onClick={() =>{history.push(ROUTES.profile)}}/>
                <Header.DropItem onClick={() =>{history.push(ROUTES.profile)}}>{user.displayName}</Header.DropItem>
              </Header.Group>
              <Header.Group>
                <Header.DropItem onClick={() =>{history.push(ROUTES.MyList)}}>Watch List</Header.DropItem>
              </Header.Group>
              <Header.Group>
                <Header.DropItem onClick={()=>{
                  firebase.auth().signOut();
                  history.push(ROUTES.HOME)
                  }}>Sign Out</Header.DropItem>
              </Header.Group>
            </Header.Dropdown>
          </Header.Profile>
        </Header.Group>
      </Header.Frame>
      <Header.Feature>
        <Header.Callout>Who Killed Sara?</Header.Callout>
        <Header.Text>
          {/* Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
          City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
          futile attempt to feel like he's part of the world around him. */}
          Hell-bent on exacting revenge and proving he was framed <br />for his sister's murder, Álex sets out to unearth<br /> much more than the crime's real culprit.
        </Header.Text>
        {/* <Header.PlayButton>Play</Header.PlayButton>  */}
        <Card.AlignSide>
        <Player>
          <Player.Button />
          <Player.Video src="/videos/Killed_sara.mp4" />
        </Player>

        <Card.WatchList>My List</Card.WatchList>
        </Card.AlignSide>
      </Header.Feature>
      </Header>

      <div className ="row">
      <Card.Title>Recommended for you</Card.Title>
        <div className ="Continue">
          {recommend.map((movie) => (
            <img 
            key={movie.id}
            className="row_poster" 
            src={`/images/films/${movie.genre}/${movie.slug}/small.jpg`} 
            alt={movie.title}></img>
          ))}
        </div>
        </div>
      {content.length !==0}
      <div className ="row">

      <Card.Title>Continue Watching</Card.Title>
        <div className ="Continue">
          {content.map((movie) => (
            <img 
            key={movie.id}
            className="row_continue" 
            src={`/images/films/${movie.genre}/${movie.slug}/small.jpg`} 
            alt={movie.title}></img>
          ))}
        </div>
        <br></br><br></br><br></br><br></br><br></br>
        </div>
      
      <Card.Group>
        {slideRows.map((slideItem) => (
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
              <Player onClick={() =>{
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
                }}>
                <Player.Button/>
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
                  axios.post("http://localhost:8080/api/addToWishList",body).then(res =>{
                    console.log(res);
                  })
                }
                console.log(user.uid);
                console.log(movieId);
              }}>My List</Card.WatchList>
              </Card.AlignSide>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
      </>
    ):(
      <SelectProfileContainer user ={user} setProfile ={setProfile} ></SelectProfileContainer>
    )
}