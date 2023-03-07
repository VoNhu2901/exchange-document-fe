import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import { Button, Input, Select } from 'antd'
import { useState } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
const { TextArea } = Input

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

const PostListPage: NextPageWithLayout = () => {
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
		<>
			<div className="flex justify-center mb-5">
				<div className="bg-white w-[80rem]">
					<h2 className="ml-[2rem] pt-3">Thông tin chi tiết</h2>
					<div className="grid grid-cols-3 gap-3 m-10">
						<div className="col-span-1">
							<div className="flex flex-col">
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
						<div className="col-span-2">
							<div className="mb-10">
								<p className="text-gray-dark font-semibold">Danh mục tin đăng</p>
								<Select
									defaultValue="lucy"
									style={{ width: '100%' }}
									onChange={handleChangeInput}
									options={[
										{ value: 'jack', label: 'Jack' },
										{ value: 'lucy', label: 'Lucy' },
										{ value: 'Yiminghe', label: 'yiminghe' },
										{ value: 'disabled', label: 'Disabled', disabled: true },
									]}
								/>
							</div>
							<div className="mb-10">
								<p className="text-gray-dark font-semibold">Tên môn</p>
								<Input placeholder="Nhập tên môn" />
							</div>
							<div className="mb-10">
								<p className="text-gray-dark font-semibold">Giá bán</p>
								<Input placeholder="Nhập giá" />
							</div>
							<div className="mb-10">
								<p className="text-gray-dark font-semibold">Mô tả</p>
								<TextArea
									placeholder="input here"
									className="custom"
									style={{ height: 100 }}
									onKeyPress={handleKeyPress}
								/>
							</div>
							<div className="mb-10">
								<p className="text-gray-dark font-semibold">Địa chỉ</p>
								<Input placeholder="Nhập địa chỉ" />
							</div>
							<Button type="primary" style={{ width: '100%' }}>
								Đăng tin
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

PostListPage.Layout = MainLayout
// PostListPage.isPrivate = true

export default PostListPage
