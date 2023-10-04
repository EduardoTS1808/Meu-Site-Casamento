import React, { useState } from "react";



function Exemplo() {

    
    const [itens, setItens] = useState([]);
  
    const adicionarItem = (item) => {
      setItens([...itens, item]);
    };
  
    return (
      <div>
        <button onClick={() => adicionarItem()}>
          Adicionar Item
        </button>
        <ul>
          {itens.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  

export default Exemplo;

