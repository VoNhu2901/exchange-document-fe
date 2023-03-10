import { ROUTE_LIST } from '@/utils/data/route'
import {
	DownOutlined,
	FormOutlined,
	ReadOutlined,
	SmileOutlined,
	UserOutlined,
	WechatOutlined,
} from '@ant-design/icons'
import { Avatar, Button, Dropdown, Input, MenuProps, Space } from 'antd'
import Link from 'next/link'
import { RouteListProps } from './routeType'

const { Search } = Input

const items: MenuProps['items'] = [
	{
		key: '0',
		label: <Link href="/register">Đăng ký</Link>,
	},
	{
		key: '1',
		label: <Link href="/login">Đăng nhập</Link>,
	},
	{
		key: '2',
		label: <Link href="/profile">Thông tin cá nhân</Link>,
	},
	{
		type: 'divider',
	},
	{
		key: '3',
		label: (
			<Button
				// disabled={isSending}
				// onClick={handleLogoutClick}
				style={{ width: '100%', border: 'none' }}
			>
				<SmileOutlined />
				Logout
			</Button>
		),
	},
]

const onSearch = (value: string) => console.log(value)

export const Header = () => {
	return (
		<>
			<header className="fixed top-0 left-0 right-0 bg-primary text-white z-50">
				<div className="flex">
					<div className="flex grow no-wrap justify-center items-center gap-3">
						<ReadOutlined style={{ fontSize: '4rem' }} />
						<h1 className="text-white ">Exchange SGU</h1>
					</div>

					<div className="flex-none w-[60rem] py-4">
						<Menu routes={ROUTE_LIST}></Menu>
						<div className="flex gap-x-8 mt-5">
							<Search
								placeholder="Tìm kiếm trên Exchange SGU"
								allowClear
								enterButton
								onSearch={onSearch}
							/>
							<Link
								className="border-solid border-2 border-white w-48 rounded-xl flex gap-3 bg-secondary hover:bg-secondary/90 cursor-pointer justify-center items-center no-underline"
								href="/posts"
							>
								<FormOutlined style={{ fontSize: '1.2rem', color: 'white' }} />
								<span className="text-white text-xl font-bold">Đăng tin</span>
							</Link>
							<Link
								className=" border-none w-48 rounded-xl flex gap-3 bg-white hover:bg-white/90 cursor-pointer justify-center items-center no-underline"
								href="/chat"
							>
								<WechatOutlined style={{ fontSize: '1.5rem', color: '#316BFF' }} />
								<span className="text-blue-dark text-xl font-bold">Chat</span>
							</Link>
						</div>
					</div>

					<div className="grow">
						<div className="flex justify-center items-center h-full gap-3">
							<Avatar icon={<UserOutlined />} />
							<Dropdown menu={{ items }} trigger={['click']}>
								<a onClick={(e) => e.preventDefault()} style={{ cursor: 'pointer' }}>
									<Space>
										<span className="text-lg">Vo Hoang Quynh Nhu</span>
										<DownOutlined />
									</Space>
								</a>
							</Dropdown>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

const Menu: React.FC<RouteListProps> = ({ routes }) => {
	return (
		<>
			<ul className="list-none flex justify-between p-0 m-0">
				{routes.map((router) => (
					<li key={router.id}>
						<Link
							href={router.path}
							className="text-white no-underline text-lg font-bold flex gap-2 items-center"
						>
							{router.icon}
							<span>{router.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
