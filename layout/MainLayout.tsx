import { Footer, Header, Seo } from '@/components'
import { LayoutProps } from '@/models'
import * as React from 'react'

export function MainLayout({ children }: LayoutProps) {
	return (
		<>
			<Seo
				title="Trao đổi tài liệu học tập | Exchange Document SGU"
				description="Website dành cho sinh viên trường Đại học Sài Gòn trao đổi hoặc mua bán tài liệu học tập"
				url="https://exchange-document-fe.vercel.app"
				thumbnailUrl="https://drive.google.com/file/d/1Atx_f0i5laHbjXQeqtBj-TfbyODPtjI5/view"
			/>
			<div className="relative">
				<Header />
				<div
					style={{
						minHeight: '100vh',
						marginTop: '10rem',
						marginLeft: '20rem',
						marginRight: '20rem',
					}}
				>
					{children}
				</div>
				<Footer />
			</div>
		</>
	)
}
