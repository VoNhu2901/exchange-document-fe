import { StudentDetail } from '@/components/swr'
import { useState } from 'react'

const swrTestPage = () => {
	return (
		<div>
			SWR Playround
			<ul>
				<li>
					<StudentDetail studentId="lea2aa9l7x3a5v0"></StudentDetail>
				</li>
				<li>
					<StudentDetail studentId="lea2aa9l7x3a5v0"></StudentDetail>
				</li>
				<li>
					<StudentDetail studentId="lea2aa9l7x3a5v0"></StudentDetail>
				</li>
			</ul>
		</div>
	)
}

export default swrTestPage
