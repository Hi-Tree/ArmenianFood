import React from "react";
import gata from "../images/gata.jpeg"
import "../styles/imag.css"

function Gata(){
    return(
        <div className="imagcontainer">
            <img src={gata} className="imag"/>
        </div>
    )
}

export default Gata;