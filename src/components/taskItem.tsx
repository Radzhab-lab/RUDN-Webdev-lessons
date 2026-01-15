interface TaskItemProps {
  itemText: string
  completed: boolean
  onToggle: () => void
  onDelete: () => void
}

function TaskItem(props: TaskItemProps) {
  return (
    <div>
      <span>{props.itemText}</span>
      <button onClick={props.onToggle}>
        {props.completed ? 'Отменить выполнение' : 'Выполнено'}
      </button>
      <button onClick={props.onDelete}>Удалить</button>
    </div>
  )
}

export default TaskItem
