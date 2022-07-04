import { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";

function App() {

  const [pokemon_list, setPokemon] = useState([])
  const [currentPageURL, setCurrentPageURL] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageURL, setNextPageURL] = useState()
  const [prevPageURL, setPrevPageURL] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    let cancel
    axios.get(currentPageURL, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setNextPageURL(res.data.next)
      setPrevPageURL(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    setLoading(false)

    return () => cancel()

  }, [currentPageURL])

  function goToNextPage(){
    setCurrentPageURL(nextPageURL)
  }

  function goToPrevPage(){
    setCurrentPageURL(prevPageURL)
  }

  
  if (loading) return "Loading ..."

  return (
    <>
      <PokemonList pokemon_list={pokemon_list}/>
      <Pagination 
        goToNext={nextPageURL ? goToNextPage : null} 
        goToPrev={prevPageURL ? goToPrevPage : null}>
      </Pagination>
    </>
    
  );
}

export default App;
