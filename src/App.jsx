import './App.css';
import logo from './assets/logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0); 

  function manejarClic() {
    setNumClics(numClics + 1);
  }

  const reiniciarContador =  () =>{
    setNumClics(0);
  }

  return (
    <div className='app'>
       <div className='logo-contenedor'>
          <img 
            className='logo'
            src={logo} 
            alt='Logo del contador' 
          />
       </div>
       <div className="principal-contenedor">
        <Contador numClics={numClics}/>
        <Boton 
          texto='Clic'
          esClic={true}
          manejarClic={manejarClic}
        />
        <Boton 
          texto='Reiniciar'
          esClic={false}
          manejarClic={reiniciarContador}
        />
       </div>
    </div>
     
  )
}

export default App
