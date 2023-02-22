import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import { Button } from 'antd'

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const HomePage: NextPageWithLayout = () => {
	// console.log(publicRuntimeConfig.API_CODE)
	return (
		<>
			<h1>Hello Docker!!</h1>
			<h1>Hello Docker!!</h1>
			<h1>Hello Docker!!</h1>
			<h1>Hello Docker!!</h1>
			<h1>Hello Docker!!</h1>
			<h1>Hello Docker!!</h1>
			<h1>Hello Docker!!</h1>
			<h1>Hello Docker!!</h1>
			<h1>Hello Docker!!</h1>
			<h1 className="underline text-red-400">Hello Docker!!</h1>
			<Button type="dashed">Dashed Button</Button>
		</>
	)
}

HomePage.Layout = MainLayout
export default HomePage
