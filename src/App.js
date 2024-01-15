import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DataFetching from './DataFetching';
import Pokemon from './Pokemon';
import FormDemo from './FormDemo';



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
  </div>
}

export default App;

