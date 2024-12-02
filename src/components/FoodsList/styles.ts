import styled from 'styled-components'

export const FoodsContainer = styled.div`
  margin-top: 24px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  list-style: none;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    z-index: 900;
  }

  .container {
    position: relative;
    z-index: 1000;

    > img {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      z-index: 10;
    }
  }
`
export const ModalContent = styled.div``
