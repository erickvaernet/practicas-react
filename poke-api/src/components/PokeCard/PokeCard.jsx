import React, {useEffect, useState} from "react";


export function PokeCard({id}){

    const [pokemon,setPokemon]=useState({name:null, abilities: null, sprite:null});

    const url= "https://pokeapi.co/api/v2/pokemon/"+id;

    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data)=>{      
            const pokemonName=data.name;
            const pokemonSprite=data.sprites.front_default;   
            const pokemonAbilities= data.abilities.reduce( (prev,current) =>prev+current.ability.name+"-","");            
            setPokemon({name:pokemonName, abilities:pokemonAbilities, sprite:pokemonSprite});
        })
    })

    

    return(
        <div className="Marco">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprite} alt={pokemon.name} />
            <p>{pokemon.abilities}</p>
        </div>        
    );
}