import { nanoid } from 'nanoid'
import { create } from 'zustand'
import { Todo } from '../schema'

type TodoStore = {
  todos: Todo[]
}

type TodoActions = {
  createTodo: (todo: Omit<Todo, 'id'>) => void
  deleteTodo: (id: string) => void
  updateTodo: (id: string, todo: Todo) => void
  toggleTodo: (id: string) => void
}

const initialState: TodoStore = {
  todos: [],
}

export const useTodoStore = create<TodoStore & TodoActions>((set) => ({
  ...initialState,
  createTodo: (todo: Omit<Todo, 'id'>) =>
    set((state) => ({
      todos: [
        ...(state.todos || []),
        {
          id: nanoid(),
          ...todo,
        },
      ],
    })),
  deleteTodo: (id: string) =>
    set((state) => ({ todos: state.todos?.filter((todo) => todo.id !== id) })),
  updateTodo: (id: string, todo: Todo) =>
    set((state) => ({
      todos: state.todos?.map((t) => (t.id === id ? todo : t)),
    })),
  toggleTodo: (id: string) =>
    set((state) => ({
      todos: state.todos?.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    })),
}))
