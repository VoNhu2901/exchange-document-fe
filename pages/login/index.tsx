import { authApi } from '@/api-clients'
import { LoginForm } from '@/components/auth'
import { useAuth } from '@/hooks'
import { LoginPayload } from '@/models/auth'
import { useRouter } from 'next/router'

const LoginPage = () => {
	const router = useRouter()
	const { profile, login, logout } = useAuth({ revalidateOnMount: false })

	async function handleLoginClick() {
		try {
			await login({ username: '', password: '' })
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

	async function handleLoginSubmit(payload: LoginPayload) {
		try {
			await login(payload)
			console.log('Redirect to dashboard')

			router.push('/admin')
		} catch (error) {
			console.log('Login error: ' + error)
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
