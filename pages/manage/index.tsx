import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import Image from 'next/image'
import banner from '../../assets/images/banner1.jpg'
import { WechatOutlined } from '@ant-design/icons'

type Props = {}
const imageStyle: React.CSSProperties = {
	height: '10rem',
	width: '10rem',
	objectFit: 'cover',
	borderRadius: '0.5rem',
}

const ManagePostPage: NextPageWithLayout = (props: Props) => {
	return (
		<div className="flex justify-center">
			<div className="bg-white w-[80rem]">
				<h2 className="ml-[2rem] pt-5">Quản lý tin đăng</h2>

				<div className="m-5 hover:shadow-lg p-3 border-solid border-2 border-gray-light rounded">
					<div className="flex h-[10rem]">
						<Image src={banner} alt="photo" width={200} height={200} style={imageStyle}></Image>
						<div className="grow ml-5 flex flex-col justify-evenly">
							<p className="text-xl">Giáo dục đại cương</p>
							<p className="text-xl text-red font-bold">10000 đ</p>
							<p className="text-lg text-gray-dark">06/3/2023</p>
						</div>
						<div className="mt-3">
							<span className="bg-secondary/20 p-3 rounded-2xl font-bold text-secondary">
								Đã bán
							</span>
						</div>
					</div>
					<div className="grid grid-cols-2 justify-items-center p-4 ">
						<button className=" border-none w-48 rounded-xl flex gap-3 bg-blue-dark/30 hover:bg-blue-dark/10 cursor-pointer justify-center items-center p-3">
							<WechatOutlined style={{ fontSize: '1.5rem', color: '#316BFF' }} />
							<span className="text-blue-dark text-xl font-medium">Đã bán/Ẩn tin</span>
						</button>
						<button className=" border-none w-48 rounded-xl flex gap-3 bg-blue-dark/30 hover:bg-blue-dark/10 cursor-pointer justify-center items-center">
							<WechatOutlined style={{ fontSize: '1.5rem', color: '#316BFF' }} />
							<span className="text-blue-dark text-xl font-medium">Chỉnh sửa</span>
						</button>
					</div>
				</div>

				<div className="m-5 hover:shadow-lg p-3 border-solid border-2 border-gray-light rounded">
					<div className="flex h-[10rem]">
						<Image src={banner} alt="photo" width={200} height={200} style={imageStyle}></Image>
						<div className="grow ml-5 flex flex-col justify-evenly">
							<p className="text-xl">Giáo dục đại cương</p>
							<p className="text-xl text-red font-bold">10000 đ</p>
							<p className="text-lg text-gray-dark">06/3/2023</p>
						</div>
						<div className="mt-3">
							<span className="bg-secondary/20 p-3 rounded-2xl font-bold text-secondary">
								Đã bán
							</span>
						</div>
					</div>
					<div className="grid grid-cols-2 justify-items-center p-4 ">
						<button className=" border-none w-48 rounded-xl flex gap-3 bg-blue-dark/30 hover:bg-blue-dark/10 cursor-pointer justify-center items-center p-3">
							<WechatOutlined style={{ fontSize: '1.5rem', color: '#316BFF' }} />
							<span className="text-blue-dark text-xl font-medium">Đã bán/Ẩn tin</span>
						</button>
						<button className=" border-none w-48 rounded-xl flex gap-3 bg-blue-dark/30 hover:bg-blue-dark/10 cursor-pointer justify-center items-center">
							<WechatOutlined style={{ fontSize: '1.5rem', color: '#316BFF' }} />
							<span className="text-blue-dark text-xl font-medium">Chỉnh sửa</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

ManagePostPage.Layout = MainLayout
export default ManagePostPage
