import { http, HttpResponse } from 'msw'

import { env } from '@/config/env'

import { db, persistDb } from '../db'
import { networkDelay } from '../utils'

type CreateTodoBody = {
  title: string
  completed: boolean
}

export const todosHandlers = [
  http.get(`${env.VITE_APP_API_URL}/todos`, async ({ request }) => {
    await networkDelay()

    try {
      const url = new URL(request.url)
      const todoId = url.searchParams.get('todoId') || ''
      const page = Number(url.searchParams.get('page') || 1)

      const total = db.todo.count({
        where: {
          id: {
            equals: todoId,
          },
        },
      })

      const totalPages = Math.ceil(total / 10)

      const todos = db.todo
        .findMany({
          where: {
            id: {
              equals: todoId,
            },
          },
          take: 10,
          skip: 10 * (page - 1),
        })
        .map(({ id, ...todo }) => {
          return {
            ...todo,
          }
        })
      return HttpResponse.json({
        data: todos,
        meta: {
          page,
          total,
          totalPages,
        },
      })
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      )
    }
  }),

  http.post(`${env.VITE_APP_API_URL}/todos`, async ({ request }) => {
    await networkDelay()
    try {
      const data = (await request.json()) as CreateTodoBody
      const result = db.todo.create({
        ...data,
      })
      await persistDb('todo')
      return HttpResponse.json(result)
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      )
    }
  }),

  http.delete(`${env.VITE_APP_API_URL}/todos/:todoId`, async ({ params }) => {
    await networkDelay()
    try {
      const todoId = params.todoId as string
      const result = db.todo.delete({
        where: {
          id: {
            equals: todoId,
          },
        },
      })
      await persistDb('todo')
      return HttpResponse.json(result)
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      )
    }
  }),
]
