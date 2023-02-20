import { trpc } from '@/utils/trpc'
import React from 'react'

type Props = {}

const Index = (props: Props) => {
	const hello = trpc.getMovie.useQuery()

	if (!hello.data) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<p>{hello.data.results[0].title}</p>
		</div>
	)
}

export default Index
