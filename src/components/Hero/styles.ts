import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const FundoHero = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-size: cover;
  padding: 40px;
  text-align: center;
`

export const Title = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: ${colors.red};

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 80px;
  }
`
