
import './style.css';

const OpcoesHeader = ['GÊNEROS', 'MAIS VENDIDOS', 'MINHA ESTANTE VIRTUAL'];

function Lista(){
    return(

        <ul className='listaMenu'> 
        {OpcoesHeader.map((textoItem, index) => (
          <li key={index}>{textoItem}</li> 
        ))}
      </ul>


    );
} export default Lista;