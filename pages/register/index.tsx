import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import { Button, Input, Radio, RadioChangeEvent } from 'antd'
import Link from 'next/link'
import { useState } from 'react'

const RegisterPage: NextPageWithLayout = () => {
	const [value, setValue] = useState(1)

	const onChange = (e: RadioChangeEvent) => {
		console.log('radio checked', e.target.value)
		setValue(e.target.value)
	}
	return (
		<>
			<div className="flex justify-center items-center mt-60">
				<div className="bg-white rounded-2xl shadow-2xl w-[50rem] h-[55rem] ">
					<div className="h-full">
						<div className="flex flex-col items-center m-10">
							<h1 className="mt-8">Đăng ký</h1>
							<div className="flex flex-col justify-evenly items-center w-full h-full">
								<div className="flex flex-col gap-5 w-full">
									<div>
										<p>Tên thành viên</p>
										<Input placeholder="Nhập tên thành viên" />
									</div>
									<div>
										<p>Số điện thoại</p>
										<Input placeholder="Nhập số điện thoại" />
									</div>
									<div>
										<p>Mật khẩu</p>
										<Input.Password placeholder="Nhập mật khẩu" />
									</div>
									<div>
										<p>Địa chỉ</p>
										<Input placeholder="Nhập địa chỉ" />
									</div>
									<div>
										<p>Giới tính:</p>
										<Radio.Group onChange={onChange} value={value}>
											<Radio value={1}>Nam</Radio>
											<Radio value={2}>Nữ</Radio>
										</Radio.Group>
									</div>
									<div className="flex justify-evenly mt-10">
										<p>
											Bạn đã có tài khoản?{' '}
											<span>
												<Link href="/login">Đăng nhập</Link>
											</span>
										</p>
										<Link href="/otp">
											<Button type="primary">Tiếp tục</Button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

RegisterPage.Layout = MainLayout
export default RegisterPage
