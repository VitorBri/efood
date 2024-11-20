import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelha};
  padding: 8px;
  color: ${cores.amarelo};
  margin-top: 32px;
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
