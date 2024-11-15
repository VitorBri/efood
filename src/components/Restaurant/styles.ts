import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  color: ${cores.vermelha};
  margin-top: 48px;
  position: relative;
`
export const InfoRestaurant = styled.div`
  padding: 8px;
`
export const Rating = styled.span`
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
  }
`

export const NameAndRate = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  diplay: block;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const Categorys = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
