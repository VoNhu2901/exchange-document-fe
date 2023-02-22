import { Footer, Header, Seo } from '@/components'
import { LayoutProps } from '@/models'
import Link from 'next/link'
import * as React from 'react'

export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
	React.useEffect(() => {
		console.log('Main Layout mounting')

		return () => {
			console.log('Main Layout unmounting')
		}
	}, [])

	return (
		<>
			<Seo
				title="Trao đổi tài liệu học tập | Exchange Document SGU"
				description="Website dành cho sinh viên trường Đại học Sài Gòn trao đổi hoặc mua bán tài liệu học tập"
				url="https://github.com/VoNhu2901/traodoitailieusgu"
				thumbnailUrl="https://picsum.photos/200/300"
			/>
			<Header />
			<div style={{ margin: '30px 50px' }}>{children}</div>
			<Footer />
		</>
	)
}
