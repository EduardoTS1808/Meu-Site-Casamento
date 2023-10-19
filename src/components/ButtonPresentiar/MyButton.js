import React from "react";
function MyButtonPresentiar({onClick, textoButton}) {
    const myStyle = {
        width: "fit-content",
        margin: "auto",
        color: "#fff",
        borderRadius: "1rem 0",
        background:" #712609",
        padding: "1rem",
        border: "none",
        fontSize: "1.2rem",
   
      };

    return (
        <button style={myStyle} onClick={onClick}> {textoButton}</button>
    )
}
export default MyButtonPresentiar;