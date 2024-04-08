import { useState } from 'react';

const AllPokemonTypes = () => {

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
            <h2>Les types de pokémons</h2>
            {!pokemons ? <p>Types en cours de chargement</p> :
            pokemons[0].apiResistances.map( (element) => {
                return <p>{element.name}</p> 
            })
            }
        </section>
    );
};

export default AllPokemonTypes;