import { useEffect, useState } from 'react';

const SelectPokemonsByType = () => {

    const[types, setTypes] = useState(null);
    
    useEffect (() => {
        fetch("https://pokebuildapi.fr/api/v1/types")
        .then((response) => {
        return response.json();
        })
        .then((data) => {
            setTypes(data)
        });
    }, [])


    const[pokemons, setPokemons] = useState(null);

    const handleSubmit = (event) => {

        event.preventDefault();
        setPokemons(null)
        const type = event.target.value;
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
            {!types ? <p>Types en cours de chargement</p> :
            <form>
                <select onChange = {handleSubmit} name="type" id="type">
                    {types.map((type) => {
                        return (
                            <option value = {type.name}> {type.name}</option>                  
                        )
                    }
                )}
                </select>
            </form>
            }
        
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