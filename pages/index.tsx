import { Banner, Category, NewPost } from '@/components'
import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const breadcrumbHome = [{ id: 1, name: 'Home', link: '/' }]

const HomePage: NextPageWithLayout = () => {
	// console.log(publicRuntimeConfig.API_CODE)
	return (
		<div className="">
			{/* <BreadcrumbItem items={breadcrumbHome} /> */}
			<Banner />
			<Category />
			<NewPost title="Tin mới đăng" />
		</div>
	)
}

HomePage.Layout = MainLayout
export default HomePage
