import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  red: '#E66767',
  yellow: '#FFEBD9',
  lightYellow: '#FFF8F1'
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
    background-color:${colors.lightYellow}
  }

  .container{
    max-width: 1024px;
    widtth: 100%;
    margin:0 auto;
  }
`
