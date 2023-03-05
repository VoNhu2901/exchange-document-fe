import React from 'react'
import { Carousel } from 'antd'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import Image from 'next/image'

const contentStyle: React.CSSProperties = {
	height: '25rem',
	background: '#fff',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}

const imageStyle: React.CSSProperties = {
	height: '20rem',
	width: '90%',
	objectFit: 'cover',
}

export const Banner = () => {
	return (
		<Carousel autoplay dots={false}>
			<div>
				<div className="grid grid-cols-2">
					<div style={contentStyle}>
						<h2 className="text-[3rem] m-0 text-blue-dark">Trao đổi tài liệu SGU</h2>
						<p className="text-xl text-gray-dark font-semibold">
							Bạn đồng hành của mỗi sinh viên vào mỗi học kì mới
						</p>
						<p className="text-xl font-medium text-gray-dark italic">
							- Khóa luận tốt nghiệp 2023 -
						</p>
					</div>
					<div className="bg-white flex justify-center items-center">
						<Image src={banner1} alt="banner1" style={imageStyle} />
					</div>
				</div>
			</div>

			<div>
				<div className="grid grid-cols-2">
					<div style={contentStyle}>
						<h2 className="text-[3rem] m-0 text-blue-dark">Trao đổi tài liệu SGU</h2>
						<p className="text-xl text-gray-dark font-semibold">
							Bạn đồng hành của mỗi sinh viên vào mỗi học kì mới
						</p>
						<p className="text-xl font-medium text-gray-dark italic">
							- Khóa luận tốt nghiệp 2023 -
						</p>
					</div>
					<div className="bg-white flex justify-center items-center">
						<Image src={banner2} alt="banner1" style={imageStyle} />
					</div>
				</div>
			</div>

			<div>
				<div className="grid grid-cols-2">
					<div style={contentStyle}>
						<h2 className="text-[3rem] m-0 text-blue-dark">Trao đổi tài liệu SGU</h2>
						<p className="text-xl text-gray-dark font-semibold">
							Bạn đồng hành của mỗi sinh viên vào mỗi học kì mới
						</p>
						<p className="text-xl font-medium text-gray-dark italic">
							- Khóa luận tốt nghiệp 2023 -
						</p>
					</div>
					<div className="bg-white flex justify-center items-center">
						<Image src={banner3} alt="banner1" style={imageStyle} />
					</div>
				</div>
			</div>
		</Carousel>
	)
}
