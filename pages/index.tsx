import { Footer, Header, Seo } from '@/components'
import { Button } from 'antd'

export default function HomePage() {
	return (
		<>
			<Seo
				title="Trao đổi tài liệu học tập | Exchange Document SGU"
				description="Website dành cho sinh viên trường Đại học Sài Gòn trao đổi hoặc mua bán tài liệu học tập"
				url="https://github.com/VoNhu2901/traodoitailieusgu"
				thumbnailUrl="https://picsum.photos/200/300"
			/>
			<Header />
			<main>
				<Button type="dashed">Dashed Button</Button>
			</main>
			<Footer />
		</>
	)
}
