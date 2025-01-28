import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const RestaurantsContainer = styled.section`
  margin-top: 80px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${breakpoints.desktop}) {
    column-gap: 0;
  }
`
