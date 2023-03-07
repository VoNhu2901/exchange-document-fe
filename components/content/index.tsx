import { FieldTimeOutlined } from '@ant-design/icons'
import { Pagination } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import banner from '../../assets/images/banner1.jpg'

const imageStyle: React.CSSProperties = {
	height: '15rem',
	width: '15rem',
	objectFit: 'cover',
	borderRadius: '0.2rem',
}

export const Category = () => {
	return (
		<div className="mt-5 bg-white">
			<h2 className="ml-[2rem] pt-5">Khám phá danh mục</h2>
			<div className="grid grid-cols-7 grid-rows-2 justify-items-center ">
				{Array.from(Array(10), (_, i) => (
					<div key={i}>
						<div className="my-4 flex flex-col items-center text-xl">
							<Image
								src={banner}
								alt="photo"
								width={100}
								height={100}
								className="rounded-3xl"
							></Image>
							<p>Môn chung</p>
						</div>
					</div>
				))}
			</div>
			<Pagination
				defaultCurrent={1}
				total={50}
				style={{ textAlign: 'center', padding: '2rem 0' }}
			/>
		</div>
	)
}

export const NewPost = () => {
	return (
		<div>
			<div className="my-5 bg-white">
				<h2 className="ml-[2rem] pt-5">Tin mới đăng</h2>
				<div className="grid grid-cols-5 grid-rows-4 justify-items-center gap-2">
					{Array.from(Array(23), (_, i) => (
						<Link href={`/posts/${i}`} key={i} className="cursor-pointer no-underline">
							<div className="flex flex-col p-4 bg-white hover:shadow-[0_2px_8px_0_rgba(0,0,0,0.3)]">
								<Image
									src={banner}
									alt="new post"
									width={500}
									height={500}
									style={imageStyle}
								></Image>
								<h5 className="w-[15rem] m-0 my-3 font-normal text-xl truncate hover:text-clip text-black">
									Giáo trình Chủ nghĩa xã hội khoa học
								</h5>
								<span className="font-bold text-xl text-red mb-4">15,000 đ</span>
								<div className="flex justify-between text-gray-dark">
									<div className="flex gap-1 items-center ">
										<FieldTimeOutlined />
										<span>5 ngày trước</span>
									</div>
									<span>Bình Tân</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className="my-5 flex justify-center">
				<Pagination defaultCurrent={1} total={50} />
			</div>
		</div>
	)
}
