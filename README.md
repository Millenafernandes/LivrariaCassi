# Coisas importantes no React
* Pasta de components
* App.js
* npx create-react-app .(especeficar o diretorio o ponto serve)
* npm install styled-components
* Nao funciona letras maiusculas para criar pasta em React. Cria o repo depois copia e cola.
```
import Y from './caminho/do/arq;

const XXContainer = styled.header`

(CSS)
`
function XX(){

return(
<XXContainer>

<Y />
        
<XXContainer>

);
} export default XX;



```
*index.js 

```
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

body {

  background-color: #e4c0a8;
  
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

```
