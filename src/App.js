import logo from './logo.svg';
import './App.css';

function App() {
  var name = 'Nahid';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>
        <Person> </Person>
        </span>
      </header>
    </div>
  );
}
function Person() {
return <h1>Welcome to React World</h1>
}
export default App;
