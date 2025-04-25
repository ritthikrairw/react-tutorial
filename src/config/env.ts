import { createEnv } from '@t3-oss/env-core'
import * as z from 'zod'

export const env = createEnv({
  clientPrefix: 'VITE_APP_',
  client: {
    VITE_APP_API_URL: z.string().url(),
    VITE_APP_ENABLE_API_MOCKING: z.string(),
    VITE_APP_MOCK_API_PORT: z.string(),
    VITE_APP_URL: z.string().url(),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
})
