import { useEffect, useState } from 'react';

const PokemonsTeam = () => {

    const[team, setTeam] = useState(null);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/random/team")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            setTeam(data)
        });
    
    }, [])

    return (

        <section>
            <h2 id = "pokemons-team">Team</h2>
            {   !team ? <p>Team en cours de chargement</p> :
                team.map((pokemon) => {
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

export default PokemonsTeam;