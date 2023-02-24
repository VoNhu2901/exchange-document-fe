import { User } from '@/models'
import Cookies from 'cookies'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
	| {
			message: string
	  }
	| User

export const config = {
	api: {
		bodyParser: false,
	},
}

const proxy = httpProxy.createProxyServer()

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' })
	}

	return new Promise((resolve) => {
		// don't send cookies to API server
		req.headers.cookie = ''

		const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
			let body = ''

			// Concatenate the chunks of data received in the response
			proxyRes.on('data', function (chunk) {
				body += chunk
			})

			proxyRes.on('end', function () {
				try {
					// Check if the status code indicates success
					const isSuccess =
						proxyRes.statusCode && proxyRes.statusCode >= 200 && proxyRes.statusCode < 300
					if (!isSuccess) {
						;(res as NextApiResponse)
							.status(proxyRes.statusCode || 500)
							.json({ message: 'Username or password is invalid' })
					}

					const { accessToken, expiredAt } = JSON.parse(body)

					// convert token to cookies
					const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' })
					cookies.set('access_token', accessToken, {
						httpOnly: true,
						sameSite: 'lax',
						expires: new Date(expiredAt),
					})
					;(res as NextApiResponse).status(200).json({ message: 'Login successful' })
				} catch (error) {
					;(res as NextApiResponse).status(500).json({ message: 'Server error' })
				} finally {
					resolve(true)
				}
			})
		}

		proxy.once('proxyRes', handleLoginResponse)

		proxy.web(req, res, {
			target: process.env.API_URL,
			changeOrigin: true,
			selfHandleResponse: true, // handle response tra ve
		})
	})
}
