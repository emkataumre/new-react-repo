import './css/index.css';
import {Header} from './components/Header';
import {Post} from './components/Posts';
function App() {
  return (
    <div className="App">
      <Header/>
      <div id='app-container'>
      <Post username="emkataumre" caption="new post" imageUrl="https://assets1.ignimgs.com/2018/06/21/hollowknight-1280-1529623462572_160w.jpg?width=1280"/>  
      <Post username="rogachevumre" caption="picture" imageUrl="https://d1fdloi71mui9q.cloudfront.net/6C9NH1a2Q42IPPPd7iSm_0UmAJ3pr4APt97Gg"/>  
      {/* The props above will be referenced in Post() in Posts.js and later be hooked to the database, instead of being hardcoded */}
      </div>
    </div>
  );
}

export default App;
