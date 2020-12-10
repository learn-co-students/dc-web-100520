
//Components
import Navbar from './Navbar'
import Post from './Post'


const sayHi = () => {
  console.log("saying");
}

function App() {
  return (
      <>
        <Navbar/>
        <div className="container">
          <div className="card-deck">
            <Post  />
       
          </div>
        </div>
      </>
  );
}

export default App;

