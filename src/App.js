import './App.css';
import Header from './Header';
import FirstHundredPokemons from './FirstHundredPokemons';
import AllPokemonTypes from './AllPokemonTypes';
import PokemonsByType from './PokemonsByType';

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstHundredPokemons/>
      <AllPokemonTypes/>
      <PokemonsByType/>
    </div>
  );
}

export default App;
