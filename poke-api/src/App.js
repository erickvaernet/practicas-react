import React, {useState} from "react";
import pokeball from './assets/ico/pokeball.png';
import { ButtonStd } from "./components/button/ButtonStd";
import { PokeCard } from "./components/PokeCard/PokeCard";
import "./styles.css"



function App(){
  const getRandomID=()=>(Math.floor(Math.random() * (249 - 1)) + 1);
  const [id, setId]=useState(getRandomID())
  
  const handleID=()=>{
    const newId= getRandomID();  
    setId(newId)
  }
  

  return (
  <React.Fragment>
    <div className="main">
    <PokeCard id={id}/>
    <ButtonStd src={pokeball} alt="pokeball" handleID={handleID}/>
    </div>
    
  </React.Fragment>
  );
}

export default App;
