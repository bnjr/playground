import { createContext, useContext } from 'react'
import { CounterStore } from '../stores/counterStore'

const CounterContext = createContext<
  { counterStore: CounterStore } | undefined
>(undefined)

let counterStore: CounterStore

export const CounterProvider = ({ children }) => {
  if (!counterStore) counterStore = new CounterStore()
  console.log(`CounterProvider got called`)
  return (
    <CounterContext.Provider value={{ counterStore: counterStore }}>
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
