import React, { useContext ,useState,useEffect} from 'react';
import { SelectProfileContainer } from './profiles';
import {FirebaseContext} from '../context/firebase';
import {Loading} from '../components';

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
      loading ?(
        <Loading src ={user.photoURL}/>
      ) : <Loading.ReleaseBody />
    ):(
      <SelectProfileContainer user ={user} setProfile ={setProfile}></SelectProfileContainer>
    )
}