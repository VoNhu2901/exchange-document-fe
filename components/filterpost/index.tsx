import { ArrowRightOutlined, RollbackOutlined, SearchOutlined } from '@ant-design/icons'
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
						style={{ width: '15rem' }}
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
						style={{ width: '15rem' }}
						onChange={handleChange}
						options={[
							{ value: 'asc', label: 'Mới nhất' },
							{ value: 'desc', label: 'Trễ nhất' },
						]}
					/>
				</div>
				<div>
					<p className="font-bold">Lọc giá</p>
					<Input placeholder="Giá thấp nhất" style={{ width: '7rem' }} />
					<span>
						{' '}
						<ArrowRightOutlined />{' '}
					</span>
					<Input placeholder="Giá cao nhất" style={{ width: '7rem' }} />
				</div>
				<div>
					<p className="font-bold">Nhập từ khóa tìm kiếm</p>
					<Input placeholder="Tìm kiếm..." style={{ width: '15rem' }} />
				</div>
			</div>
			<div className="flex py-4 gap-5 justify-end mr-8">
				<button className="border-solid border-2 border-blue-dark w-40 rounded-xl flex gap-3 bg-white hover:bg-primary/40 cursor-pointer justify-center items-center py-1">
					<RollbackOutlined style={{ fontSize: '1.3rem', color: '#316BFF' }} />
					<span className="text-blue-dark text-xl font-bold">Đặt lại</span>
				</button>
				<button className=" border-none w-40 rounded-xl flex gap-3 bg-blue-dark hover:bg-blue-dark/90 cursor-pointer justify-center items-center py-1">
					<SearchOutlined style={{ fontSize: '1.3rem', color: 'white' }} />
					<span className="text-white text-xl font-bold">Tìm kiếm</span>
				</button>
			</div>
		</div>
	)
}
