import React from 'react'
import styled from 'styled-components'
import useTheme, { themes } from '../providers/themeContext'

const Button = () => {
  const { theme, setTheme } = useTheme()

  return (
    <StyledButton
      color={theme.foreground}
      background={theme.background}
      onClick={() => {
        setTheme(theme === themes.light ? themes.dark : themes.light)
      }}>
      I am styled by theme context!
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: 12px;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  display: grid;
  justify-self: center;
  cursor: pointer;
`
