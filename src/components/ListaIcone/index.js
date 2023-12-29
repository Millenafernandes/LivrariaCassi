
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import styled from 'styled-components';

const OpcaoImgContainer = styled.ul`


    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 225px;


`


const OpcoesImg = [perfil,sacola];
function ListaIcone(){
    return(
        <OpcaoImgContainer> 
        {OpcoesImg.map((imgItem, index) => (
          <li key={index}><img src={imgItem}></img></li> 
        ))}
      </OpcaoImgContainer>
    );
} export default ListaIcone;