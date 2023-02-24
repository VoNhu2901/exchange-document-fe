import { Seo } from '@/components'
import { LayoutProps } from '@/models'

export interface IEmptyLayoutProps {}

export function EmptyLayout({ children }: LayoutProps) {
	return (
		<>
			<Seo
				title="Đăng ký - Đăng nhập"
				description="Website dành cho sinh viên trường Đại học Sài Gòn trao đổi hoặc mua bán tài liệu học tập"
<<<<<<< HEAD
				url="https://exchange-document-fe.vercel.app/"
=======
				url="exchange-document-fe.vercel.app"
>>>>>>> e16bf181751310bf528b891f4f04ce7f5ec8ea7d
				thumbnailUrl="https://drive.google.com/file/d/1Atx_f0i5laHbjXQeqtBj-TfbyODPtjI5/view"
			/>
			<div>{children}</div>
		</>
	)
}
