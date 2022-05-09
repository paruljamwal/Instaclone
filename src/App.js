
import './App.css';
import { Header } from './Components/Header/Header';
import { Post } from './Components/Post/Post';
import { useEffect, useState } from 'react';
import firebase from 'firebase';
import {db} from './firebase'
function App() {
  //state means how you store variable in react
  const [posts,setPosts]=useState([]);


  //useeffects runs a code for any specific condition
//onsnapshot listner----every time doc. change modified
  useEffect(()=>{
   db.collection('posts').onSnapshot(snapshot=>{
    setPosts(snapshot.docs.map(doc=>doc.data()));
   })
  
  
  },[])
  return (
    <div className="App">
     <Header></Header>
     {
       posts.map(post=>(
        <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}></Post>
  
        ))
     }
  
    </div>
  );
}

export default App;
