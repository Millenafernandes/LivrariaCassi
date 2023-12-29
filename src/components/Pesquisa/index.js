
import Input from '../Input';
import styled from 'styled-components';

const PesquisaContainer = styled.section`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 130px;


`

function Pesquisa() {
    return (

        
        <PesquisaContainer>
            <h2>Descubra o mundo mágico da literatura com a gente!</h2>
            <h3>Como podemos te ajudar?</h3>
            <Input
                placeholder="Busque seu livro"
            />
        </PesquisaContainer>
        
    );
}

export default Pesquisa;