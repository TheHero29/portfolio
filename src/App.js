import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Particle from './Components/Particles';

function App() {
  return (
    <div className="App">
      <Particle />
      <header className="App-header">
        <h1>Loukik Thatte</h1>
      <NavBar />
      </header>
      <Home />
      <footer className='App-footer'>
        <h3>Made with ❤️ by Loukik</h3>
      </footer>
    </div>
  );
}

export default App;
