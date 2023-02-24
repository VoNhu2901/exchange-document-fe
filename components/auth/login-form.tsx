import { schemaLogin } from '@/utils/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { LoginPayload } from '../../models/auth'
import { InputField } from '../form/components'

type LoginFormProps = {
	onSubmit?: (payload: LoginPayload) => void
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
	const { control, handleSubmit } = useForm<LoginPayload>({
		defaultValues: {
			username: '',
			password: '',
		},
		resolver: yupResolver(schemaLogin),
	})

	const handleLoginSubmit = (payload: LoginPayload) => {
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
