import { cn } from '@/utils/cn'
import { Todo } from '../../schema'
export type TodoCardProps = {
  todo: Todo
  toggleTodo: (id: string) => void
}

export const TodoCard = ({ todo, toggleTodo }: TodoCardProps) => {
  return (
    <li
      key={todo.id}
      className={cn(
        'p-4 bg-gray-50 rounded-lg flex items-start gap-2',
        todo.completed && 'line-through text-gray-500',
      )}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="h-6 w-6 rounded-full accent-black"
      />
      <div>
        <span className="text-xs text-gray-500">ID: {todo.id}</span>
        <h3 className="text-lg font-bold">{todo.title}</h3>
        <p className="text-sm text-gray-500">{todo.description}</p>
      </div>
    </li>
  )
}
