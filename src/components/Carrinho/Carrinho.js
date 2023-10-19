import React, {useState} from "react";
import './style.css'

import Form from "../Form/Form";
import MyButtonPresentiar from "../ButtonPresentiar/MyButton";

const Carrinho = ( {dados}) => {
    const count = dados.length;
    let title;
    if(count > 0){
        const noun = count > 1 ? "itens" : "item";
        title = count +  ' ' + noun;
    }
    const [valorInput, setValorInput] = useState({
        name: '',
        phone: '',
    });

    // console.log(dados)
    // console.log(valorInput.name, valorInput.phone, dados);
    const dadosFinais = []
    console.log(JSON.stringify(dados))
    JSON.stringify(dados)
    dadosFinais.push(valorInput.name, valorInput.phone, dados.entries(title));
    console.log(dadosFinais);
        


    return (
        < div  className="contentCarrinho">
        
        <div className="titleCarrinho">

            <h2>Confira o seu Presente ( {count} ) </h2>
        </div>
        <div className="carrinho" >
        {dados.map((image) => (
            <>
            <div className="cardCarrinho">
            <img key={image.id} src={image.src} alt="Imagem" className="imageCarrinho" />
            <p>{image.title}</p>
            
         
            </div>
            
            </>
            ))}
            </div>
           <Form valorInput={valorInput}  setValorInput={setValorInput} />
          <div className="botoes">
            {/* <input type="submit" value={"enviar"}/> */}
          <MyButtonPresentiar  textoButton={"Confirmar"}/>
           <MyButtonPresentiar  textoButton={"Limpar"} />
          </div>
            </div>
            );
          
        };
        
        
        
        export default  Carrinho 
        
  
        