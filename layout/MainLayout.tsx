import { Seo } from '@/components'
import { LayoutProps } from '@/models'
import { Layout } from 'antd'
import * as React from 'react'

const { Header, Footer, Sider, Content } = Layout

export function MainLayout({ children }: LayoutProps) {
	return (
		<>
			<Seo
				title="Trao đổi tài liệu học tập | Exchange Document SGU"
				description="Website dành cho sinh viên trường Đại học Sài Gòn trao đổi hoặc mua bán tài liệu học tập"
				url="https://exchange-document-fe.vercel.app"
				thumbnailUrl="https://drive.google.com/file/d/1Atx_f0i5laHbjXQeqtBj-TfbyODPtjI5/view"
			/>
			<Layout>
				<Header>Header</Header>
				<Content>Content</Content>
				<Footer>Footer</Footer>
			</Layout>
			{/* <Header />
			<div style={{ margin: '30px 50px' }}>{children}</div>
			<Footer /> */}
		</>
	)
}
