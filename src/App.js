import './css/index.css';
import {Header} from './components/Header';
import {Post} from './components/Posts';
function App() {
  return (
    <div className="App">
      <Header/>
      <div id='app-container'>
      <Post/>  
      </div>
    </div>
  );
}

export default App;
