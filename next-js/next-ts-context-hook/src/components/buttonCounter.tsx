import React from 'react'
import styled from 'styled-components'
import useCounter from '../providers/counterContext'

const Button = () => {
  const { counter } = useCounter().counterStore

  return (
    <StyledButton
      onClick={() => {
        counter.increaseCount()
        // const newCounter = counter.
        // setCounter(counter.getCopy())
      }}>
      I will increase the counter
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
