import logo from './logo.svg';
import './App.css';
import Example from './Example';
import ExampleWithManyStates from './Example';
import ExampleUseEffect from './HookOfEffects';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Example /> */}
        {/* <ExampleWithManyStates /> */}
        <ExampleUseEffect />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
