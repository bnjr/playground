import React from 'react'
import styled from 'styled-components'
import useCounter from '../providers/counterContext'

const Subtitle = () => {
  const { counter } = useCounter()

  // debugger

  return (
    <MySubtitle>
      <p>Counter is {counter.count}</p>
    </MySubtitle>
  )
}

export default Subtitle

const MySubtitle = styled.p`
  color: black;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
`
