import './App.css';
import KeycloakApp from './KeycloakApp';
import { Counter } from './pages/counter/counter';

const App = () => {
  return (
    <div className="App">
      <KeycloakApp></KeycloakApp>
      <Counter></Counter>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default App;
