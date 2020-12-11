
//Components
import Navbar from './Navbar'
import PostContainer from './PostContainer'

function App() {
  return (
      <div className="bg-dark">
        <Navbar/>
        <div className="mt-4">
          <PostContainer />
        </div>
      </div>
  );
}

export default App;

