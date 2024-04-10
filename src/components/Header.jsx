import {Link} from "react-router-dom"
import logo from '../logo.png';

const Header = () => {

    return (
    <header className='App-header'>
            <img src={logo} alt="logo" width = "300"/>
            <nav>
                <ul> 
                    <Link to="/">Accueil</Link>
                    <Link to="/search-pokemon">Chercher Pokémon</Link>
                    <Link to="/select-type">Chercher type</Link>
                    <Link to="/all-types">Types</Link>
                    <Link to="/all-generations">Générations</Link>
                    <Link to="/team">Team</Link>
                </ul>
            </nav>
        </header>

    );
};

export default Header;