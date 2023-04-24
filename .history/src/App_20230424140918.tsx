import reactLogo from './assets/icons/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Counter } from './pages/counter/counter';

const App = () => {
  const currentTime = new Date();
  console.log(currentTime.getTime(), 'currentTime');
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter></Counter>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default App;
