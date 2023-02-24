import { LoginPayload } from './../components/form/models/login'
import { User } from './../models/User'
import axiosClient from './axios-client'
export const authApi = {
	login: (payload: LoginPayload): Promise<User> => {
		return axiosClient.post('/login', payload)
	},

	logout() {
		return axiosClient.post('/logout')
	},

	getProfile() {
		return axiosClient.get('/profile')
	},
}
