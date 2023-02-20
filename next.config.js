/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'standalone',
	publicRuntimeConfig: {
		API_CODE: process.env.API_CODE,
	},
	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'https',
	// 			hostname: 'example.commdbcdn.b-cdn.net',
	// 			port: '',
	// 			pathname: '/img/Photos/new-templates/bootstrap-login-form/**',
	// 		},
	// 	],
	// },
}

module.exports = nextConfig
