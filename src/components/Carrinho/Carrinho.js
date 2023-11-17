import React, {useState} from "react";
import './style.css'

import Form from "../Form/Form";
import MyButtonPresentiar from "../ButtonPresentiar/MyButton";
import Image from '../carregar/imageCarregando'

const Carrinho = ( {dados , atualiza}) => {
    // chamar esse valor nos parametros acima ', remover'
   const reloading = async () =>{
   window.location.reload();
}
 

    const count = dados.length;
    let quantidade;
    if(count > 0){
        const noun = count > 1 ? "itens" : "item";
        quantidade = count +  ' ' + noun;
    }
    console.log(quantidade  )

    const [valorInput, setValorInput] = useState({
        name: '',
        phone: '',
    });
    // console.log(valorInput.name,valorInput.phone);
    const [showcomponent, setShowcomponent] = useState(false)
    let namePresente = [];

         const titlePresent = (dados)=>{
        dados.forEach(( nome)=>{
            namePresente.push(nome.title)})
        }
       const handleReload = () => {
                carregado();
                alert("Muito obrigado, estamos ansiosos pela sua presença!")
                window.scrollTo({top:0, behavior: "auto"});

                reloading();

        const limpaCarrim = ({dados})=>{
            atualiza(dados)
             
          
        }
        const reload = async () =>{
            window.location.reload()
        }
      const carregando = () =>{
       setShowcomponent(true)
      }
      function carregado() {
       setShowcomponent(false)
      }
      
      //envio  do nome, telefone e o nome do presente para a planilha.
      
      function onSubmit(event) {
          event.preventDefault()
                    carregando();
                    limpaCarrim({dados});
                    titlePresent(dados) ;
                    
                   
                    fetch('https://api.sheetmonkey.io/form/e3Cb86mZekusHup5r5bA2H', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify( {nome:valorInput.name, telefone:valorInput.phone, presente:namePresente})
                }).then( handleReload )
                
            }
    
    return (
        < div  className="contentCarrinho">
        
        <div className="titleCarrinho">
        
        <h2>Confira o seu Presente  {quantidade}  </h2>
        </div>
        <div className="carrinho" >
        {dados.map((image) => (
            <>
            {}
            <div className="cardCarrinho">
            <img key={image.id} src={image.src} alt="Imagem" className="imageCarrinho" />
            <p>{image.title} </p>
            </div>
            </>
            ))}
            </div>
           {showcomponent && <Image/>}
            <Form valorInput={valorInput}  setValorInput={setValorInput} />
            <div className="botoes">
           {(valorInput.name === "" || valorInput.phone === "" || quantidade === undefined) ? (<MyButtonPresentiar  onClick={() => alert(" Preencha os campos vazios")}  textoButton={"Confirmar"}/>) :  (  <MyButtonPresentiar  onClick={onSubmit}  textoButton={"Confirmar"}/>) }
           

           
            <MyButtonPresentiar onClick={ limpaCarrim} textoButton={"Limpar"} />
            </div>
            </div>
            );
            
        };
        
        
        
        
    }
    export default  Carrinho 
        