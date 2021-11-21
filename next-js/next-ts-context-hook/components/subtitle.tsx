import React from 'react'
import styled from 'styled-components'
import useTheme from '../providers/themeContext'

const Subtitle = () => {
  const { theme } = useTheme()

  return (
    <MySubtitle>
      My current theme is {theme.background === '#eeeeee' ? 'light' : 'dark'}
    </MySubtitle>
  )
}

export default Subtitle

const MySubtitle = styled.p`
  color: black;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
`
