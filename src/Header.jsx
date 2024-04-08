import logo from './logo.png';

const Header = () => {

    return (
    <header className='App-header'>
            <img src={logo} alt="logo" width = "300"/>
            <nav>
                <ul>
                    <li><a href="#firstHundredPokemon-title">100 premiers pokémons</a></li>
                    <li><a href="#allPokemonTypes-title">Les types</a></li>
                    <li><a href="#pokemonsWater-title">Pokémons feu</a></li>
                    <li><a href="pokemonsFire-title">Pokémons eau</a></li>
                    <li><a href="pokemonsGrass-title">Pokémons plante</a></li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;