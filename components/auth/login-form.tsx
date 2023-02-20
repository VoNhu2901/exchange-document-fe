import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { InputField } from '../form/components'
import { LoginPayload } from '../form/models'

type LoginFormProps = {
	onSubmit?: (payload: LoginPayload) => void
}

const image = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp'

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
	const schema = yup.object().shape({
		username: yup
			.string()
			.required('Please enter uername')
			.min(4, 'Username is required to have at least 4 characters'),
		password: yup
			.string()
			.required('Please enter password')
			.min(6, 'Password is required to have at least 6 characters'),
	})

	const { control, handleSubmit } = useForm<LoginPayload>({
		defaultValues: {
			username: '',
			password: '',
		},
		resolver: yupResolver(schema),
	})

	const handleLoginSubmit = (payload: LoginPayload) => {
		// console.log(payload)
		onSubmit?.(payload)
	}

	return (
		<div>
			<h1>LoginForm</h1>
			<main className="w-full flex justify-center">
				<form className="w-1/3" onSubmit={handleSubmit(handleLoginSubmit)}>
					<InputField name="username" control={control} type="text" />
					<InputField name="password" control={control} type="password" />

					<div className="text-center pt-1 mb-12 pb-1">
						<button
							className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
							type="submit"
							data-mdb-ripple="true"
							data-mdb-ripple-color="light"
							style={{
								background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
							}}
						>
							Log in
						</button>
					</div>
				</form>
			</main>
		</div>
	)
}
