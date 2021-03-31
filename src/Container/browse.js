import React, { useContext ,useState,useEffect} from 'react';
import { SelectProfileContainer } from './profiles';
import {FirebaseContext} from '../context/firebase';
import {Loading , Header} from '../components';
import * as ROUTES from '../Routes_System/routes';
import logo from '../BingeBoxLogo.png';

export function BrowseContainer({slides}){
    const [profile,setProfile] = useState({});
    const [loading,setLoading] = useState(true);
    const [category, setCategory] = useState('series');
  
    const {firebase} =useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, [profile.displayName]);
    
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
                <Header.TextLink>Series</Header.TextLink>
                <Header.TextLink>Films</Header.TextLink>
        </Header.Group>
      </Header.Frame>
      <Header.Feature>
        <Header.Callout>Watch Joker Now</Header.Callout>
        <Header.Text>
          Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
          City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
          futile attempt to feel like he's part of the world around him.
        </Header.Text>
      </Header.Feature>
      </Header>
      </>
    ):(
      <SelectProfileContainer user ={user} setProfile ={setProfile}></SelectProfileContainer>
    )
}