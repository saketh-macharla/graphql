import './App.css';
import axios from "axios";
function App() {


  const getUser = () =>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((data) =>{
      console.log(data);
    } )
  }
  
  return (
    <div className="App">
      <h1>Logging the Interceptor</h1>
      <div> <button onClick={getUser}>Click here to fetch </button></div>
    </div>
  );
}

export default App;