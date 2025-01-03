import styled from 'styled-components'
import { colors } from '../../styles'

import binIcon from '../../assets/images/excluir.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const Container = styled.div`
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
  background-color: ${colors.red};
  color: ${colors.lightYellow};
  z-index: 1;
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;

  &.is-visible {
    display: none;
  }

  button {
    margin-bottom: 8px;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
`
export const SidebarTitle = styled.h4`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
`
export const Value = styled.div`
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 40px;
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.yellow};
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
    color: ${colors.red};

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
    background-image: url(${binIcon});
    height: 16px;
    width: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 34px;
`
export const InputGroup = styled.div`
  margin-bottom: 8px;

  label {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${colors.white};
    width: 100%;
    height: 32px;
    border: none;
    padding: 16px;
    color: #000;
    font-size: 14px;

    &.width {
      width: 228px;
    }

    &.error {
      background-color: #ffffe0;
    }
  }

  &.margin-bottom {
    margin-bottom: 24px;
  }
`

export const ConfimOrder = styled.div`
  p {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 22px;
  }
`
