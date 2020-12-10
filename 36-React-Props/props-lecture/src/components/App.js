import commentData from '../data/comments'

//Components
import Navbar from './Navbar'
import Post from './Post'




function App() {
  console.log(commentData);

  return (
      <>
        <Navbar />
        <div className="container">
          <div className="card-deck">
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </>
  );
}

export default App;

