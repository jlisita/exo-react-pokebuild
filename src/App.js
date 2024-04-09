import './App.css';
import Header from './Header';
import FirstHundredPokemons from './FirstHundredPokemons';
import AllPokemonTypes from './AllPokemonTypes';
import PokemonsByType from './PokemonsByType';
import PokemonsTeam from './PokemonsTeam';
import PokemonByGeneration from './PokemonByGeneration';
import SearchPokemon from './SearchPokemon';
import SelectPokemonsByType from './SelectPokemonByType'


function App() {
  return (
    <div className="App">
      <Header/>
      <SearchPokemon/>
      <SelectPokemonsByType/>
      {/* <FirstHundredPokemons/>
      <AllPokemonTypes/>
      <PokemonsByType type = {"Eau"}/>
      <PokemonsByType type = {"Feu"}/>
      <PokemonsByType type = {"Plante"}/>
      <PokemonsTeam/>
      <PokemonByGeneration generation = {"1"}/>
      <PokemonByGeneration generation = {"2"}/>
      <PokemonByGeneration generation = {"3"}/> */}
  

    </div>
  );
}

export default App;
