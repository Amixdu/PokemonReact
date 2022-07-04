import React from 'react'

export default function PokemonList({ pokemon_list }) {
  return (
    <div>
        {pokemon_list.map(p => (
            <div key={p}>{p}</div>
        ))}
    </div>
  )
}
