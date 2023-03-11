import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import {
	CalendarOutlined,
	ContactsOutlined,
	EnvironmentOutlined,
	LoadingOutlined,
	MailOutlined,
	PhoneOutlined,
	PlusOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Avatar, Button, Input, Select, Upload, message } from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
import { useState } from 'react'
const { TextArea } = Input

type Props = {}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
	const reader = new FileReader()
	reader.addEventListener('load', () => callback(reader.result as string))
	reader.readAsDataURL(img)
}

const beforeUpload = (file: RcFile) => {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
	if (!isJpgOrPng) {
		message.error('You can only upload JPG/PNG file!')
	}
	const isLt2M = file.size / 1024 / 1024 < 2
	if (!isLt2M) {
		message.error('Image must smaller than 2MB!')
	}
	return isJpgOrPng && isLt2M
}

const ReportPage: NextPageWithLayout = (props: Props) => {
	const [loading, setLoading] = useState(false)
	const [imageUrl, setImageUrl] = useState<string>()

	const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
		if (info.file.status === 'uploading') {
			setLoading(true)
			return
		}
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj as RcFile, (url) => {
				setLoading(false)
				setImageUrl(url)
			})
		}
	}

	const handleKeyPress = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
		console.log('handleKeyPress', ev)
	}

	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	)

	const handleChangeInput = (value: string) => {
		console.log(`selected ${value}`)
	}

	return (
		<div className="flex justify-center items-center my-10">
			<div className="bg-white shadow w-[60rem] h-[62rem] p-8 rounded-lg">
				<h1 className="m-0 text-center">Thông tin báo cáo vi phạm</h1>
				{/* THÔNG TIN NGƯỜI VI PHẠM */}
				<div>
					<h2>Thông tin người vi phạm</h2>
					<div>
						<div className="grid grid-cols-2 gap-4 items-start">
							<div className="flex gap-5 items-center">
								<Avatar size={80} icon={<UserOutlined />} />
								<div>
									<p className="font-medium text-2xl">Phạm Nguyễn Minh Thuận</p>
									<p className="font-medium text-lg">
										Mã số sinh viên: <span>311947738</span>
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-y-4">
								<div className="flex gap-1 font-normal text-lg">
									<span className="text-gray-dark">
										<ContactsOutlined /> Ngày tham gia:
									</span>
									<span>29/12/2023</span>
								</div>
								<div className="flex gap-1 font-normal text-lg">
									<span className="text-gray-dark">
										<UserOutlined /> Giới tính:
									</span>
									<span>Nam</span>
								</div>
								<div className="flex gap-1 font-normal text-lg">
									<span className="text-gray-dark">
										<CalendarOutlined /> Ngày sinh:
									</span>
									<span>29/12/2023</span>
								</div>
								<div className="flex gap-1 font-normal text-lg">
									<span className="text-gray-dark">
										<PhoneOutlined /> Số điện thoại:
									</span>
									<span>03827839897</span>
								</div>
								<div className="flex gap-1 font-normal text-lg">
									<span className="text-gray-dark">
										<MailOutlined /> Email:
									</span>
									<span>pnmthuan@gmai.com</span>
								</div>
								<div className="flex gap-1 font-normal text-lg">
									<span className="text-gray-dark w-28">
										<EnvironmentOutlined /> Địa chỉ:
									</span>
									<span className="">395 Đường Lê Văn Thọ, Phường 9, Quận Gò Vấp, Hồ Chí Minh</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* THÔNG TIN NGƯỜI BÁO CÁO VI PHẠM */}
				<div>
					<h2>Thông tin người báo cáo</h2>
					<div className="grid grid-cols-2 gap-3 m-5">
						<div className="">
							<div className="mb-5">
								<p className="text-gray-dark font-semibold italic">
									Chụp ảnh thẻ sinh viên &#40;mặt trước và mặt sau&#41;
								</p>
								<div className="flex">
									<Upload
										name="avatar"
										listType="picture-card"
										className="avatar-uploader"
										showUploadList={false}
										action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
										beforeUpload={beforeUpload}
										onChange={handleChange}
									>
										{imageUrl ? (
											<img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
										) : (
											uploadButton
										)}
									</Upload>
								</div>
							</div>
							<div className="mb-5">
								<p className="text-gray-dark font-semibold italic">
									Chụp ảnh căn cước công dân &#40;mặt trước và mặt sau&#41;
								</p>
								<div className="flex">
									<Upload
										name="avatar"
										listType="picture-card"
										className="avatar-uploader"
										showUploadList={false}
										action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
										beforeUpload={beforeUpload}
										onChange={handleChange}
									>
										{imageUrl ? (
											<img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
										) : (
											uploadButton
										)}
									</Upload>
								</div>
							</div>
						</div>
						<div className="">
							<div className="mb-5">
								<p className="text-gray-dark font-semibold">Tên người báo cáo</p>
								<Input placeholder="Nhập tên" />
							</div>
							<div className="mb-5">
								<p className="text-gray-dark font-semibold">Mã số sinh viên</p>
								<Input placeholder="Nhập tên môn" />
							</div>
							<div className="mb-5">
								<p className="text-gray-dark font-semibold">Số điện thoại</p>
								<Input placeholder="Nhập số điện thoại" />
							</div>
							<div className="mb-5">
								<p className="text-gray-dark font-semibold">Mô tả vi phạm</p>
								<TextArea
									placeholder="Nhập thông tin vi phạm"
									className="custom"
									style={{ height: 70 }}
									// onKeyPress={handleKeyPress}
								/>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<Button type="primary" style={{ width: '15rem' }}>
							Báo cáo
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

ReportPage.Layout = MainLayout
export default ReportPage
