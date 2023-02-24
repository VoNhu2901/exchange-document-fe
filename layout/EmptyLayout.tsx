import { Seo } from '@/components'
import { LayoutProps } from '@/models'

export interface IEmptyLayoutProps {}

export function EmptyLayout({ children }: LayoutProps) {
	return (
		<>
			<Seo
				title="Đăng ký - Đăng nhập"
				description="Website dành cho sinh viên trường Đại học Sài Gòn trao đổi hoặc mua bán tài liệu học tập"
				url="https://exchange-document-fe.vercel.app/"
				thumbnailUrl="https://drive.google.com/file/d/1Atx_f0i5laHbjXQeqtBj-TfbyODPtjI5/view"
			/>
			<div>{children}</div>
		</>
	)
}
