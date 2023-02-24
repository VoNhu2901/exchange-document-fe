import useSWR from 'swr'

type StudentDetailProps = { studentId: any }

const MS_PER_HOUR = 60 * 60 * 1000

export const StudentDetail = ({ studentId }: StudentDetailProps) => {
	const { data, error, mutate, isValidating, isLoading } = useSWR(`/students/${studentId}`, {
		revalidateOnFocus: false,
		dedupingInterval: 2000,
	})

	return <div>Name: {data?.name || '--'}</div>
}
