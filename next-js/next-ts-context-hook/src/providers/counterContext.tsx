import { createContext, useContext, useState } from 'react'
import { CounterStore } from '../stores/counterStore'

const CounterContext = createContext<CounterStore | undefined>(undefined)

// let counterStore: CounterStore | undefined = undefined

export const CounterProvider = ({ children }) => {
  const [counterStore] = useState(new CounterStore())
  // if (!counterStore) counterStore = new CounterStore()
  console.log(`CounterProvider got called`)
  return (
    <CounterContext.Provider value={counterStore}>
      {children}
    </CounterContext.Provider>
  )
}

const useCounter = () => {
  const context = useContext(CounterContext)

  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider')
  }
  return context
}

export default useCounter
