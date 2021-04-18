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
import './Row.css';

export function BrowseContainer({slides}){

  function AddToWishList(Id){
    console.log(Id);
  }
    const [profile,setProfile] = useState({});
    const [category, setCategory] = useState('series');
    const [loading,setLoading] = useState(true);
    //const [category, setCategory] = useState('series');
    const [searchTerm, setsearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);

    const [movieId, setmovieId] = useState('')
    const [continueWatch,setContinue] = useState([]);
    const {firebase} =useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    const [content,setcontent] = useState([]);  // By default will be an array
    const [userId,setUserId] = useState('');

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

        useEffect(()=>{
            
            const api = 'http://localhost:8080/movie/showContinueWatching/'+user.uid;
            console.log(api);
            axios.get(api).then((res) =>{
                setcontent(res.data);
                console.log(res.data);
            })
            .catch((error)=>{
                console.log("Error occurred due to Continue Watching");
                console.log(error.message);
            });
        },[user.uid]);
    return profile.displayName ?(
      
      <>
      {
      loading ?(
        <Loading src ={user.photoURL}  />
      ) :<Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
      <Header.Frame>
        <Header.Group>
                <Header.Logo imageLink={ROUTES.HOME} src={logo} alt="Bing Box" />
                <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>
              Series
            </Header.TextLink>
            <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
              Films
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
                <Header.Picture src ={user.photoURL}/>
                <Header.TextLink>{user.displayName}</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.TextLink onClick={()=>firebase.auth().signOut()}>Sign Out</Header.TextLink>
              </Header.Group>
            </Header.Dropdown>
          </Header.Profile>
        </Header.Group>
      </Header.Frame>
      <Header.Feature>
        <Header.Callout>Watch Joker Now</Header.Callout>
        <Header.Text>
          Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
          City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
          futile attempt to feel like he's part of the world around him.
        </Header.Text>
        {/* <Header.PlayButton>Play</Header.PlayButton>  */}
        <Card.AlignSide>
        <Player>
          <Player.Button />
          <Player.Video src="/videos/joker.mp4" />
        </Player>

        <Card.WatchList>My List</Card.WatchList>
        </Card.AlignSide>
      </Header.Feature>
      </Header>
      <div className ="row">
      <h2 className="poster_title">Continue Watching</h2>
        <div className ="row_posters_frame">
          {content.map((movie) => (
            <img 
            key={movie.id}
            className="row_poster" 
            src={`/images/films/${movie.genre}/${movie.slug}/small.jpg`} 
            alt={movie.title}></img>
          ))}
        </div>
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
              <Player>
                <Player.Button onClick={() =>{
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
                }} />
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