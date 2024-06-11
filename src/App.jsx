import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <figure>
        <img 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
        alt="Bulbasaur" 
        />
        <figcaption>
            Bulbasaur
        </figcaption>
      </figure>;
    </>
  )
}

export default App
