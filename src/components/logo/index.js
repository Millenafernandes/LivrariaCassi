import logo from '../../images/logo.svg';
import styled from 'styled-components';



const LogoContainer = styled.div `

    display: flex;
    font-size: 25px;
    margin-left: 20px;
   
   

`
const LogoImgContainer = styled.img`

    
    margin-right: 15px;


`

function Logo(){
    return(

            <LogoContainer>
            <LogoImgContainer src={logo}/>
            <p><strong>Livraria Cassi</strong></p>
        
            </LogoContainer>

    );
} export default Logo;