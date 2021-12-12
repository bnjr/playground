import React from 'react'
import styled from 'styled-components'
import useCounter from '../providers/counterContext'
import useTheme from '../providers/themeContext'

const Subtitle = () => {
  const { theme } = useTheme()
  const { counter } = useCounter()
  debugger
  return (
    <MySubtitle>
      My current theme is {theme.background === '#eeeeee' ? 'light' : 'dark'}
      {/* <p>My Counter is {counter.count}</p> */}
    </MySubtitle>
  )
}

export default Subtitle

const MySubtitle = styled.p`
  color: black;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
`
