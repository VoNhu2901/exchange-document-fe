import { authApi } from '@/api-clients'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/_internal'

export function useAuth(options?: Partial<PublicConfiguration>) {
	const { data, error, mutate } = useSWR('/profile', {
		dedupingInterval: 60 * 60 * 24 * 1000,
		revalidateOnFocus: false,
		...options,
	})

	const firstLoading = data === undefined && error === undefined

	async function login() {
		await authApi.login({
			username: 'vonhu',
			password: '123456',
		})

		await mutate()
	}

	async function logout() {
		await authApi.logout()
		mutate({}, false) // remove object into empty and no call api again
	}

	return {
		profile: data,
		error,
		login,
		logout,
		firstLoading,
	}
}
