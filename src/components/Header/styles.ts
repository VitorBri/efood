import styled from 'styled-components'
import { cores } from '../../styles'

export const FundoHeader = styled.header`
  height: 184px;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.vermelha};
  padding: 64px 0;
`
export const Link = styled.a`
  text-decoration: none;
  color: ${cores.vermelha};
`
