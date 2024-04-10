import logo from '../logo.png';

const Header = () => {

    return (
    <header className='App-header'>
            <img src={logo} alt="logo" width = "300"/>
            <nav>
                <ul>
                    <li><a href="http://localhost:3000/">Accueil</a></li>
                    <li><a href="http://localhost:3000/search-pokemon">Chercher Pokémon</a></li>
                    <li><a href="http://localhost:3000/select-type">Chercher type</a></li>
                    <li><a href="http://localhost:3000/all-types">Types</a></li>
                    <li><a href="http://localhost:3000/all-generations">Générations</a></li>
                    <li><a href="http://localhost:3000/team">Team</a></li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;