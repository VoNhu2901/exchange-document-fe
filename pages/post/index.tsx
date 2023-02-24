import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'

type Props = {}

const PostListPage: NextPageWithLayout = (props: Props) => {
	return <div>PostListPage</div>
}

PostListPage.Layout = MainLayout
PostListPage.isPrivate = true

export default PostListPage
