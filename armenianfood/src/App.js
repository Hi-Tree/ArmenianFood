import Displays from './imageFN';
import Bakery from './bakery';
import './App.css';

function App() {
  return (
    <div>
      <div class="grid-container">
        <div class="grid-item">
          <Displays/>
        </div>
        <div class="grid-item">
          <Bakery/>
        </div>
      </div>
    </div>
  );
}

export default App;
