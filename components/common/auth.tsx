import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Loading } from '../loading'

export interface AuthProps {
	children: any
}

export const Auth = ({ children }: AuthProps) => {
	const router = useRouter()
	const { profile, firstLoading } = useAuth()

	useEffect(() => {
		if (!firstLoading && !profile?.username) router.push('/login')
	}, [router, profile, firstLoading])

	if (!profile?.username) return <Loading />

	return <>{children}</>
}
