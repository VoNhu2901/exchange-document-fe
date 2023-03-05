import {
	DollarCircleOutlined,
	FileSearchOutlined,
	FolderOpenOutlined,
	HeartOutlined,
	HomeOutlined,
} from '@ant-design/icons'

export const ROUTE_LIST = [
	{
		id: 1,
		path: '/',
		name: 'Trang chủ',
		icon: <HomeOutlined />,
	},
	{
		id: 2,
		path: '/all',
		name: 'Tất cả tin',
		icon: <FileSearchOutlined />,
	},
	{
		id: 3,
		path: '/post',
		name: 'Mua/Bán',
		icon: <DollarCircleOutlined />,
	},
	{
		id: 4,
		path: '/manage',
		name: 'Quản lý tin',
		icon: <FolderOpenOutlined />,
	},
	{
		id: 5,
		path: '/favorite',
		name: 'Danh sách yêu thích',
		icon: <HeartOutlined />,
	},
]
