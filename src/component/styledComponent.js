import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

const colorTheme = {
  green: '#6aa84f',
  red: '#cc0000',
  gray: '#dddddd'
}

const fontSizeTheme = {
  large: '40px',
  medium: '24px',
  small: '16px'
}

export const Modal = styled.div`
  position: absolute;
  z-index: 10;
  left: 10vw;
  top: 10px;
  box-sizing: border-box;
  background-color: #FFFFFF;
  height: auto;
  border: 2px solid #000000;
  width: 80%;
  padding: 0 10%;
`

export const MainWrapper = styled.div`
  width: 80%;
  box-sizing: border-box;
  padding: 0 10%;
  margin: auto;
  background-color: ${({ white }) => white ? '#FFFFFF' : '#DDDDDD'};
  height: auto;
  border: 2px solid #000000;
`

export const Row = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  ${({ itemsAlign }) => {
    switch (itemsAlign) {
      case 'center':
        return `
          align-items: center;
        `
      case 'right':
        return `
          flex-direction: row;
          align-items: flex-end;
          justify-content: flex-end;
        `
      case 'spread':
        return `
          flex-direction: row;
          justify-content: space-between;
        `
      default:
        return ``
    }
  }}
`

export const Button = styled.button`
  min-width: 150px;
  height: 50px;
  color: ${({ color }) => color && color !== 'gray' ? '#FFFFFF' : '#000000'};
  background-color: ${({ color }) => color ? colorTheme[color] : colorTheme.gray};
  border: none;
  font-size: ${fontSizeTheme.medium};
  box-sizing: border-box;
  border: 2px solid #000000;
  outline: none;
  margin-left: ${({ marginLeft }) => marginLeft || 'initial'}
`

export const TextInsideBox = styled.div`
  font-size: ${({ header }) => header ? fontSizeTheme.large : fontSizeTheme.medium};
  text-align: ${({ header }) => header ? 'center' : 'initial'};
  color: ${({ disabled }) => disabled ? '#cccccc' : 'initial'};
  box-sizing: border-box;
  width: 100%;
  border: 2px solid #000000;
  border-radius: 2px;
  padding: 10px 15px;
  margin: 10px 0px;
  background-color: #FFFFFF;
`

export const TextArea = styled.textarea`
  resize: none;
  height: 100%;
  width: 100%;
  font-size: ${fontSizeTheme.small};
  box-sizing: border-box;
  border: 2px solid #000000;
  padding: 10px;
  min-height: 50vh;
  outline: none;
`

export const MarkdownBox = styled.div`
  box-sizing: border-box;
  border: 2px solid #000000;
  padding: 0px 10px;
`

export const TextInput = styled.input`
  width: 100%;
  outline: none;
  box-sizing: border-box;
  border: 2px solid #000000;
  padding: 10px;
  font-size: ${fontSizeTheme.medium};
`

export const Text = styled.div`
  font-size: ${({ size }) => size ? fontSizeTheme[size] : fontSizeTheme.medium};
  color: ${({ color }) => color ? colorTheme[color] : 'initial'};
`
