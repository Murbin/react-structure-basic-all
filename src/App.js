import './App.css';
import CounterClassic from './redux/CounterClassic';
import CounterModern from './redux/CounterModern';

function App() {
  return (
    <div className="App">
     <CounterClassic />
     <CounterModern />
    </div>
  );
}

export default App;
