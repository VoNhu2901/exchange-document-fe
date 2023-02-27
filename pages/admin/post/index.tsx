import { useAuth } from '@/hooks'
import { AdminLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import type { TableProps } from 'antd/es/table'

interface DataType {
	key: React.Key
	name: string
	age: number
	address: string
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
		filters: [
			{
				text: 'Joe',
				value: 'Joe',
			},
			{
				text: 'Category 1',
				value: 'Category 1',
			},
			{
				text: 'Category 2',
				value: 'Category 2',
			},
		],
		filterMode: 'tree',
		filterSearch: true,
		// onFilter: (value: string, record) => record.name.startsWith(value),
		onFilter: (value: string | number | boolean, record) => {
			if (typeof value === 'string') {
				return record.name.startsWith(value)
			}
			return false
		},
		width: '30%',
	},
	{
		title: 'Age',
		dataIndex: 'age',
		sorter: (a, b) => a.age - b.age,
	},
	{
		title: 'Address',
		dataIndex: 'address',
		filters: [
			{
				text: 'London',
				value: 'London',
			},
			{
				text: 'New York',
				value: 'New York',
			},
		],
		// onFilter: (value: string, record) => record.address.startsWith(value),
		onFilter: (value: string | number | boolean, record) => {
			if (typeof value === 'string') {
				return record.name.startsWith(value)
			}
			return false
		},
		filterSearch: true,
		width: '40%',
	},
]

const data: DataType[] = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sydney No. 1 Lake Park',
	},
	{
		key: '4',
		name: 'Jim Red',
		age: 32,
		address: 'London No. 2 Lake Park',
	},
]

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
	console.log('params', pagination, filters, sorter, extra)
}

const PostAdminPage: NextPageWithLayout = (): React.ReactElement => {
	const { profile } = useAuth()
	return (
		<div>
			{/* PostAdminPage: {JSON.stringify(profile)} */}
			<Table columns={columns} dataSource={data} onChange={onChange} />;
		</div>
	)
}

PostAdminPage.Layout = AdminLayout
export default PostAdminPage
