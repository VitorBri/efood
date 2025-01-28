import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const FundoHeader = styled.header`
  height: 184px;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.red};
  padding: 64px 0;

  p {
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 64px 56px;

    img {
      display: none;
    }

    p {
      width: 100px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 64px 16px;

    p {
      width: 100px;
    }
  }
`
export const Link = styled.a`
  text-decoration: none;
  color: ${colors.red};
`
