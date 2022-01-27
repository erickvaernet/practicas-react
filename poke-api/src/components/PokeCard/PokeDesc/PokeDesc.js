import React,{useEffect, useState}from "react";
import { Item } from "./Item";

export function PokeDesc({abilities}){

    if(abilities==null) return<li></li>
    return (
        <ul>
             {abilities.map((a)=><Item ability={a.ability.name}/>)}
        </ul>
    );
}