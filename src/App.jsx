import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
  const [count, setCount] = useState(0)
  const pokemonList = [
   {
   name: "Lugia",
   imgSrc:
   "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/249.png",
   },
   {
   name: "Ramboum",
   },
   {
   name: "Groudon",
   imgSrc:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/383.png"
    
   }
  ];
  return (
    <>
      <PokemonCard myPokemon={pokemonList[0]} />
    </>
  )
}

export default App
