import { Head } from '@/components/seo'
import { TodoForm } from '@/features/todos/components/todo-form'
import { TodoList } from '@/features/todos/components/todo-list'
const HomeRoute = () => {
  return (
    <>
      <Head description="Welcome to React Tutorial" />
      <div className="max-w-xl mx-auto space-y-10 py-10">
        <TodoForm />
        <TodoList />
      </div>
    </>
  )
}

export default HomeRoute
