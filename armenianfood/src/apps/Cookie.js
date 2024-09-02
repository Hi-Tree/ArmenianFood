import React from "react";
import "../styles/imag.css"
import cookie from "../images/cookies.jpg"

function Cookie(){
    return(
        <div>
            <div className="imagcontainer">
                <img src={cookie} className="imag"/>
                <div className="disp">HELLO</div>
            </div>
            
        </div>
        
    )

}

export default Cookie;