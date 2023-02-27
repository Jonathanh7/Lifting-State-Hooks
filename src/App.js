import './App.css';
import fruitList from './components/Data';
import FruitContainer from './components/FruitContainer';



function App() {
  return (
    <div className="App">

      <FruitContainer fruits={fruitList} />
      
    </div>
  );
}

export default App;
