import { Seo } from '@/components'
import { Button } from 'antd'

type Author = {
	name: string
	avatar: string
}
type Post = {
	id: number | string
	title: string
	description: string
	slug?: string
	url: string
	author?: Author
	thumbnailUrl: string
}

type Props = {
	post: Post
}

const DATA_POST = [
	{
		id: 1,
		title: 'Nhà tình báo Ba Quốc dự báo sự sụp đổ của Liên Xô và bài toán tự lực vũ khí',
		description: 'Đại tướng Lê Đức Anh (Sáu Nam) không chỉ là nhà quân sự ...',
		slug: 'nha-tinh-bao',
		url: 'http://dfdsfd',
		thumbnailUrl: 'https://picsum.photos/200/300',
	},
	{
		id: 2,
		title: 'Chuyện chưa kể về anh hùng Lộc Viễn Tài: Cuộc chiến đấu bảo vệ Lũng Làn',
		description: 'Chuyện chưa kể về anh hùng Lộc Viễn Tài: Cuộc chiến đấu bảo vệ Lũng Làn ...',
		slug: 'chuyen-chua-ke',
		url: 'http://dfdsfd',
		thumbnailUrl: 'https://picsum.photos/200/300',
	},
]

const PostDetailPage = ({ post = DATA_POST[1] }: Props) => {
	if (!post) return null

	return (
		<>
			<Seo
				title={`${post.title}`}
				description={`${post.description}`}
				url={`${process.env.HOST_URL}/post/${post.slug}`}
				thumbnailUrl={post.thumbnailUrl}
			/>
			<h1 className="underline text-red-500">{post.title}</h1>
			<Button type="primary">Button By Antd</Button>
		</>
	)
}

export default PostDetailPage
