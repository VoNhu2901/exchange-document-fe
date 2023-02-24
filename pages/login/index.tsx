import { authApi } from '@/api-clients'
import { LoginForm } from '@/components/auth'
import { LoginPayload } from '@/components/form/models'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'

// const async handleLoginSubmit = (payload: LoginPayload) => {  //BAI NEXTJS_06_05
// 		try {
// 			await login()
// 			console.log('redirected to dashboard')
// 			router.push('/about')
// 		} catch (error) {
// 			console.log('failed to login', error)
// 		}
// 	}

const handleLoginSubmit = (payload: LoginPayload) => {
	console.log(payload.username)
}

const LoginPage = () => {
	const router = useRouter()
	const { profile, login, logout } = useAuth({ revalidateOnMount: false })

	async function handleLoginClick() {
		try {
			await login()
			console.log('Redirect to dashboard')

			router.push('/admin')
		} catch (error) {
			console.log('Login error: ' + error)
		}
	}
	async function handleGetProfileClick() {
		try {
			await authApi.getProfile()
		} catch (error) {
			console.log('Get profile error: ' + error)
		}
	}
	async function handleLogoutClick() {
		try {
			await logout()
			console.log('Redirect to login page')
			router.push('/login')
		} catch (error) {
			console.log('Logout error: ' + error)
		}
	}

	return (
		<div>
			<h1>LoginPage</h1>

			<p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

			<button onClick={handleLoginClick}>Login</button>
			<button onClick={handleGetProfileClick}>Get Profile</button>
			<button onClick={handleLogoutClick}>Logout</button>

			<LoginForm onSubmit={handleLoginSubmit} />
		</div>
	)
}

export default LoginPage
