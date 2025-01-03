import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div<Props>`
  background-color: ${colors.red};
  padding: ${(props) => (props.type === 'primary' ? '8px ' : '32px')};
  color: ${colors.yellow};
  margin-top: 32px;

  img {
    height: 168px;
    width: 304px;
    object-fit: cover;
  }

  ${(props) =>
    props.type === 'secundary'
      ? `
        margin-top: 0px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        color:${colors.white};
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
          height:176px;
          span{
            display:block;
            margin-top:24px;
          }
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
