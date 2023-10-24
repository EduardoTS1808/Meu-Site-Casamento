import React, {useState} from "react";
import './style.css'

import Form from "../Form/Form";
import MyButtonPresentiar from "../ButtonPresentiar/MyButton";

const Carrinho = ( {dados , atualiza}) => {
    
    const count = dados.length;
    let quantidade;
    if(count > 0){
        const noun = count > 1 ? "itens" : "item";
        quantidade = count +  ' ' + noun;
    }
    const [valorInput, setValorInput] = useState({
        name: '',
        phone: '',
    });
    let namePresente = [];
    const titlePresent = (dados)=>{
        dados.forEach(( nome)=>{
            namePresente.push(nome.title)
            console.log(nome.title)})
        }
        const handleReload = () => {
            alert("Muito obrigado, estamos ansiosos pela sua presença!")
            window.scrollTo({top:0, behavior: "auto"});
            window.location.reload();
        };
        
        
        
        const limpaCarrim = ({dados})=>{
            atualiza(dados)
        }
        
   
        
        function onSubmit(event) {
            event.preventDefault()
            titlePresent(dados) ;
            fetch('https://api.sheetmonkey.io/form/e3Cb86mZekusHup5r5bA2H', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify( {nome:valorInput.name, telefone:valorInput.phone, presente:namePresente})
        }).then(handleReload)
        
    }
    
    return (
        < div  className="contentCarrinho">
        
        <div className="titleCarrinho">
        
        <h2>Confira o seu Presente  {quantidade}  </h2>
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
            <MyButtonPresentiar  onClick={onSubmit}  textoButton={"Confirmar"}/>
            <MyButtonPresentiar onClick={ limpaCarrim} textoButton={"Limpar"} />
            </div>
            </div>
            );
            
        };
        
        
        
        export default  Carrinho 
        
        
        