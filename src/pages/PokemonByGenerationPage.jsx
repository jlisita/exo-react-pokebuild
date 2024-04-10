import Header from "../components/Header"
import Footer from "../components/Footer"
import PokemonByGeneration from "../components/PokemonByGeneration"

const PokemonByGenerationPage =()=>{
    return(
        <section>
            <Header />
            <PokemonByGeneration generation = {"1"}/>
            <PokemonByGeneration generation = {"2"}/>
            <PokemonByGeneration generation = {"3"}/>
            <Footer/>
        </section>
    )
}


export default PokemonByGenerationPage