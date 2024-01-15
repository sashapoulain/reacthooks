import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataFetching from './DataFetching';
import Pokemon from './Pokemon';
import FormDemo from './FormDemo';
import FormDemo2 from './FormDemo2';



const App = () => {
  return <div style={{ margin: 'auto' }}>
  <p style={{fontSize: '3rem'}}>RICK AND MORTY API</p>
    <div>
      <DataFetching />    
      </div>

      <p style={{fontSize: '3rem'}}>POKEMON API</p>
      <div>
        <Pokemon />
      </div>
      <div>
        <FormDemo/>
      </div>
      <div>
        <FormDemo2 />
      </div>
  </div>
}

export default App;

