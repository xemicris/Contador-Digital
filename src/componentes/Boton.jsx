import '../estilos/boton.css';

const Boton = ({texto, esClic, manejarClic}) =>{
    return (
        <button
            className={ esClic ? 'boton-clic' : 'boton-reiniciar' }
            onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;