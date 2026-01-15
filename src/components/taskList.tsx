import { useState } from 'react'
import TaskItem from './taskItem'

interface Task {
  text: string
  completed: boolean
}

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(event.target.value)
  }

  const addNewTask = () => {
    const trimmedText = newTaskText.trim()
    if (trimmedText !== '') {
      const newTask: Task = {
        text: trimmedText,
        completed: false
      }
      setTasks([...tasks, newTask])
      setNewTaskText('')
    }
  }

  const markTaskAsDone = (taskIndex: number) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const removeTask = (taskIndex: number) => {
    const filteredTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(filteredTasks)
  }

  return (
    <div>
      <input
        type="text"
        value={newTaskText}
        onChange={onTextChange}
      />
      <button onClick={addNewTask}>Add task</button>
      <div>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            taskText={task.text}
            completed={task.completed}
            onMarkDone={() => markTaskAsDone(index)}
            onRemove={() => removeTask(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList
