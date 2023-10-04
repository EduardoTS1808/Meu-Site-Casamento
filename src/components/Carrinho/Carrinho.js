import React , {useState}    from "react";
import './style.css'

import MyButtonConfirmar from '../../components/ButtonPresentiar/MyButton'

const Carrinho =( {dados}) => {
    
    const count = dados.length;
    let title = <h1></h1>;
    let num =  <div>Lista vazia</div>
    if(count > 0){
        const noun = count > 1 ? "itens" : "item";
        title = count +  ' ' + noun;
    }
    
    
    
    const ConfirmarPresente = ()=>{
        alert("Somos muito gratos pelo presente!!!")
        
    }
  
    return (
        <div className="contentCarrinho">
        
        <div className="titleCarrinho">

            <h2>Confira o seu Presente, ( {count} ) </h2>
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
            <MyButtonConfirmar onClick={ConfirmarPresente} textoButton={"Confirmar"} />
            <MyButtonConfirmar textoButton={"Limpar"}/>
    
       

            
            
            
            
            
            </div>
            );
        };
        
        
        
        export default  Carrinho 
        
  
        