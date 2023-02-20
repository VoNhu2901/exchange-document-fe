// @filename: server.ts
import { t } from '../trpc'
import { userRouter } from './users'
// import { productRouter } from './products'

export const appRouter = t.mergeRouters(userRouter)

export type AppRouter = typeof appRouter
