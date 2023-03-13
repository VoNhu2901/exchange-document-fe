import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import { InboxOutlined, PhoneFilled, UserOutlined, WechatOutlined } from '@ant-design/icons'
import { Avatar, Carousel } from 'antd'
import Link from 'next/link'

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
		url: 'https://dfdsfd',
		thumbnailUrl: 'https://picsum.photos/200/300',
	},
	{
		id: 2,
		title: 'Chuyện chưa kể về anh hùng Lộc Viễn Tài: Cuộc chiến đấu bảo vệ Lũng Làn',
		description: 'Chuyện chưa kể về anh hùng Lộc Viễn Tài: Cuộc chiến đấu bảo vệ Lũng Làn ...',
		slug: 'chuyen-chua-ke',
		url: 'https://dfdsfd',
		thumbnailUrl: 'https://picsum.photos/200/300',
	},
]

const contentStyle: React.CSSProperties = {
	height: '45rem',
	width: '50rem',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
}

const PostDetailPage: NextPageWithLayout = () => {
	return (
		<>
			<div className="flex justify-center mb-5">
				<div className="bg-white w-[80rem]">
					<h2 className="ml-[2rem] pt-5">Thông tin chi tiết</h2>
					<div className="grid grid-cols-3 m-5">
						<div className="col-span-2">
							<Carousel autoplay>
								<div>
									<h3 style={contentStyle}>1</h3>
								</div>
								<div>
									<h3 style={contentStyle}>2</h3>
								</div>
							</Carousel>
							<div>
								<h3 className="font-bold text-2xl">Đồng hồ ECKO UNL TD sưu tầm độc hiếm fashion</h3>
								<p className="font-bold text-2xl text-red">550.000 đ</p>
								<p className="text-xl">
									❌❌Độc Lạ - Hàng Hiệu - Phê ❌❌ Đồng hồ hàng hiệu ECKO UNL TD. Unisex Nam Nữ
									chén được hết 😎 Vỏ thép đặc khối như 1 cái dĩa bay Sao Hoả Mới 97%
								</p>
								<p className="text-gray-dark">Thời gian đăng: 4 giờ trước</p>
							</div>
						</div>

						<div className="ml-2">
							<div className="mt-5 flex gap-3 items-center">
								<Avatar size={50} icon={<UserOutlined />} />
								<div className="">
									<p className="font-semibold text-xl m-0">Võ Hoàng Quỳnh Như</p>
									<Link href="/user/0" className="no-underline">
										<button className="border-solid border-[0.2rem] border-secondary w-24 py-2 rounded-full flex gap-3 bg-white hover:bg-secondary/40 cursor-pointer justify-center items-center">
											<span className="text-secondary text-sm font-bold">Xem trang</span>
										</button>
									</Link>
								</div>
							</div>
							<div className="flex flex-col gap-3 mt-32">
								<button className="border-solid border-2 border-white rounded-xl flex gap-3 bg-green hover:bg-green/90 cursor-pointer justify-center items-center w-full p-4">
									<InboxOutlined style={{ fontSize: '1.5rem', color: 'white' }} />
									<span className="text-white text-xl font-bold">Mua ngay</span>
								</button>
								<button className="border-solid border-2 border-green rounded-xl flex gap-3 bg-white hover:bg-white/90 cursor-pointer justify-center items-center w-full p-4">
									<PhoneFilled style={{ fontSize: '1.5rem', color: 'green' }} />
									<span className="text-green text-xl font-bold">Bấm để hiện số</span>
								</button>
								<button className="border-solid border-2 border-green rounded-xl flex gap-3 bg-white hover:bg-white/90 cursor-pointer justify-center items-center w-full p-4">
									<WechatOutlined style={{ fontSize: '1.5rem', color: 'green' }} />
									<span className="text-green text-xl font-bold">Chat với người bán</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

PostDetailPage.Layout = MainLayout
export default PostDetailPage
