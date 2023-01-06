import { useEffect, useRef, useState } from 'react';
import './App.css'
import MiApi from './components/MiApi';

function App() {
  const [valorBusqueda, setValorBusqueda] = useState('');

  const buscar = (e) => {
    setValorBusqueda(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" onChange={buscar} />
      <MiApi busqueda={valorBusqueda} />
    </div>
  )
}

export default App
