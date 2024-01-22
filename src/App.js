import React from 'react';
import './App.css';
import Home from './pages/Home/home'
import About from './pages/About/about'
import ListaP from './pages/ListaP/Lista'
import Footer from './components/Footer/Footer';





function App() {




  return (
    <div className="App">
      
      <Home/>
      <About/>
      <ListaP/>
      <Footer/>
    </div>
  );
}

export default App;
