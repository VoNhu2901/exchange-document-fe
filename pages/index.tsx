import { Banner } from '@/components'
import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import { Button } from 'antd'

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const HomePage: NextPageWithLayout = () => {
	// console.log(publicRuntimeConfig.API_CODE)
	return (
		<>
			<Banner />
		</>
	)
}

HomePage.Layout = MainLayout
export default HomePage
