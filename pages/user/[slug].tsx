import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import {
	CalendarOutlined,
	ContactsOutlined,
	EnvironmentOutlined,
	FlagOutlined,
	MailOutlined,
	PhoneOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Avatar } from 'antd'
import Link from 'next/link'

type Props = {}

const UserPage: NextPageWithLayout = (props: Props) => {
	return (
		<>
			<div className="flex justify-center items-center my-10">
				<div className="bg-white shadow w-[60rem] h-[18rem] p-8 rounded-lg">
					<div className="grid grid-cols-2 gap-4 items-start">
						<div className="flex gap-5 items-center">
							<Avatar size={80} icon={<UserOutlined />} />
							<div>
								<p className="font-medium text-2xl">Phạm Nguyễn Minh Thuận</p>
								<p className="font-medium text-lg">
									Mã số sinh viên: <span>311947738</span>
								</p>
								<Link href="/report/0" className="no-underline">
									<button className="border-solid border-red w-48 py-3 rounded-full flex gap-3 bg-red/30 hover:bg-red/40 cursor-pointer justify-center items-center">
										<FlagOutlined style={{ fontSize: '1rem', color: 'red' }} />
										<span className="text-red text-base font-bold">Báo cáo vi phạm</span>
									</button>
								</Link>
							</div>
						</div>
						<div className="flex flex-col gap-y-4">
							<div className="flex gap-1 font-normal text-lg">
								<span className="text-gray-dark">
									<ContactsOutlined /> Ngày tham gia:
								</span>
								<span>29/12/2023</span>
							</div>
							<div className="flex gap-1 font-normal text-lg">
								<span className="text-gray-dark">
									<UserOutlined /> Giới tính:
								</span>
								<span>Nam</span>
							</div>
							<div className="flex gap-1 font-normal text-lg">
								<span className="text-gray-dark">
									<CalendarOutlined /> Ngày sinh:
								</span>
								<span>29/12/2023</span>
							</div>
							<div className="flex gap-1 font-normal text-lg">
								<span className="text-gray-dark">
									<PhoneOutlined /> Số điện thoại:
								</span>
								<span>03827839897</span>
							</div>
							<div className="flex gap-1 font-normal text-lg">
								<span className="text-gray-dark">
									<MailOutlined /> Email:
								</span>
								<span>pnmthuan@gmai.com</span>
							</div>
							<div className="flex gap-1 font-normal text-lg">
								<span className="text-gray-dark w-28">
									<EnvironmentOutlined /> Địa chỉ:
								</span>
								<span className="">395 Đường Lê Văn Thọ, Phường 9, Quận Gò Vấp, Hồ Chí Minh</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

UserPage.Layout = MainLayout
export default UserPage
