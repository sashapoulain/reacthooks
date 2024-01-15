import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DataFetching = () => {
   const [char, setChar] = useState([]);

useEffect(()=>{
   axios.get('https://rickandmortyapi.com/api/character')
   .then(data => {
      console.log(data.data.results)
      setChar(data.data.results)
   })
   .catch(err=> {
      console.log(err);
   })
})
  return (
    <div>
      <ul>
         {char.map(ram => 
            <li key={ram.id}>{ram.name} - {ram.species}
            <p>
            {/* {ram.image} */}
            <img src={`${ram.image}`} alt={`Image of ${ram.name}`}/>
            </p>

            </li>
         )}
      </ul>
    </div>
  )
}

export default DataFetching
