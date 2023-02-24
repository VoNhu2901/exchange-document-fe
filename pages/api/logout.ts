import Cookies from 'cookies'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' })
	}

	const cookies = new Cookies(req, res)
	cookies.set('access_token')
	res.status(200).json({ message: 'Logout successfully!!!' })
}
