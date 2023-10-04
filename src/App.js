import './App.css';
import Header from './pages/Header/header'
import Home from './pages/Home/home'
import About from './pages/About/about'
import ListaP from './pages/ListaP/Lista'

function App() {

  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <ListaP/>
    </div>
  );
}

export default App;
