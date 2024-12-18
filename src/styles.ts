import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  vermelha: '#E66767',
  amarelo: '#FFEBD9',
  amareloClaro: '#FFF8F1'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Roboto, sans-serif;
    list-style:none;
  }

  body{
    background-color:${cores.amareloClaro}
  }

  .container{
    max-width: 1024px;
    widtth: 100%;
    margin:0 auto;
  }
`
