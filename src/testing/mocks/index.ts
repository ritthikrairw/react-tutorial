import { env } from '@/config/env'

export const enableMocking = async () => {
  if (env.VITE_APP_ENABLE_API_MOCKING) {
    const { worker } = await import('./browser')
    const { initializeDb } = await import('./db')
    await initializeDb()
    return worker.start()
  }
}
