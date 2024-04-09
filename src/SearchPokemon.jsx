import { useState } from 'react';

const SearchPokemon = () => {

    const[pokemon, setPokemon] = useState(null);

    const handlePokemonSearch = (event) => {
        event.preventDefault();
        let pokemonName = event.target.pokemonName.value;
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonName)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        setPokemon(data)
        console.log(pokemon);
    });
    };

    return (
        <section>
            <h2>Chercher un Pokémon</h2>
            <form action="" onSubmit = {handlePokemonSearch}>
                {/* <label htmlFor="pokemonName">Saisir le nom d'un pokemon: </label> */}
                <input type = "text" name = "pokemonName" id = "pokemonName"/>
                <input type="submit"/>
            </form>
            {      
             !pokemon ? <p>Pokémon en cours de rechargement</p> :   
             <article>
                <img src = {pokemon.image} alt="image du pokemon" />
                <p>Name: {pokemon.name}</p>
                <p>Type: {pokemon.apiTypes[(pokemon.apiTypes.length)-1].name}</p>
                <p>HP: {pokemon.stats.HP}</p>
                <p>defense: {pokemon.stats.attack}</p>
                <p>special attack: {pokemon.stats.defense}</p>
                <p>special attack: {pokemon.stats.special_attack}</p>
                <p>special defense: {pokemon.stats.special_defense}</p>
                <p>speed: {pokemon.stats.speed}</p>
             </article>                  
            }   
        </section>
    );
};

export default SearchPokemon;