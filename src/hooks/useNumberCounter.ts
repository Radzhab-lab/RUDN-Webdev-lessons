import { useState } from 'react'

function useNumberCounter(defaultValue: number = 0) {
  const [currentValue, setCurrentValue] = useState(defaultValue)

  const increment = () => {
    setCurrentValue(currentValue + 1)
  }

  const decrement = () => {
    setCurrentValue(currentValue - 1)
  }

  const reset = () => {
    setCurrentValue(defaultValue)
  }

  return {
    currentValue,
    increment,
    decrement,
    reset
  }
}

export default useNumberCounter
