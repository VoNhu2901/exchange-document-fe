import { FormOutlined, WechatOutlined } from '@ant-design/icons'
import { Input, Select } from 'antd'

export const FilterPost = () => {
	const handleChange = (value: string) => {
		console.log(`selected ${value}`)
	}

	return (
		<div className="my-5 bg-white">
			<div className="flex items-center justify-around py-3">
				<div>
					<p className="font-bold">Lựa chọn danh mục</p>
					<Select
						defaultValue="all"
						style={{ width: '17rem' }}
						onChange={handleChange}
						options={[
							{ value: 'all', label: 'All' },
							{ value: 'lucy', label: 'Lucy' },
						]}
					/>
				</div>
				<div>
					<p className="font-bold">Chọn thời gian đăng</p>
					<Select
						defaultValue="Mới nhất"
						style={{ width: '17rem' }}
						onChange={handleChange}
						options={[
							{ value: 'asc', label: 'Mới nhất' },
							{ value: 'desc', label: 'Trễ nhất' },
						]}
					/>
				</div>
				<div>
					<p className="font-bold">Lọc giá</p>
					<Select
						defaultValue="asc"
						style={{ width: '17rem' }}
						onChange={handleChange}
						options={[
							{ value: 'asc', label: 'Tăng dần' },
							{ value: 'desc', label: 'Giảm dần' },
						]}
					/>
				</div>
				<div>
					<p className="font-bold">Nhập từ khóa tìm kiếm</p>
					<Input placeholder="Tìm kiếm..." style={{ width: '17rem' }} />
				</div>
			</div>
			<div className="flex py-4 gap-5 justify-end mr-32">
				<button className="border-solid border-2 border-blue-dark w-40 rounded-xl flex gap-3 bg-white hover:bg-primary/40 cursor-pointer justify-center items-center py-1">
					<FormOutlined style={{ fontSize: '1rem', color: '#316BFF' }} />
					<span className="text-blue-dark text-xl font-bold">Đặt lại</span>
				</button>
				<button className=" border-none w-40 rounded-xl flex gap-3 bg-blue-dark hover:bg-blue-dark/90 cursor-pointer justify-center items-center py-1">
					<WechatOutlined style={{ fontSize: '1rem', color: 'white' }} />
					<span className="text-white text-xl font-bold">Tìm kiếm</span>
				</button>
			</div>
		</div>
	)
}
