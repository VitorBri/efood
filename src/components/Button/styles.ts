import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.yellow};
  color: ${colors.red};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 0;
  border: none;
  width: 100%;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  background-color: ${colors.red};
  color: ${colors.yellow};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  display: inline-block;
  text-decoration: none;
`
