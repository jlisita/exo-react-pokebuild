import { useState } from 'react';

const AllPokemonTypes = () => {

    const[types, setTypes] = useState(null);

    fetch("https://pokebuildapi.fr/api/v1/types")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setTypes(data)
    });

    return (
        <section>
            <h2 id = "allPokemonTypes-title">Les types de pokémons</h2>
            {!types ? <p>Types en cours de chargement</p> :
            types.map( (element) => {
                return (
                    <article>
                        <img src={element.image} alt="image du type" />
                        <p>{element.name}</p> 
                    </article>
                )
            })
            }
        </section>
    );
};

export default AllPokemonTypes;