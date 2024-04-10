import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AllPokemonTypesPage from "./pages/AllPokemonTypesPage"
import SelectPokemonByTypePage from "./pages/SelectPokemonByTypePage";
import SearchPokemonPage from "./pages/SearchPokemonPage";
import PokemonByGenerationPage from './pages/PokemonByGenerationPage';
import PokemonsTeamPage from './pages/PokemonsTeamPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/search-pokemon' element={<SearchPokemonPage />}/>
          <Route path='/select-type' element={<SelectPokemonByTypePage />}/>
          <Route path='/all-types' element={<AllPokemonTypesPage />}/>
          <Route path='/all-generations' element={<PokemonByGenerationPage />}/>
          <Route path='/team' element={<PokemonsTeamPage />}/>
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;


