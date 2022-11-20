import React, { useEffect, useState } from "react";
import './css/index.css';
import {Header} from './components/Header';
import {Post} from './components/Posts';
function App() {

  const [posts, setPosts] = useState([
    {
    username: "emkataumre",
    caption:"new post",
    imageUrl: "https://assets1.ignimgs.com/2018/06/21/hollowknight-1280-1529623462572_160w.jpg?width=1280"
    },

    {
    username: "rogachevumre",
    caption: "picture",
    imageUrl: "https://d1fdloi71mui9q.cloudfront.net/6C9NH1a2Q42IPPPd7iSm_0UmAJ3pr4APt97Gg"
    }
  ]);
  return (
    <div className="App">
      <Header/>
      <div id='app-container'>
      {
        // This piece of code will look at the array of currently 2 objects and loop through it.
        // On the first loop it will render the values (previous props in <Post/>) of the first object and on the second loop
        // it will render the values of the second object and so on and so forth depending on how many objects are there. 
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      </div>
    </div>
  );
}

export default App;
