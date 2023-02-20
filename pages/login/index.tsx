import { LoginForm } from '@/components/auth'
import { LoginPayload } from '@/components/form/models'

type Props = {}

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

const LoginPage = (props: Props) => {
	return (
		<div>
			<h1>LoginPage</h1>
			<LoginForm onSubmit={handleLoginSubmit} />
		</div>
	)
}

export default LoginPage
