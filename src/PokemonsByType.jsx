import { useState } from 'react';

const PokemonsByType = () => {
    
    const[pokemonsEau, setPokemonEau] = useState(null);
    const[pokemonsFeu, setPokemonFeu] = useState(null);
    const[pokemonsPlante, setPokemonPlante] = useState(null);

    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Eau")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setPokemonEau(data)
    });
    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Feu")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setPokemonFeu(data)
    });
    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Plante")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setPokemonPlante(data)
    });

    return (
        <section>
            <h2>Pokémons par types</h2>
            <h3 id = "pokemonsWater-title">Pokémons eau</h3>
            {   !pokemonsEau ? <p>Pokémons en cours de chargement</p> :
                pokemonsEau.map((pokemon) => {
                    return (
                        <article>
                            <img src = {pokemon.image} alt="image du pokemon" />
                            <p>Name: {pokemon.name}</p>
                            <p>Type: {pokemon.apiTypes[(pokemon.apiTypes.length)-1].name}</p>
                            <p>HP: {pokemon.stats.HP}</p>
                            <p>defense: {pokemon.stats.attack}</p>
                            <p>special attack: {pokemon.stats.defense}</p>
                            <p>special attack: {pokemon.special_attack}</p>
                            <p>special defense: {pokemon.stats.special_defense}</p>
                            <p>speed: {pokemon.stats.speed}</p>
                        </article>
                 ) })
            }
            <h3 id = "pokemonsFire-title">Pokémons feu</h3>
            {   !pokemonsFeu ? <p>Pokémons en cours de chargement</p> :
                pokemonsFeu.map((pokemon) => {
                    return (
                        <article>
                            <img src = {pokemon.image} alt="image du pokemon" />
                            <p>Name: {pokemon.name}</p>
                            <p>Type: {pokemon.apiTypes[(pokemon.apiTypes.length)-1].name}</p>
                            <p>HP: {pokemon.stats.HP}</p>
                            <p>defense: {pokemon.stats.attack}</p>
                            <p>special attack: {pokemon.stats.defense}</p>
                            <p>special attack: {pokemon.special_attack}</p>
                            <p>special defense: {pokemon.stats.special_defense}</p>
                            <p>speed: {pokemon.stats.speed}</p>
                        </article>
                 ) })
            }
            <h3 id = "pokemonsGrass-title">Pokémons plante</h3>
            {   !pokemonsPlante ? <p>Pokémons en cours de chargement</p> :
                pokemonsPlante.map((pokemon) => {
                    return (
                        <article>
                            <img src = {pokemon.image} alt="image du pokemon" />
                            <p>Name: {pokemon.name}</p>
                            <p>Type: {pokemon.apiTypes[(pokemon.apiTypes.length)-1].name}</p>
                            <p>HP: {pokemon.stats.HP}</p>
                            <p>defense: {pokemon.stats.attack}</p>
                            <p>special attack: {pokemon.stats.defense}</p>
                            <p>special attack: {pokemon.special_attack}</p>
                            <p>special defense: {pokemon.stats.special_defense}</p>
                            <p>speed: {pokemon.stats.speed}</p>
                        </article>
                 ) })
            }
        </section>

    );
};

export default PokemonsByType;