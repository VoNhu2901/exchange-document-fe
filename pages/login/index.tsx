import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import { Button, Input } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import banner from '../../assets/images/banner1.jpg'

type Props = {}
const imageStyle: React.CSSProperties = {
	height: '25rem',
	width: '30rem',
	objectFit: 'cover',
	borderRadius: '0.5rem',
}

const LoginPage: NextPageWithLayout = (props: Props) => {
	return (
		<>
			<div className="flex justify-center items-center mt-60">
				<div className="bg-white rounded-2xl shadow-2xl w-[80rem] h-[45rem] ">
					<div className="grid grid-cols-2 divide-x h-full">
						<div className="flex flex-col items-center justify-center">
							<h1 className="text-[3rem] text-blue-dark">Trao đổi tài liệu SGU</h1>
							<Image
								src={banner}
								alt="new post"
								width={500}
								height={500}
								style={imageStyle}
							></Image>
						</div>
						<div className="flex flex-col items-center m-10">
							<h1 className="mt-32">Đăng nhập</h1>
							<div className="flex flex-col justify-evenly items-center w-full h-full">
								<div className="flex flex-col gap-5 w-full">
									<div>
										<p>Tên đăng nhập</p>
										<Input placeholder="Nhập email" />
									</div>
									<div>
										<p>Mật khẩu</p>
										<Input.Password placeholder="Nhập mật khẩu" />
									</div>
								</div>

								<div>
									<Button type="primary">Đăng nhập</Button>
								</div>
								<p>
									Bạn chưa có tài khoản?{' '}
									<span>
										<Link href="/register">Tạo tài khoản</Link>
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

LoginPage.Layout = MainLayout
export default LoginPage
