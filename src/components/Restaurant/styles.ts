import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.red};
  margin-top: 48px;
  position: relative;
  border: 1px solid ${colors.red};

  > img {
    display: block;
    width: 472px;
    height: 216px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin:16px;
    > img {
    width: 100%;
    }
  }
'
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
  height: 110px;
  wight: 456px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 100%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: 148px;
  }
`
export const Categorys = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
