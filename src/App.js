import './App.css';
// import Header from './Header';
// import FirstHundredPokemons from './FirstHundredPokemons';
// import AllPokemonTypes from './AllPokemonTypes';
// import PokemonsByType from './PokemonsByType';
// import PokemonsTeam from './PokemonsTeam';
// import PokemonByGeneration from './PokemonByGeneration';
// import SearchPokemon from './SearchPokemon';
// import SelectPokemonsByType from './SelectPokemonByType'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AllPokemonTypesPage from "./pages/AllPokemonTypesPage"
import SelectPokemonByTypePage from "./pages/SelectPokemonByTypePage";
import SearchPokemonPage from "./pages/SearchPokemonPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/search-pokemon' element={<SearchPokemonPage />}/>
          <Route path='/select-type' element={<SelectPokemonByTypePage />}/>
          <Route path='/all-types' element={<AllPokemonTypesPage />}/>
        </Routes>
      </BrowserRouter >

      {/* 
      <PokemonsByType type = {"Eau"}/>
      <PokemonsByType type = {"Feu"}/>
      <PokemonsByType type = {"Plante"}/>
      <PokemonsTeam/>
      <PokemonByGeneration generation = {"1"}/>
      <PokemonByGeneration generation = {"2"}/>
      <PokemonByGeneration generation = {"3"}/> */}

    </>
  );
}

export default App;


