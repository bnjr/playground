import { createContext, useContext, useState } from 'react'

const counters = {
  count: 0,
}

class Counter {
  count = 0
  constructor(count = 0) {
    this.count = count
  }

  increaseCount() {
    ++this.count
  }

  getCopy(): Counter {
    return new Counter(this.count)
  }
}

const initialState = {
  counter: new Counter(),
  setCounter: (c: Counter) => {},
}
const CounterContext = createContext(initialState)

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(new Counter())
  console.log(`CounterProvider got called`)
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  )
}

const useCounter = () => {
  const context = useContext(CounterContext)

  if (context === undefined) {
    throw new Error('useTCounter must be used within a CounterProvider')
  }
  return context
}

export default useCounter
