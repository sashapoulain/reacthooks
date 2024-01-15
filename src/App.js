import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


//api ile data çekmek için useeffect kullanılır, ek olarak axios kullanıldı.

const App = () => {
  const [hits, setHits] = useState([])
  const [query, setQuery] = useState('covid19')


  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://hn.algolia.com/api/v1/search?query=${query}');
      // console.log(data.hits)
      setHits(data.hits)
    }
    fetchData()
  }, [query])
  //bunu her query değiştiğinde yapsın istiyoruz.

  return <div style={{ marginLeft: '100px', marginTop: '100px' }}>
    <input type='text' onChange={(e)=> setQuery(e.target.value)}/>
    <ul>
       {hits.map((hit)=>(
        <li key={hit.objectID}>
        {hit.title}
        </li>
       ))}
    </ul>
  </div>

}

export default App;

