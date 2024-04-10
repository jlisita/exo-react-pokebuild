import Header from "../components/Header"
import PokemonByGeneration from "../components/PokemonByGeneration"

const PokemonByGenerationPage =()=>{
    return(
        <section>
            <Header />
            <PokemonByGeneration generation = {"1"}/>
            <PokemonByGeneration generation = {"2"}/>
            <PokemonByGeneration generation = {"3"}/>
        </section>
    )
}


export default PokemonByGenerationPage