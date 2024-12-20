import styled from 'styled-components'
import { cores } from '../../styles'

import excluir from '../../assets/images/excluir.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.vermelha};
  z-index: 1;
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;

  > div {
    font-weight: bold;
    font-size: 14px;
    color: ${cores.amareloClaro};
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-top: 40px;
  }
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.amarelo};
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  div {
    margin-left: 8px;
    color: ${cores.vermelha};

    h3 {
      font-weight: 700;
      font-size: 18px;
    }

    span {
      display: block;
      font-weight: 400;
      font-size: 14px;
    }
  }

  button {
    background-image: url(${excluir});
    height: 16px;
    width: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
