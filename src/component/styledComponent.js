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

export const Button = styled.button`
  width: 150px;
  height: 50px;
  color: ${({ color }) => color && color !== 'gray' ? '#FFFFFF' : '#000000'};
  background-color: ${({ color }) => color ? colorTheme[color] : colorTheme.gray};
  border: none;
  font-size: ${fontSizeTheme.medium};
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
`

export const TextArea = styled.textarea`
  resize: none;
  height: 100%;
  width: 100%;
  font-size: ${fontSizeTheme.small};
  box-sizing: border-box;
  border: 2px solid #000000;
  padding: 10px;
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
`
