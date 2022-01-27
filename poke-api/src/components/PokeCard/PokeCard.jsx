import React, {useEffect, useState} from "react";
import { PokeDesc } from "./PokeDesc/PokeDesc";

export function PokeCard({id}){

    const [pokemon,setPokemon]=useState({name:null, abilities: null, sprite:null});

    const url= "https://pokeapi.co/api/v2/pokemon/"+id;

    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data)=>{      
            const pokemonName= data.name.charAt(0).toUpperCase() +  data.name.slice(1); 
            const pokemonSprite=data.sprites.front_default;   
            //const pokemonAbilities= data.abilities.reduce( (prev,current) =>prev+current.ability.name+"-","")           
            const pokemonAbilities= data.abilities;
            setPokemon({name:pokemonName, abilities:pokemonAbilities, sprite:pokemonSprite});
    })},[id])

    

    return(
        <div className="Marco">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprite} alt={pokemon.name} />        
            <PokeDesc abilities={pokemon.abilities}/>
        </div>        
    );
}