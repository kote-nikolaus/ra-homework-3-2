import './App.css';
import Listing from './components/Listing';
import data from "./data";

function App() {
  return (
    <Listing data={data}/>
  );
}

export default App;
