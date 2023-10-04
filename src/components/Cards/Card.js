import React from "react";
// import MyButton from "../ButtonPresentiar/MyButton";
function Card({objeto},{onClick}){
      const  CardStyle = {
            display: "block",
            border: "3px solid #000",
            margin:"15px "
      }
      const Image ={
            margin:"15px ",
            height:" 100px",
            width: "170px",
            border:"3px solid #f00",
            backgroundColor:" #f1f1f1",
            objectFit:" contain",
      }
      function addPresente(objeto){
              console.log('clickou botão')
            //   console.log(Object.entries(objeto));
      }




    return (
          <div style={CardStyle} >
        <img style={Image} key={objeto.id} src={objeto.src} alt="Imagem" />
        <p>{objeto.title}</p>
         {/* <MyButton  onClick={onClick} textoButton={"Presentear"}/>   */}

        </div>
    )
}
export default Card


// AQUI EU QUERO CRIAR UM COMPONENT REUTILIZÁVEL 


// ENTENDER COMO TRABALHAR COM DAS EXTERNOS DE OBJETOS SE FOR PRECISO.