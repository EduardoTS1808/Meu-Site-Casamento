import React from 'react';
import './App.css';
import Home from './pages/Home/home'
import About from './pages/About/about'
import ListaP from './pages/ListaP/Lista'

// import api from './Api';




function App() {
  // const [registros, setRegistros] = useState([]);

// useEffect(() => {
//   api.get('/noticias')
//     .then((res) => {
//      console.log( res)
     
//     })
//     .catch((error) => {
//       console.error(error);
//     });

 
// }, []);
  return (
    <div className="App">
      {/* <div> {registros.map((date)=>{<p>{date}</p>})}</div> */}
      <Home/>
      <About/>
      <ListaP/>
    </div>
  );
}

export default App;
