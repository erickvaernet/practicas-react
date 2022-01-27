import React,{useEffect, useState}from "react";
import { Item } from "./Item";
import { v4 as uuidv4 } from 'uuid';

export function PokeDesc({abilities}){

    if(abilities==null) return<li></li>
    return (
        <ul>
             {abilities.map((a)=><Item key={uuidv4()} ability={a.ability.name}/>)}
        </ul>
    );
}