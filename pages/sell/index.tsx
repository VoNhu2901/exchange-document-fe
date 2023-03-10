import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import { FormOutlined } from '@ant-design/icons'
import { Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import Link from 'next/link'

interface DataType {
	key: string
	id: string
	name: string
	time: string
	price: number
	status: string[]
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Mã đơn',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Tên sản phẩm',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <Link href="/posts/0">{text}</Link>,
	},
	{
		title: 'Thời gian lập',
		dataIndex: 'time',
		key: 'time',
	},
	{
		title: 'Giá',
		dataIndex: 'price',
		key: 'price',
	},
	{
		title: 'Trạng thái',
		key: 'status',
		dataIndex: 'status',
		render: (_, { status }) => (
			<>
				{status.map((tag) => {
					let color = tag
					if (tag === 'Đã thanh toán') {
						color = 'green'
					}
					if (tag === 'Đã hủy') {
						color = 'volcano'
					}
					if (tag === 'Chờ xác nhận') {
						color = 'yellow'
					}
					if (tag === 'Hoàn tất') {
						color = 'geekblue'
					}
					return (
						<>
							<div className="flex flex-wrap m-3 w-32">
								<Tag color={color} key={tag}>
									{tag.toUpperCase()}
								</Tag>
							</div>
						</>
					)
				})}
			</>
		),
	},
	{
		title: 'Hành động',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				{/* <a>Invite {record.name}</a> */}
				<div className="flex flex-wrap gap-2 w-40">
					<button className="border-solid border-2 border-blue-dark w-40 rounded-xl flex gap-3 bg-white hover:bg-primary/40 cursor-pointer justify-center items-center">
						<FormOutlined style={{ fontSize: '1rem', color: '#316BFF' }} />
						<span className="text-blue-dark text-xl font-bold">Duyệt đơn</span>
					</button>
					<button className="border-solid border-2 border-blue-dark w-40 rounded-xl flex gap-3 bg-white hover:bg-primary/40 cursor-pointer justify-center items-center">
						<FormOutlined style={{ fontSize: '1rem', color: '#316BFF' }} />
						<span className="text-blue-dark text-xl font-bold">Duyệt đơn</span>
					</button>
					<button className="border-solid border-2 border-blue-dark w-40 rounded-xl flex gap-3 bg-white hover:bg-primary/40 cursor-pointer justify-center items-center">
						<FormOutlined style={{ fontSize: '1rem', color: '#316BFF' }} />
						<span className="text-blue-dark text-xl font-bold">Duyệt đơn</span>
					</button>
				</div>
			</Space>
		),
	},
]

const data: DataType[] = [
	{
		key: '1',
		id: '1',
		name: 'Chủ nghĩa xã hội khoa học',
		time: '01:12:00 17-02-2023',
		price: 78,
		status: ['Đã thanh toán', 'Chờ xác nhận'],
	},
	{
		key: '2',
		id: '2',
		name: 'Toán cao cấp',
		time: '01:12:00 17-02-2023',
		price: 78,
		status: ['Đã hủy'],
	},
	{
		key: '3',
		id: '3',
		name: 'Cơ sở trí tuệ nhân tạo',
		time: '01:12:00 17-02-2023',
		price: 78,
		status: ['Đã thanh toán', 'Hoàn tất'],
	},
]

const SellPage: NextPageWithLayout = () => {
	return (
		<div className="bg-white px-10 py-2 rounded-xl">
			<h1 className="text-blue-dark text-2xl">Danh sách đơn bán</h1>
			<Table columns={columns} dataSource={data} />
		</div>
	)
}

SellPage.Layout = MainLayout
export default SellPage
