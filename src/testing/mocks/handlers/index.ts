import { env } from '@/config/env'
import { http, HttpResponse } from 'msw'
import { networkDelay } from '../utils'
import { todosHandlers } from './todos'

export const handlers = [
  ...todosHandlers,
  http.get(`${env.VITE_APP_API_URL}/healthcheck`, async () => {
    await networkDelay()
    return HttpResponse.json({ ok: true })
  }),
]
