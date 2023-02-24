import axiosClient from '@/api-clients/axios-client'
import { Auth } from '@/components/common'
import { EmptyLayout } from '@/layout'
import { AppPropsWithLayout } from '@/models'
import '@/styles/globals.css'
import { SWRConfig } from 'swr/_internal'

export function App({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout
	const isPrivate = Component.isPrivate ?? false

	return (
		<SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
			{isPrivate ? (
				<Auth>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Auth>
			) : (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			)}
		</SWRConfig>
	)
}

export default App
