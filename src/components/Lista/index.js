
import styled from 'styled-components';

const OpcoesHeaderConatainer = styled.ul `

  
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 225px;
    
  

`
const OpcoesHeader = ['GÊNEROS', 'MAIS VENDIDOS', 'MINHA ESTANTE VIRTUAL'];

function Lista(){
    return(

        <OpcoesHeaderConatainer>
        
        {OpcoesHeader.map((textoItem, index) => (
          <li key={index}>{textoItem}</li> 
        ))}
        

      </OpcoesHeaderConatainer>


    );
} export default Lista;