import * as yup from 'yup'

export const schemaLogin = yup.object().shape({
	username: yup
		.string()
		.required('Please enter uername')
		.min(4, 'Username is required to have at least 4 characters'),
	password: yup
		.string()
		.required('Please enter password')
		.min(6, 'Password is required to have at least 6 characters'),
})
