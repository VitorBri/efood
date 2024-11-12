import { createGlobalStyle } from 'styled-components'

const cores = {
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
  }

  body{
    background-color:${cores.amareloClaro}
  }
`
