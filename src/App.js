
import './App.css';
import Timer from './Components/Timer';


function App() {
  return (
    <div className="App">
      <Timer start={1} end={15}/>
    </div>
  );
}

export default App;
