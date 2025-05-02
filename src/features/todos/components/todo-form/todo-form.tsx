import { Button } from '@/components/ui/button'
import { Form, Input, Textarea } from '@/components/ui/form'
import { Todo, todoSchema } from '@/features/todos/schema'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSaveTodo } from '../../api/save-todo'

const defaultValues: Omit<Todo, 'id'> = {
  title: '',
  description: '',
  completed: false,
}

export const TodoForm = () => {
  const { mutate, isPending } = useSaveTodo()

  const handleOnSubmit: SubmitHandler<Omit<Todo, 'id'>> = (data) => {
    console.log(data)
    mutate(data)
  }

  return (
    <div className="shadow-2xl p-10 rounded-lg bg-white">
      <h1 className="text-2xl font-bold text-center mb-10">
        Create Your Powerful Task
      </h1>
      <Form
        onSubmit={handleOnSubmit}
        schema={todoSchema.omit({ id: true })}
        options={{
          defaultValues,
        }}
      >
        {({ register, formState }) => (
          <>
            <Input
              type="text"
              placeholder="Add a task"
              error={formState.errors['title']}
              registration={register('title')}
            />
            <Textarea
              placeholder="Add a description"
              error={formState.errors['description']}
              registration={register('description')}
            />
            <div>
              <Button
                type="submit"
                className="w-full"
                disabled={isPending}
                isLoading={isPending}
              >
                Submit
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  )
}
