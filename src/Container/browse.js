import React, { useContext ,useState,useEffect} from 'react';
import { SelectProfileContainer } from './profiles';
import {FirebaseContext} from '../context/firebase';
import {Loading , Header,Card,Player} from '../components';
import * as ROUTES from '../Routes_System/routes';
import logo from '../BingeBoxLogo.png';
import {FooterContainer} from '../Container/footer';

export function BrowseContainer({slides}){

    const [profile,setProfile] = useState({});
    const [category, setCategory] = useState('series');
    const [loading,setLoading] = useState(true);
    //const [category, setCategory] = useState('series');
    const [searchTerm, setsearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);

    const {firebase} =useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, [profile.displayName]);

      useEffect(() => {
        setSlideRows(slides[category]);
      }, [slides, category]);
    
      console.log(user.photoURL);
    return profile.displayName ?(
      <>
      {
      loading ?(
        <Loading src ={user.photoURL}/>
      ) :<Loading.ReleaseBody />}
      <Header src="joker1">
      <Header.Frame>
        <Header.Group>
                <Header.Logo imageLink={ROUTES.HOME} src={logo} alt="Bing Box" />
                <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>
              Series
            </Header.TextLink>
            <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
              Films
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
        <Player>
          <Player.Button />
          <Player.Video src="/videos/joker.mp4" />
        </Player>
      </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) =>(
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item)=>(
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category ={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
      </>
    ):(
      <SelectProfileContainer user ={user} setProfile ={setProfile}></SelectProfileContainer>
    )
}