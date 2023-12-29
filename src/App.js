import styled from 'styled-components';

import AppHeader from './components/Header';
import Pesquisa from './components/Pesquisa';

const AppContainer = styled.div `


    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #f77e04 35%, #f7a737);
  



`

function App() {
  return (
    <AppContainer>
     
     <AppHeader/> 

     <Pesquisa></Pesquisa>
    
     </AppContainer>
   
  );
}

export default App;
