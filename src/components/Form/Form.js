import React from "react";
import { IMaskInput} from 'react-imask';

 export default function Form ({valorInput, setValorInput}){
    const FormStyle = {
        display: "block",
        padding: "10px",
        
    }
    const input = {
        padding: "10px",
        margin: "8px",
        width: "100%",
        border: "2px solid #f1f1f1",
        borderRadius: "10px",
        fontSize: "15px"
    }

    const label = {
        display: "flex",
        padding: " 0 17px",
        fontSize: "15px"
    }

    
  
    const handleInputChange = (e) => {
      setValorInput({
        ...valorInput,
        name: e.target.value
      });
    }
    const handleInputChange2 = (e) => {
      setValorInput({
        ...valorInput,
        phone: e.target.value
      });

    }

 


    return(
      <form  style={FormStyle} >
          
            
            <label style={label}>Digite seu nome</label>
            <input 
            name="nome" 
            style={input} 
            required="true"
             type="text"
              value={valorInput.name}
               onChange={handleInputChange}
                placeholder="Digite seu nome"/>
            <label style={label}>Digite seu telefone para contato</label>
            <IMaskInput
              name="telefone" 
              style={input}
               required="true"
                
                value={valorInput.phone}
                 onChange={handleInputChange2}
                 mask="(00) 0 0000-0000"
                  placeholder="digite seu telefone"
                  />
                 
          </form>
    )
}



