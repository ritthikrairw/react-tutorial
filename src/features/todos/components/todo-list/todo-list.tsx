import { cn } from '@/utils/cn'
import { useTodoStore } from '../../store/todo-store'
import { TodoCard } from '../todo-card/todo-card'

export const TodoList = () => {
  const { todos, toggleTodo } = useTodoStore()
  const isEmpty = todos?.length === 0
  const totalCount = todos?.length
  const completedCount = todos?.filter((todo) => todo.completed).length

  return (
    <div className="shadow-2xl p-10 rounded-lg bg-white">
      <h1 className="text-2xl font-bold text-center mb-10">Your Task List</h1>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500">Total: {totalCount}</p>
        <p className="text-sm text-gray-500">Completed: {completedCount}</p>
      </div>
      {isEmpty ? (
        <p className="text-center text-gray-500">No tasks found</p>
      ) : (
        <ul className="space-y-2">
          {todos?.map((todo) => (
            <TodoCard key={todo.id} todo={todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
      )}
    </div>
  )
}
