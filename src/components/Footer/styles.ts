import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.amarelo};
  color: ${cores.vermelha};
  padding: 40px 0;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 10px;
    text-align: center;
    margin-top: 80px;
  }
`
export const SocialMidias = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  margin-top: 32px;
`