import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

const getMovie = async () => {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
	)
	return data.json()
}

// interface User {
// 	id: string
// 	name: string
// }

// const userList: User[] = [
// 	{
// 		id: '1',
// 		name: 'KATT',
// 	},
// ]

const MovieSchema = z.object({
	results: z.array(
		z.object({
			title: z.string(),
			// id: z.number(),
			// release_date: z.date(),
			// poster_path: z.string(),
		})
	),
})

export const userRouter = router({
	getMovie: publicProcedure.output(MovieSchema).query(({ ctx, input }) => {
		return getMovie()
	}),
	// userCreate: publicProcedure.input(z.object({ name: z.string() })).mutation((req) => {
	// 	const id = `${Math.random()}`
	// 	const user: User = {
	// 		id,
	// 		name: req.input.name,
	// 	}
	// 	userList.push(user)
	// 	return user
	// }),
})
