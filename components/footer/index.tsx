import { FacebookFilled, GithubOutlined, TwitterOutlined } from '@ant-design/icons'
import Link from 'next/link'

export const Footer = () => {
	return (
		<div className="bg-white h-96">
			<div className="grid grid-cols-4 gap-8 mx-72">
				<div className="my-6">
					<h3 className="font-medium">LIÊN HỆ</h3>
					<p className="text-gray-dark">Võ Hoàng Quỳnh Như - 3119410294</p>
					<Link href="mailto:vonhu.alien@gmail.com" className="no-underline">
						<p className="text-gray-dark">Email: vonhu.alien@gmail.com</p>
					</Link>
					<p className="text-gray-dark">Phạm Nguyễn Minh Thuận - 3119560070</p>
					<Link href="mailto:pnmthuan@gmail.com" className="no-underline">
						<p className="text-gray-dark">Email: pnmthuan@gmail.com</p>
					</Link>
				</div>
				<div className="my-6">
					<h3 className="font-medium">HỖ TRỢ KHÁCH HÀNG</h3>
					<Link href="" className="no-underline">
						<p className="text-gray-dark">Trung tâm trợ giúp</p>
					</Link>
					<Link href="" className="no-underline">
						<p className="text-gray-dark">An toàn mua bán</p>
					</Link>
					<Link href="" className="no-underline">
						<p className="text-gray-dark">Quy định cần biết</p>
					</Link>
					<Link href="" className="no-underline">
						<p className="text-gray-dark">Quy chế quyền riêng tư</p>
					</Link>
					<Link href="" className="no-underline">
						<p className="text-gray-dark">Liên hệ hỗ trợ</p>
					</Link>
				</div>
				<div className="my-6">
					<h3 className="font-medium">VỀ EXCHANGE SGU</h3>
					<Link href="" className="no-underline">
						<p className="text-gray-dark">Giới thiệu</p>
					</Link>
					<Link href="" className="no-underline">
						<p className="text-gray-dark">Tuyển dụng</p>
					</Link>
					<Link href="" className="no-underline">
						<p className="text-gray-dark">Truyền thông</p>
					</Link>
					<Link href="" className="no-underline">
						<p className="text-gray-dark">Blog</p>
					</Link>
				</div>
				<div className="my-6">
					<h3 className="font-medium">LIÊN KẾT</h3>
					<div className="flex gap-x-4">
						<Link href="" className="no-underline">
							<FacebookFilled style={{ fontSize: '3rem', color: '#385898' }} />
						</Link>
						<Link href="" className="no-underline">
							<GithubOutlined style={{ fontSize: '3rem', color: 'black' }} />
						</Link>
						<Link href="" className="no-underline">
							<TwitterOutlined style={{ fontSize: '3rem', color: '#1d9bf0' }} />
						</Link>
					</div>
					<h3 className="font-medium">ĐỊA CHỈ</h3>
					<p className="text-gray-dark">
						Địa chỉ: 273 Đ. An D. Vương, Phường 3, Quận 5, Thành phố Hồ Chí Minh 700000
					</p>
				</div>
			</div>
			<div>
				<p className="text-center text-gray-dark font-medium">
					Copyright © 2023. Powered by Vo Nhu and Minh Thuan. All right reserved.
				</p>
			</div>
		</div>
	)
}
