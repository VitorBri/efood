import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const FundoBanner = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${colors.white};
  padding: 24px 0 32px 0;
  font-size: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    div {
      padding-left: 16px;
    }
  }
`

export const Category = styled.p`
  font-weight: 100;
  margin-bottom: 152px;
`

export const Name = styled.h2`
s  font-weight: 900;
`
