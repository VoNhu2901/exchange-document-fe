import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Input, Radio } from 'antd'
import React from 'react'

type Props = {}

const ProfilePage: NextPageWithLayout = (props: Props) => {
	return (
		<div className="flex justify-center items-center my-10">
			<div className="bg-white shadow-2xl w-[60rem] h-[55rem] px-8">
				<h1 className="mb-8">Thông tin cá nhân</h1>
				<div className="grid grid-cols-4">
					<div className="text-center">
						<Avatar size={128} icon={<UserOutlined />} />
						<label className="block">
							<span className="sr-only">Choose profile photo</span>
							<input
								type="file"
								className="block w-full text-sm text-slate-500 mt-5
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-secondary/30 file:text-secondary
      hover:file:bg-secondary/50
    "
							/>
						</label>
					</div>
					<div className="col-span-3">
						<div className="flex flex-col gap-5 w-full">
							<div>
								<p>Họ và tên</p>
								<Input value="Võ Hoàng Quỳnh Như" />
							</div>
							<div>
								<p>Số điện thoại</p>
								<Input value="" />
							</div>
							<div>
								<p>Mật khẩu</p>
								<Input value="" />
							</div>
							<div>
								<p>Họ và tên</p>
								<Input value="" />
							</div>
							<div>
								<p>Địa chỉ</p>
								<Input value="" />
							</div>
							<div>
								<p>Giới tính:</p>
								<Radio.Group
									// onChange={onChange}
									value={1}
								>
									<Radio value={1}>Nam</Radio>
									<Radio value={2}>Nữ</Radio>
								</Radio.Group>
							</div>
							<Button type="primary" style={{ margin: '1rem 0' }}>
								Cập nhật thông tin
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

ProfilePage.Layout = MainLayout
export default ProfilePage
