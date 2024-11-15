import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.vermelha};
  color: ${cores.amarelo};
  font-weight: bold;
  font-size: 14px;
  padding: 6px 4px;
  display: inline-block;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelha};
  color: ${cores.amarelo};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  display: inline-block;
  text-decoration: none;
`
