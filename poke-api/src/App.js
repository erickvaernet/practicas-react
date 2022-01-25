import React, {useState} from "react";
import pokeball from './assets/ico/pokeball.png';
import { ButtonStd } from "./components/button/ButtonStd";
import { PokeCard } from "./components/PokeCard/PokeCard";



function App(){
  const getRandomID=()=>(Math.floor(Math.random() * (249 - 1)) + 1);
  const [id, setId]=useState(getRandomID())
  
  const handleID=()=>{
    const newId= getRandomID();
    console.log(newId)
    setId(newId)
  }
  

  return (
  <React.Fragment>
    <PokeCard id={id}/>
    <ButtonStd src={pokeball} alt="pokeball" handleID={handleID}/>
  </React.Fragment>
  );
}

export default App;
