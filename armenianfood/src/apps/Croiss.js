import React from "react";
import "../styles/imag.css"
import croiss from "../images/butter-croissant.jpg"

function Croiss(){
    return(
        <div className="imagcontainer">
            <img src={croiss} className="imag"/>
        </div>
    )
}

export default Croiss;