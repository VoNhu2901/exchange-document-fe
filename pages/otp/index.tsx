import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import { Button, Input } from 'antd'

type Props = {}

const OTPPage: NextPageWithLayout = (props: Props) => {
	return (
		<div className="flex justify-center items-center mt-60">
			<div className="bg-white rounded-2xl shadow-2xl w-[30rem] h-[40rem] p-10">
				<div className="flex flex-col items-center">
					<h1>Xác thực OTP</h1>
					<p className="text-center">
						Chúng tôi đã gửi mã OTP về email của bạn. Vui lòng nhập mã OTP bên dưới để xác nhận tài
						khoản
					</p>
					<div className="mt-20">
						<Input style={{ width: '3rem' }} />
						<Input style={{ width: '3rem' }} />
						<Input style={{ width: '3rem' }} />
						<Input style={{ width: '3rem' }} />
						<Input style={{ width: '3rem' }} />
						<Input style={{ width: '3rem' }} />
					</div>
					<Button type="primary" style={{ marginTop: '2rem' }}>
						Xác thực
					</Button>
				</div>
			</div>
		</div>
	)
}

OTPPage.Layout = MainLayout
export default OTPPage
