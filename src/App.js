import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DataFetching from './DataFetching';



const App = () => {
  const [pokemon, setPokemon] = useState([])
  const [query, setQuery] = useState('pokemon')


  useEffect(() => {


    const fetchData = async () => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
      console.log(data.results)
      setPokemon(data.results)
    }
    fetchData();
  },
    [query]
  )
  //bunu her query değiştiğinde yapsın istiyoruz.

  return <div style={{ marginLeft: '100px', marginTop: '100px' }}>
    <ul>
      {pokemon.map((poke) => (
        <li key={poke.url}><a href={poke.url}>{poke.name}</a>
        </li>
      ))}
    </ul>
    <div>
      <DataFetching />    
      </div>
  </div>

}

export default App;

