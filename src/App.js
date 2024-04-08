import './App.css';
import '../src/css/style.css';
import Header from './components/Header';
import { SliderFirst } from './components/SliderFirst';
import Comp1 from './components/Comp1';
import Favorites from './components/Favorites';
import Brandcramps from './components/Brandcramps';



function App() {
  return (
    <div className="App">
      <Header/>
      <SliderFirst />
      <Comp1 />
      <Favorites />
      <Brandcramps />
    </div>
  );
}

export default App;
