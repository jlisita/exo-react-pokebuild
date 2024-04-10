import { useEffect, useState } from 'react';

const SelectPokemonsByType = () => {

    const[pokemons, setPokemons] = useState(null);
    let type = "";

    const handleSubmit = (event) => {

        event.preventDefault();
        setPokemons(null)
        type = event.target.value;
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + type)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            setPokemons(data)
        });

    };

    return (
        <section>
            <h2> Selectionner un type de pokémon</h2>
            <form>
                <select onChange = {handleSubmit} name="type" id="type">
                    <option value="Feu">Type Feu</option>
                    <option value="Eau">Type Eau</option>
                    <option value="Plante">Type Plante</option>
                </select>
            </form>
        
            { !pokemons ? <p>Pokémons en cours de chargement</p> :
                pokemons.map((pokemon) => {
                    return (
                        <article key = {pokemon.id}>
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

export default SelectPokemonsByType;