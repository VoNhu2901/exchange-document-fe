import { Banner, BreadcrumbItem, Category, NewPost } from '@/components'
import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const breadcrumbHome = [{ id: 1, name: 'Home', link: '/' }]

const HomePage: NextPageWithLayout = () => {
	// console.log(publicRuntimeConfig.API_CODE)
	return (
		<div className="mx-20">
			<BreadcrumbItem items={breadcrumbHome} />
			<Banner />
			<Category />
			<NewPost />
		</div>
	)
}

HomePage.Layout = MainLayout
export default HomePage
