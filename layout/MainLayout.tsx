import { Footer, Header, Seo } from '@/components'
import { LayoutProps } from '@/models'

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
						minHeight: '70vh',
						marginTop: '10rem',
						width: '70rem',
						marginLeft: 'auto',
						marginRight: 'auto',
					}}
				>
					{children}
				</div>
				<Footer />
			</div>
		</>
	)
}
