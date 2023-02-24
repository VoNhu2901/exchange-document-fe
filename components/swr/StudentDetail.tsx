import useSWR from 'swr'

type StudentDetailProps = { studentId: any }

const MS_PER_HOUR = 60 * 60 * 1000

export const StudentDetail = ({ studentId }: StudentDetailProps) => {
	const { data } = useSWR(`/students/${studentId}`, {
		revalidateOnFocus: false,
		dedupingInterval: MS_PER_HOUR,
	})

	return <div>Name: {data?.name || '--'}</div>
}
