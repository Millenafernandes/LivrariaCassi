import logo from '../../images/logo.svg';
import './style.css';

function Logo(){
    return(
        <div className='logo'>
            <img className='logo-img' src={logo}></img>
            <p><strong>Livraria Cassi</strong></p>
        </div>


    );
} export default Logo;