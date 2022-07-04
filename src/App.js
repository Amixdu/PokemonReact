import { useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";

function App() {

  const [pokemon_list, setPokemon] = useState([])

  axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
    setPokemon(res.data.results.map(p => p.name))
  })

  return (
    <PokemonList pokemon_list={pokemon_list}/>
  );
}

export default App;
