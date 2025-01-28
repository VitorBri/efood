import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
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

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
    }
  }

  ${(props) =>
    props.type === 'secundary'
      ? `
        margin-top: 0px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        color:${colors.white};

        @media (max-width: ${breakpoints.tablet}) {
          grid-template-columns: 1fr;
        }

        @media (max-width: ${breakpoints.desktop}) {
          column-gap: 32px;
        }

        img{
          height:280px;
          width:280px;
          object-fit: cover;

          @media (max-width: ${breakpoints.tablet}) {
            width:100%;
          }
        }
        h3{
          font-size:18px;
          margin: 0 0 16px 0;

          @media (max-width: ${breakpoints.tablet}) {
            margin-top:24px;
          }
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

          @media (max-width: ${breakpoints.tablet}) {
            margin-top:48px;
            width:100%;
          }
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
