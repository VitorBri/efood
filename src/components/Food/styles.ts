import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div<Props>`
  background-color: ${cores.vermelha};
  padding: ${(props) => (props.type === 'primary' ? '8px ' : '32px')};
  color: ${cores.amarelo};
  margin-top: 32px;

  ${(props) =>
    props.type === 'secundary'
      ? `
        margin-top: 0px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        color:${cores.branca};
        img{
          height:280px;
          width:280px;
          object-fit: cover;
        }
        h3{
          font-size:18px;
          margin: 0 0 16px 0;
        }
        p{
          margin-bottom:16px;
        }

        ${ButtonContainer}{
          width:232px;
        }
  `
      : ''}
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin: 8px 0;
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`
