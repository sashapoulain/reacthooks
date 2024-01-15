import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Pokemon = () => {
   const [pokemon, setPokemon] = useState([]);
   const [query, setQuery] = useState('pokemon');

   useEffect(()=> {
      const fetchData = async () => {
         const { data } = await axios.get(`https://pokeapi.co/api/v2/${query}`)
         console.log(data)
         setPokemon(data.results)
      }
      fetchData();
   }, [query])
  return (
    <div>
    <ul>
      {pokemon.map((p)=>(
         <li key={p.url}><a href='{p.url}'>{p.name}</a></li>
      ))}
    </ul>
      
    </div>
  )
}

export default Pokemon
