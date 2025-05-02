import { useNotifications } from '@/components/ui/notifications'
import { useMutation } from '@tanstack/react-query'
import { Todo } from '../schema'
import { useTodoStore } from '../store/todo-store'

export const useSaveTodo = () => {
  const { addNotification } = useNotifications()
  const { createTodo } = useTodoStore()
  return useMutation({
    mutationFn: (todo: Omit<Todo, 'id'>) => saveTodo(todo),
    onSuccess: (data) => {
      createTodo(data)
      addNotification({
        title: 'Todo saved successfully',
        type: 'success',
      })
    },
    onError: () => {
      addNotification({
        title: 'Failed to save todo',
        type: 'error',
      })
    },
  })
}

function saveTodo(todo: Omit<Todo, 'id'>): Promise<Omit<Todo, 'id'>> {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(todo)
    }, 1000)
  })
}
