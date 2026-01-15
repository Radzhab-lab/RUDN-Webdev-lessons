interface TaskItemProps {
  taskText: string
  completed: boolean
  onMarkDone: () => void
  onRemove: () => void
}

function TaskItem(props: TaskItemProps) {
  return (
    <div>
      <span>{props.taskText}</span>
      <button onClick={props.onMarkDone}>
        {props.completed ? 'Mark undone' : 'Mark done'}
      </button>
      <button onClick={props.onRemove}>Remove</button>
    </div>
  )
}

export default TaskItem
