
import Logo from '../../components/logo';
import Lista from '../../components/Lista';
import ListaIcone from '../../components/ListaIcone';
import styled from 'styled-components';


const AppHeader = styled.header`

    background-color: #FFF;
    display: flex;


  .logo{
    margin-left: 50px;
  }


`

function Header(){

return(
<AppHeader>

        <Logo/>
        
        <Lista/>

        <ListaIcone/>
    
      
</AppHeader>

);
} export default Header;

