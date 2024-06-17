import { useState } from 'react'
import './App.css'
import PokemonCard from './components/pokemonCard.jsx';





function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
  const [pokemonIndex , setpokemonIndex ] = useState(0)
 
  const handlePrevious = () => {
    if (pokemonIndex > 0) {
      setpokemonIndex(pokemonIndex - 1);
    }
  };

  const handleNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setpokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <>
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
  </div>
  <div>
    <p>{setpokemonIndex}</p>
    <button onClick={handlePrevious}>Précédent</button>
  </div>
  <div>
    <p>{setpokemonIndex}</p>
    <button onClick={handleNext}>Suivant</button>
  </div>
    </>
    )
}

export default App