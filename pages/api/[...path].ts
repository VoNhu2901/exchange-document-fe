// tất cả đường dẫn đi vào là /api thì ngoài hello ra, sẽ match tất cả vào [...path]
import Cookies from 'cookies'
import httpProxy from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
	api: {
		bodyParser: false,
	},
}

const proxy = httpProxy.createProxyServer()

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	return new Promise((resolve) => {
		// convert Cookies to Authorization header
		const cookies = new Cookies(req, res)
		const accessToken = cookies.get('access_token')
		if (accessToken) {
			req.headers.Authorization = `Bearer ${accessToken}`
		}

		// don't send cookies to API server
		req.headers.cookie = ''

		// /api/profile
		// forward to https://js-post-api.herokuapp.com/api/profile
		proxy.web(req, res, {
			target: process.env.API_URL,
			changeOrigin: true,
			selfHandleResponse: false, // trả về cho client luôn mình kh xử lý nữa
		})

		proxy.once('proxyRes', () => {
			resolve(true)
		})
	})
}
