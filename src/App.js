import React, { useEffect, useState } from "react";
import './css/index.css';
import {Header} from './components/Header';
import {Post} from './components/Posts';
import {db} from './firebase';
function App() {
  useEffect(() => {
  db.collection('posts') //'posts' here refers to my collection on firebase that is called 'posts'
  .onSnapshot(snapshot => {
    setPosts(snapshot.docs.map(doc => ({
      id: doc.id,
      post: doc.data()})));
  }) //onSnapshot will fire every time a change happens in the 'posts' collection
  
  }, []); //Currently runs once on refresh

const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <Header/>
      <div id='app-container'>
      {
        // This piece of code will look at the array of currently 2 objects and loop through it.
        // On the first loop it will render the values (previous props in <Post/>) of the first object and on the second loop
        // it will render the values of the second object and so on and so forth depending on how many objects are there. 
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      </div>
    </div>
  );
}

export default App;

//1:26 