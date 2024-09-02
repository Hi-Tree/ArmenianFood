import React from "react";
import Header from "./apps/Header";
import Gata from "./apps/Gata";
import Raisnbread from "./apps/Raisnbread";
import "./styles/indexv.css"
import Croiss from "./apps/Croiss";
import Cookie from "./apps/Cookie";

function App(){
  return(
    <div>
      <Header />
      <div className="main">
        <div className="left">
          <Gata />
        </div>
        <div className="right">
          <Raisnbread />
        </div>   
        <div className="left">
          <Croiss />
        </div>
        <div className="right"> 
          <Cookie />
        </div>
      </div>
      
    </div>
    
  )
}

export default App;