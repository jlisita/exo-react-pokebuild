import './App.css';
import Header from './Header';
import FirstHundredPokemons from './FirstHundredPokemons';
import AllPokemonTypes from './AllPokemonTypes';
import PokemonsByType from './PokemonsByType';
import PokemonsTeam from './PokemonsTeam';

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstHundredPokemons/>
      <AllPokemonTypes/>
      <PokemonsByType type = {"Eau"}/>
      <PokemonsByType type = {"Feu"}/>
      <PokemonsByType type = {"Plante"}/>
      <PokemonsTeam/>

    </div>
  );
}

export default App;
