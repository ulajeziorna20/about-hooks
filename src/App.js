import logo from './logo.svg';
import './App.css';
import Example from './Example';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Example />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
