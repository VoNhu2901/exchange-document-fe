import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { getMovie } from '@/features/favourite/services'

const MovieSchema = z.object({
	results: z.array(
		z.object({
			title: z.string(),
			id: z.number(),
			release_date: z.date(),
			poster_path: z.string(),
		})
	),
})

export const productRouter = router({
	getMovie: publicProcedure.output(MovieSchema).query(({ ctx, input }) => {
		return getMovie()
	}),
})
