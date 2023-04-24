import './App.css';
import { Counter } from './pages/counter/counter';

const App = () => {
  const currentTime = new Date();
  console.log(currentTime.getTime(), 'currentTime');
  return (
    <div className="App">
      <Counter></Counter>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default App;
