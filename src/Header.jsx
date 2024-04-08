import logo from './logo.png';

const Header = () => {

    return (
    <header className='App-header'>
            <img src={logo} alt="logo" width = "300"/>
            <nav>
                <ul>
                    <li><a href="">100 premiers pokémons</a></li>
                    <li><a href="">Les types</a></li>
                    <li><a href="">Pokémons feu</a></li>
                    <li><a href="">Pokémons eau</a></li>
                    <li><a href="">Pokémons plante</a></li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;