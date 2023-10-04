import React from "react";
function MyButtonPresentiar({onClick, textoButton}) {
    const myStyle = {
        color: "#fff",
        borderRadius: "10px 0px",
        background:" #712609",
        padding: "10px",
        border: "none",
   
      };

    return (
        <button style={myStyle} onClick={onClick}> {textoButton}</button>
    )
}
export default MyButtonPresentiar;