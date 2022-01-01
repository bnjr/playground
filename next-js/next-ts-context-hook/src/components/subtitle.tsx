import React from 'react'
import styled from 'styled-components'
import useTheme from '../providers/themeContext'

const Subtitle = () => {
  const { theme } = useTheme()
  console.log(`Subtitle got called`)
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
