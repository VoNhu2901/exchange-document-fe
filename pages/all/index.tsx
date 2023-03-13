import { FilterPost, NewPost } from '@/components'
import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'

type Props = {}

const AllPostPage: NextPageWithLayout = (props: Props) => {
	return (
		<>
			<FilterPost />
			<NewPost title="Tất cả tin" />
		</>
	)
}

AllPostPage.Layout = MainLayout
export default AllPostPage
