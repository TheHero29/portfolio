import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Skills from './Components/Skills/Skills';
// import Projects from './components/Projects';
// import ContactMe from './components/ContactMe';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <h1>LT</h1>
//       <NavBar />
//       </header> */}
      
//       {/* <footer className='App-footer'>
//         <h3>Made with ❤️ by Loukik</h3>
//       </footer> */}
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/skills" element={<Skills/>} />
          {/* <Route path="/projects" component={Projects} />
          <Route path="/contact" component={ContactMe} /> */}
          </Routes>
      </div>
    </Router>
  );
}


export default App;
