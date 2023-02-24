import { Seo } from '@/components'
import { LayoutProps } from '@/models'

export interface IEmptyLayoutProps {}

export function EmptyLayout({ children }: LayoutProps) {
	return (
		<>
			<Seo
				title="Đăng ký - Đăng nhập"
				description="Website dành cho sinh viên trường Đại học Sài Gòn trao đổi hoặc mua bán tài liệu học tập"
				url="https://github.com/VoNhu2901/traodoitailieusgu"
				thumbnailUrl="https://picsum.photos/200/300"
			/>
			<div>{children}</div>
		</>
	)
}
