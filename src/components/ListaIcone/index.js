
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import './style.css';

const OpcoesImg = [perfil,sacola];
function ListaIcone(){
    return(
        <ul className='listaImg'> 
        {OpcoesImg.map((imgItem, index) => (
          <li key={index}><img src={imgItem}></img></li> 
        ))}
      </ul>
    );
} export default ListaIcone;