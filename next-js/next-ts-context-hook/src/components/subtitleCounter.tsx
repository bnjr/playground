import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import useCounter from '../providers/counterContext'

const Subtitle = observer(() => {
  const { counter } = useCounter()
  console.log(`Counter got called`)
  return (
    <MySubtitle>
      <p>Counter is {counter.count}</p>
    </MySubtitle>
  )
})

export default Subtitle

const MySubtitle = styled.p`
  color: black;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
`
