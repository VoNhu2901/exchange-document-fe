import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import Image from 'next/image'
import banner from '../../assets/images/banner1.jpg'
import { HeartFilled, WechatOutlined } from '@ant-design/icons'

type Props = {}
const imageStyle: React.CSSProperties = {
	height: '10rem',
	width: '10rem',
	objectFit: 'cover',
	borderRadius: '0.5rem',
}

const FavoritePostPage: NextPageWithLayout = (props: Props) => {
	return (
		<div className="flex justify-center">
			<div className="bg-white w-[80rem]">
				<h2 className="ml-[2rem] pt-5">Danh sách yêu thích</h2>

				<div className="m-5 hover:shadow-lg p-3 border-solid border-2 border-gray-light rounded">
					<div className="flex h-[10rem]">
						<Image src={banner} alt="photo" width={200} height={200} style={imageStyle}></Image>
						<div className="grow ml-5 flex flex-col justify-evenly">
							<p className="text-xl">Giáo dục đại cương</p>
							<p className="text-xl text-red font-bold">10000 đ</p>
							<p className="text-lg text-gray-dark">06/3/2023</p>
						</div>
						<div className="flex items-end">
							<div className="flex items-center justify-end gap-5 p-4 ">
								<button className=" border-none w-48 rounded-xl flex gap-3 bg-green/30 hover:bg-green/10 cursor-pointer justify-center items-center p-3">
									<WechatOutlined style={{ fontSize: '1.5rem', color: '#589f39' }} />
									<span className="text-green text-xl font-medium">Mua ngay</span>
								</button>
								<HeartFilled style={{ fontSize: '1.5rem', color: 'red' }} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

FavoritePostPage.Layout = MainLayout
export default FavoritePostPage
