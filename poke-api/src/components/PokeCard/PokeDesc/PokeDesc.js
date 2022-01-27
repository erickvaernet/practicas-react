import React,{useEffect, useState}from "react";
import { Item } from "./Item";
import { v4 as uuidv4 } from 'uuid';

export function PokeDesc({abilities}){

    if(abilities==null) return<li></li>
    return (
        <div className="marco-desc">
        <h3>Abilities:</h3>
        <ul >
             {abilities.map((a)=><Item key={uuidv4()} ability={a.ability.name}/>)}
        </ul>
        </div>
        
    );
}