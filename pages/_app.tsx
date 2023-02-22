import { MainLayout } from '@/layout'
import { AppPropsWithLayout } from '@/models'
import '@/styles/globals.css'

export function App({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? MainLayout

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default App
