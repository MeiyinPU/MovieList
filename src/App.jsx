import { useState} from 'react'
// import Example from "./components/Example"
// import Exo from "./components/Exo"
import Loader from "./components/Loader"
import FetchExample from "./components/FetchExample"
import MoviesList from "./components/MoviesList"

import './App.css'

function App() {
  const [count, setCount] = useState(1)

 
  // Mettre un button pour mettre à jour COUNT
  // Dans le composnat Exo, afficher un console.log pour indiquer que count vient d'être modifié


  return (
    <>
    {/* <Example count={count} setCount={setCount}/>
    <Exo count={count} setCount={setCount}/> */}
    <Loader count={count} setCount={setCount}/>
    {/* <FetchExample/>
    <MoviesList/> */}
    </>
  )
  

}

export default App
