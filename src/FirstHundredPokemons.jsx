import { useState } from 'react';

const FirstHundredPokemons = () => {

    const[pokemons, setPokemon] = useState(null);

    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setPokemon(data)
    });

    return (
        <section>
            <h2>Les 100 premiers pokémons</h2>
            {   !pokemons ? <p>Pokémons en cours de chargement</p> :
                pokemons.map((pokemon) => {
                    return (
                        <article>
                            <img src = {pokemon.image} alt="image du pokemon" />
                            <p>Name: {pokemon.name}</p>
                            <p>Type: {pokemon.apiTypes[0].name}</p>
                            <p>HP: {pokemon.stats.HP}</p>
                            <p>defense: {pokemon.stats.attack}</p>
                            <p>special attack: {pokemon.stats.defense}</p>
                            <p>special attack: {pokemon.stats.special_attack}</p>
                            <p>special defense: {pokemon.stats.special_defense}</p>
                            <p>speed: {pokemon.stats.speed}</p>
                            
                        </article>
                    );
                })
            }   
        </section>

    );
};

export default FirstHundredPokemons;