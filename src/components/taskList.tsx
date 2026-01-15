import { useState, useRef } from 'react'
import TaskItem from './taskItem'

interface Item {
  text: string
  completed: boolean
}

function TaskList() {
  const [items, setItems] = useState<Item[]>([])
  const [inputValue, setInputValue] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const filterInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
  }

  const addItem = () => {
    const trimmedValue = inputValue.trim()
    if (trimmedValue !== '') {
      const newItem: Item = {
        text: trimmedValue,
        completed: false
      }
      setItems([...items, newItem])
      setInputValue('')
    }
  }

  const toggleItem = (itemIndex: number) => {
    const newItems = items.map((item, index) => {
      if (index === itemIndex) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setItems(newItems)
  }

  const deleteItem = (itemIndex: number) => {
    const newItems = items.filter((item, index) => index !== itemIndex)
    setItems(newItems)
  }

  const clearFilter = () => {
    setFilterValue('')
    if (filterInputRef.current !== null) {
      filterInputRef.current.focus()
    }
  }

  const visibleItems = items.filter((item) => {
    return item.text.includes(filterValue)
  })

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите новую задачу"
        />
        <button onClick={addItem}>Добавить задачу</button>
      </div>

      <div>
        <input
          ref={filterInputRef}
          type="text"
          value={filterValue}
          onChange={handleFilterChange}
          placeholder="Поиск задач"
        />
        <button onClick={clearFilter}>Очистить</button>
      </div>

      <div>
        {visibleItems.map((item, index) => {
          const originalIndex = items.findIndex((i) => i === item)
          return (
            <TaskItem
              key={originalIndex}
              itemText={item.text}
              completed={item.completed}
              onToggle={() => toggleItem(originalIndex)}
              onDelete={() => deleteItem(originalIndex)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TaskList
